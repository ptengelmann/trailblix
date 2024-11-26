from flask import Blueprint, request, jsonify, current_app
from services.auth_service import AuthService

auth_bp = Blueprint('auth', __name__)
auth_service = AuthService()

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    current_app.logger.info('Login attempt for email: %s', data.get('email'))
    exists = auth_service.login_user(data.get('email'), data.get('password'))
    return jsonify({'exists': exists}), 200