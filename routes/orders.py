from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Order
import pandas as pd
from datetime import datetime, timedelta
import os
import traceback
import json

orders_bp = Blueprint('orders', __name__)

# Load stock data
def get_stock_data():
    try:
        # Try to load the stock data from CSV
        stock_data_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'stock_data.csv')
        print(f"Attempting to load stock data from: {stock_data_path}")
        
        if not os.path.exists(stock_data_path):
            print(f"❌ Stock data file not found at: {stock_data_path}")
            # Create a mock stock data for testing
            return create_mock_stock_data()
            
        df = pd.read_csv(stock_data_path)
        print(f"✅ Successfully loaded stock data with {len(df)} rows")
        
        # Print the column names to verify they match what we expect
        print(f"Stock data columns: {df.columns.tolist()}")
        
        # Print a sample of the data
        print("Sample data:")
        print(df.head())
        
        return df
    except Exception as e:
        print(f"❌ Error loading stock data: {str(e)}")
        print(traceback.format_exc())
        # Return mock data if file not found or other error
        return create_mock_stock_data()

# Create mock stock data for testing
def create_mock_stock_data():
    print("Creating mock stock data for testing")
    data = {
        'TYP': ['C'] * 12,
        'DTP': ['01/01/2024'] * 12,
        'PKT': [f'TEST{i:03d}' for i in range(1, 13)],
        'GRD': ['201', '201', '201', '201', '201LN', '201LN', '204CU', '204CU', '201', '201', '201', '201'],
        'FIN': ['2D', '2D', '2D', '2D', 'NO1', 'NO1', '2D', '2D', '2D', '2D', '2D', '2D'],
        'THK': [1.0, 2.0, 3.0, 2.0, 3.0, 6.0, 0.3, 0.3, 3.0, 3.0, 3.0, 3.0],
        'WIDT': [1250] * 12,
        'LNGT': [0] * 12,
        'PWT': [2.5] * 12,
        'QLY': ['S', 'P', 'P', 'C', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        'EDGE': ['M'] * 12,
        'ASP': ['SSP'] * 12,
        'HRC1': ['122738', '121096 B', 'HRC HRM', '121100', '224768', '235955', '219925', '219930', 
                'Kickback slab stk', 'SLAB STK', 'HRC CRM', 'coin blank stk'],
        'BL': [False] * 12,
        'SAL': ['TRUE'] * 12,
        'STORE': [''] * 12,
        'NICKEL': [3.5] * 12,
        'COILNO': [f'TEST{i:03d}' for i in range(1, 13)]
    }
    return pd.DataFrame(data)

@orders_bp.route('/place', methods=['POST'])
def place_order():
    data = request.get_json()
    print("📥 Incoming order data:", data)  # Debugging

    if not data:
        return jsonify({"error": "No data received"}), 400  # Handle empty request

    # Check required fields
    required_fields = [
        "grade", "thickness", "width", "length", "finish",
        "quality", "edge", "bQuantity", "customer", "sspRoId",
        "releaseDate", "requiredQuantity", "mou"
    ]
    
    for field in required_fields:
        if field not in data or data[field] in [None, ""]:
            print(f"❌ Missing required field: {field}")
            return jsonify({"error": f"Missing required field: {field}"}), 422

    try:
        # Check stock availability
        stock_data = get_stock_data()
        if stock_data.empty:
            print("❌ No stock data available")
            # Use default delivery time if no stock data
            delivery_info = {
                'days': '75-100',
                'date': (datetime.now() + timedelta(days=100)).strftime('%d/%m/%Y')
            }
            in_stock = None
        else:
            in_stock = check_stock_availability(data, stock_data)
            # Calculate delivery time based on stock availability
            delivery_info = calculate_delivery_time(in_stock)
        
        # Debug information
        print(f"Stock check result: {'In stock' if in_stock is not None else 'Not in stock'}")
        print(f"Delivery info: {delivery_info}")
        
        order = Order(
            user_id=data.get("user_id", 0),
            grade=data["grade"],
            thickness=float(data["thickness"]),
            width=float(data["width"]),
            length=float(data["length"]),
            finish=data["finish"],
            quality=data["quality"],
            edge=data["edge"],
            b_quantity=float(data["bQuantity"]),
            customer=data["customer"],
            remarks=data.get("remarks", ""),
            ssp_ro_id=data["sspRoId"],
            release_date=datetime.strptime(data["releaseDate"], "%Y-%m-%d").date(),
            required_quantity=float(data["requiredQuantity"]),
            mou=data["mou"],
            in_stock=in_stock is not None,
            delivery_days=delivery_info["days"],
            delivery_date=datetime.strptime(delivery_info["date"], "%d/%m/%Y").date()
        )

        db.session.add(order)
        db.session.commit()

        return jsonify({
            "message": "Order placed successfully!",
            "order_id": order.id,
            "in_stock": in_stock is not None,
            "delivery_days": delivery_info["days"],
            "delivery_date": delivery_info["date"]
        }), 200

    except Exception as e:
        print("❌ Error processing order:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": "Server error"}), 500

