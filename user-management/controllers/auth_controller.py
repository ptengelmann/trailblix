from flask import Blueprint, request, jsonify, current_app
from services.auth_service import AuthService

auth_bp = Blueprint('auth', __name__)
auth_service = AuthService()

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    current_app.logger.info('Login attempt for email: %s', data.get('email'))
    response = auth_service.login(data)
    current_app.logger.info('Login response: %s', response.status_code)
    return response

@auth_bp.route('/logout', methods=['POST'])
def logout():
    data = request.json
    current_app.logger.info('Logout attempt for token: %s', data.get('token'))
    response = auth_service.logout(data.get('token'))
    current_app.logger.info('Logout response: %s', response.status_code)
    return response