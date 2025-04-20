// This file contains mock data based on the provided stock dataset screenshot

export interface StockItem {
  typ: string
  dtp: string
  pkt: string
  grd: string
  fin: string
  thk: number
  widt: number
  lngt: number
  pwt: number
  qly: string
  edge: string
  asp: string
  hrc1: string
  bl: boolean
  sal: string
  store: string
  nickel: number
  coilno: string
}

export const stockData: StockItem[] = [
  {
    typ: "C",
    dtp: "04/06/2021",
    pkt: "FB81774",
    grd: "201",
    fin: "2D",
    thk: 1,
    widt: 1250,
    lngt: 0,
    pwt: 0.4,
    qly: "S",
    edge: "M",
    asp: "SSP",
    hrc1: "122738",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.55,
    coilno: "122738",
  },
  {
    typ: "C",
    dtp: "10/08/2014",
    pkt: "FA68412",
    grd: "201",
    fin: "2D",
    thk: 2,
    widt: 1250,
    lngt: 0,
    pwt: 1.016,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "121096 B",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.57,
    coilno: "121096 B",
  },
  {
    typ: "C",
    dtp: "10/08/2014",
    pkt: "FA68413",
    grd: "201",
    fin: "2D",
    thk: 2,
    widt: 1250,
    lngt: 0,
    pwt: 1.365,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "121096 B",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.57,
    coilno: "121096 B",
  },
  {
    typ: "C",
    dtp: "10/06/2021",
    pkt: "FB82000",
    grd: "201",
    fin: "2D",
    thk: 2,
    widt: 1250,
    lngt: 0,
    pwt: 0.972,
    qly: "C",
    edge: "M",
    asp: "SSP",
    hrc1: "121100",
    bl: false,
    sal: "TRUE",
    store: "Store Stock",
    nickel: 3.57,
    coilno: "121100",
  },
  {
    typ: "C",
    dtp: "18/08/2023",
    pkt: "CA28112",
    grd: "201LN",
    fin: "NO1",
    thk: 3,
    widt: 1250,
    lngt: 0,
    pwt: 2,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "224768",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 4.04,
    coilno: "224768",
  },
  {
    typ: "C",
    dtp: "15/08/2024",
    pkt: "CA31446",
    grd: "201LN",
    fin: "NO1",
    thk: 6,
    widt: 1250,
    lngt: 0,
    pwt: 14,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "235955",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 4.07,
    coilno: "235955",
  },
  {
    typ: "C",
    dtp: "24/02/2024",
    pkt: "FC22584",
    grd: "204CU",
    fin: "2D",
    thk: 0.3,
    widt: 1250,
    lngt: 0,
    pwt: 2.624,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "219925",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 1.5,
    coilno: "219925",
  },
  {
    typ: "C",
    dtp: "24/02/2024",
    pkt: "FC22580",
    grd: "204CU",
    fin: "2D",
    thk: 0.3,
    widt: 1250,
    lngt: 0,
    pwt: 2.6,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "219930",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 1.5,
    coilno: "219930",
  },
  // Test entries with specific HRC1 values for delivery time calculation
  {
    typ: "C",
    dtp: "01/01/2024",
    pkt: "TEST001",
    grd: "201",
    fin: "2D",
    thk: 3,
    widt: 1250,
    lngt: 0,
    pwt: 2.5,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "Kickback slab stk",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.5,
    coilno: "TEST001",
  },
  {
    typ: "C",
    dtp: "01/01/2024",
    pkt: "TEST002",
    grd: "201",
    fin: "2D",
    thk: 3,
    widt: 1250,
    lngt: 0,
    pwt: 2.5,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "SLAB STK",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.5,
    coilno: "TEST002",
  },
  {
    typ: "C",
    dtp: "01/01/2024",
    pkt: "TEST003",
    grd: "201",
    fin: "2D",
    thk: 3,
    widt: 1250,
    lngt: 0,
    pwt: 2.5,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "HRC HRM",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.5,
    coilno: "TEST003",
  },
  {
    typ: "C",
    dtp: "01/01/2024",
    pkt: "TEST004",
    grd: "201",
    fin: "2D",
    thk: 3,
    widt: 1250,
    lngt: 0,
    pwt: 2.5,
    qly: "P",
    edge: "M",
    asp: "SSP",
    hrc1: "HRC CRM",
    bl: false,
    sal: "TRUE",
    store: "",
    nickel: 3.5,
    coilno: "TEST004",
  },
]