def check_stock_availability(order_details, stock_data):
    print("\n--- CHECKING STOCK AVAILABILITY ---")
    print(f"Order details: {order_details}")
    
    if stock_data.empty:
        print("❌ Stock data is empty")
        return None
    
    # Convert numeric values to float for comparison
    try:
        thickness = float(order_details['thickness'])
        width = float(order_details['width'])
        print(f"Converted thickness: {thickness}, width: {width}")
    except (ValueError, TypeError) as e:
        print(f"❌ Invalid thickness or width value: {e}")
        return None
    
    # Debug the values we're looking for
    print(f"Looking for: Grade={order_details['grade']}, Thickness={thickness}, Width={width}, "
          f"Finish={order_details['finish']}, Quality={order_details['quality']}, Edge={order_details['edge']}")
    
    # Check if the columns exist in the dataframe
    required_columns = ['GRD', 'THK', 'WIDT', 'FIN', 'QLY', 'EDGE', 'SAL', 'HRC1']
    missing_columns = [col for col in required_columns if col not in stock_data.columns]
    if missing_columns:
        print(f"❌ Missing columns in stock data: {missing_columns}")
        return None
    
    # Print the first few rows of stock data for debugging
    print("Stock data sample:")
    print(stock_data.head())
    
    # Create a mask for each condition and print the number of matches
    grade_mask = stock_data['GRD'].astype(str).str.strip() == str(order_details['grade']).strip()
    thickness_mask = stock_data['THK'] == thickness
    width_mask = stock_data['WIDT'] == width
    finish_mask = stock_data['FIN'].astype(str).str.strip() == str(order_details['finish']).strip()
    quality_mask = stock_data['QLY'].astype(str).str.strip() == str(order_details['quality']).strip()
    edge_mask = stock_data['EDGE'].astype(str).str.strip() == str(order_details['edge']).strip()
    
    print(f"Matches by condition:")
    print(f"Grade: {grade_mask.sum()} matches")
    print(f"Thickness: {thickness_mask.sum()} matches")
    print(f"Width: {width_mask.sum()} matches")
    print(f"Finish: {finish_mask.sum()} matches")
    print(f"Quality: {quality_mask.sum()} matches")
    print(f"Edge: {edge_mask.sum()} matches")
    
    # Combined mask
    combined_mask = grade_mask & thickness_mask & width_mask & finish_mask & quality_mask & edge_mask
    print(f"Total combined matches: {combined_mask.sum()}")
    
    # Filter stock data based on order details
    filtered_stock = stock_data[combined_mask]
    
    if filtered_stock.empty:
        print("❌ No matching stock found")
        return None
    
    # Get the first matching item
    matching_item = filtered_stock.iloc[0].to_dict()
    print(f"✅ Found matching stock: {matching_item}")
    return matching_item

