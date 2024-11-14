from flask import request, jsonify, session, render_template
from . import db
from .models import Item, User
from werkzeug.security import check_password_hash

@app.route('/')
def index():
    items = Item.query.all()
    return render_template('index.html', items=items)

@app.route('/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password_hash, data['password']) and user.role == 'admin':
        session['admin'] = True
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/items/limits', methods=['POST'])
def update_item_limits():
    if not session.get('admin'):
        return jsonify({"message": "Unauthorized"}), 403
    data = request.json
    for name, limit in data.items():
        item = Item.query.filter_by(name=name).first()
        if item:
            item.limit = limit
        else:
            db.session.add(Item(name=name, limit=limit))
    db.session.commit()
    return jsonify({"message": "Limits updated"}), 200
