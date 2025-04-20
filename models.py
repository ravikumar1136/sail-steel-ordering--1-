from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    grade = db.Column(db.String(20), nullable=False)
    thickness = db.Column(db.Float, nullable=False)
    width = db.Column(db.Float, nullable=False)
    length = db.Column(db.Float, nullable=False)
    finish = db.Column(db.String(20), nullable=False)
    quality = db.Column(db.String(20), nullable=False)
    edge = db.Column(db.String(20), nullable=False)
    b_quantity = db.Column(db.Float, nullable=False)
    customer = db.Column(db.String(100), nullable=False)
    remarks = db.Column(db.Text)
    ssp_ro_id = db.Column(db.String(50), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    required_quantity = db.Column(db.Float, nullable=False)
    mou = db.Column(db.String(50), nullable=False)
    in_stock = db.Column(db.Boolean, default=False)
    delivery_days = db.Column(db.String(20))
    delivery_date = db.Column(db.Date)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    user = db.relationship('User', backref=db.backref('orders', lazy=True), foreign_keys=[user_id])