def calculate_delivery_time(stock_item):
    print("\n--- CALCULATING DELIVERY TIME ---")
    
    if stock_item is None:
        print("No stock item found, using default delivery time")
        # Default case if no stock match
        delivery_date = (datetime.now() + timedelta(days=100)).strftime('%d/%m/%Y')
        return {
            'days': '75-100',
            'date': delivery_date
        }
    
    # Check SAL value and determine delivery time
    sal_value = str(stock_item.get('SAL', '')).strip()
    hrc1_value = str(stock_item.get('HRC1', '')).strip()
    
    print(f"Stock item SAL value: '{sal_value}'")
    print(f"Stock item HRC1 value: '{hrc1_value}'")
    
    if sal_value == 'TRUE':
        print("SAL value is 'TRUE', checking HRC1 value")
        
        # Check for Kickback slab stk or SLAB STK (60-90 days)
        if 'Kickback slab stk' in hrc1_value or 'SLAB STK' in hrc1_value:
            print("HRC1 matches 'Kickback slab stk' or 'SLAB STK' pattern: 60-90 days")
            delivery_date = (datetime.now() + timedelta(days=90)).strftime('%d/%m/%Y')
            return {
                'days': '60-90',
                'date': delivery_date
            }
        
        # Check for HRC HRM, HRCS, HRCS JOBWORK, HRSS, REMOTE HRC (45-60 days)
        elif any(term in hrc1_value for term in ['HRC HRM', 'HRCS', 'HRCS JOBWORK', 'HRSS', 'REMOTE HRC']):
            print("HRC1 matches HRC HRM/HRCS/etc pattern: 45-60 days")
            delivery_date = (datetime.now() + timedelta(days=60)).strftime('%d/%m/%Y')
            return {
                'days': '45-60',
                'date': delivery_date
            }
        
        # Check for HRC CRM, coin blank stk, Packet Open wip, TRUE (30 days)
        elif any(term in hrc1_value for term in ['HRC CRM', 'coin blank stk', 'Packet Open wip']) or hrc1_value == 'TRUE':
            print("HRC1 matches HRC CRM/coin blank/etc pattern: 30 days")
            delivery_date = (datetime.now() + timedelta(days=30)).strftime('%d/%m/%Y')
            return {
                'days': '30',
                'date': delivery_date
            }
        else:
            print(f"HRC1 value '{hrc1_value}' doesn't match any specific pattern, but item is in stock")
            delivery_date = datetime.now().strftime('%d/%m/%Y')
            return {
                'days': '0',
                'date': delivery_date
            }
    else:
        print(f"SAL value is not 'TRUE', it's '{sal_value}'")
    
    # Default case - if SAL is not TRUE or HRC1 doesn't match any condition
    print("Using default delivery time: 75-100 days")
    delivery_date = (datetime.now() + timedelta(days=100)).strftime('%d/%m/%Y')
    return {
        'days': '75-100',
        'date': delivery_date
    }

# Add test routes for debugging
@orders_bp.route('/test', methods=['GET'])
def test_stock():
    stock_data = get_stock_data()
    if stock_data.empty:
        return jsonify({"error": "No stock data available"}), 500
    
    # Create a test order that should match your data
    test_order = {
        "grade": "201",
        "thickness": 1.0,
        "width": 1250.0,
        "finish": "2D",
        "quality": "S",
        "edge": "M"
    }
    
    # Check if it matches
    match = check_stock_availability(test_order, stock_data)
    
    # Calculate delivery time
    delivery = calculate_delivery_time(match)
    
    return jsonify({
        "match_found": match is not None,
        "match_details": json.loads(json.dumps(match, default=str)) if match else None,
        "delivery_info": delivery
    })

@orders_bp.route('/stock', methods=['GET'])
def view_stock():
    stock_data = get_stock_data()
    if stock_data.empty:
        return jsonify({"error": "No stock data available"}), 500
    
    # Convert to list of dictionaries for JSON response
    stock_list = json.loads(stock_data.to_json(orient='records'))
    
    return jsonify({
        "count": len(stock_list),
        "data": stock_list[:10]  # Return first 10 records
    })
