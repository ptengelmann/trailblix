from flask import Blueprint, request, jsonify, current_app
from flask_cors import CORS
import bcrypt

def create_auth_blueprint(db):
    auth_bp = Blueprint('auth_bp', __name__)
    CORS(auth_bp)

    @auth_bp.route('/api/login', methods=['POST'])
    def login():
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        current_app.logger.info(f"Login attempt with email: {email}")
        
        users_collection = db['users']
        current_app.logger.debug(f">>>Querying MongoDB for email: {email}")
        user = users_collection.find_one({'email': email})
        current_app.logger.debug(f">>>User: {user}")

        if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
            current_app.logger.info(f"Login successful for email: {email}")
            return jsonify({'message': 'Login successful'}), 200
        else:
            current_app.logger.warning(f"Invalid login attempt for email: {email}")
            return jsonify({'message': 'Invalid credentials'}), 401

    return auth_bp