// Function to check if an order matches any item in stock
export function checkStockAvailability(orderDetails: {
  grade: string
  thickness: number
  width: number
  finish: string
  quality: string
  edge: string
}) {
  console.log("Checking stock for:", orderDetails)

  return stockData.find(
    (item) =>
      item.grd === orderDetails.grade &&
      item.thk === orderDetails.thickness &&
      item.widt === orderDetails.width &&
      item.fin === orderDetails.finish &&
      item.qly === orderDetails.quality &&
      item.edge === orderDetails.edge,
  )
}

// Function to calculate delivery time based on SAL value and HRC1 value
export function calculateDeliveryTime(stockItem?: StockItem) {
  console.log("Calculating delivery time for:", stockItem)

  if (!stockItem) {
    // Default case if no stock match
    console.log("No stock match found, using default delivery time")
    return {
      days: "75-100",
      date: addDaysToCurrentDate(100),
    }
  }

  // Check SAL value and determine delivery time
  const salValue = stockItem.sal
  console.log("SAL value:", salValue)

  if (salValue === "TRUE") {
    // Check specific HRC1 types
    const hrc1Value = stockItem.hrc1
    console.log("HRC1 value:", hrc1Value)

    // Check for Kickback slab stk or SLAB STK (60-90 days)
    if (hrc1Value.includes("Kickback slab stk") || hrc1Value.includes("SLAB STK")) {
      console.log("HRC1 matches Kickback slab stk or SLAB STK pattern: 60-90 days")
      return {
        days: "60-90",
        date: addDaysToCurrentDate(90),
      }
    }

    // Check for HRC HRM, HRCS, HRCS JOBWORK, HRSS, REMOTE HRC (45-60 days)
    else if (
      hrc1Value.includes("HRC HRM") ||
      hrc1Value.includes("HRCS") ||
      hrc1Value.includes("HRCS JOBWORK") ||
      hrc1Value.includes("HRSS") ||
      hrc1Value.includes("REMOTE HRC")
    ) {
      console.log("HRC1 matches HRC HRM/HRCS/etc pattern: 45-60 days")
      return {
        days: "45-60",
        date: addDaysToCurrentDate(60),
      }
    }

    // Check for HRC CRM, coin blank stk, Packet Open wip, TRUE (30 days)
    else if (
      hrc1Value.includes("HRC CRM") ||
      hrc1Value.includes("coin blank stk") ||
      hrc1Value.includes("Packet Open wip") ||
      hrc1Value === "TRUE"
    ) {
      console.log("HRC1 matches HRC CRM/coin blank/etc pattern: 30 days")
      return {
        days: "30",
        date: addDaysToCurrentDate(30),
      }
    }

    // If in stock but doesn't match any specific HRC1 pattern
    else {
      console.log("In stock but no specific HRC1 pattern match, using 0 days")
      return {
        days: "0",
        date: addDaysToCurrentDate(0),
      }
    }
  }

  // Default case - if SAL is not TRUE
  console.log("SAL is not TRUE, using default delivery time")
  return {
    days: "75-100",
    date: addDaysToCurrentDate(100),
  }
}

// Helper function to add days to current date
function addDaysToCurrentDate(days: number): string {
  const currentDate = new Date()
  const futureDate = new Date(currentDate)
  futureDate.setDate(currentDate.getDate() + days)

  return futureDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}
