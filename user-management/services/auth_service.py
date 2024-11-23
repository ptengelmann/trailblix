from flask import jsonify, current_app
from utils.auth import Auth

class AuthService:
    def __init__(self):
        self.auth = Auth()

    def login(self, data):
        token = self.auth.authenticate(data['email'], data['password'])
        if token:
            current_app.logger.info('User authenticated successfully')
            return jsonify({'token': token}), 200
        current_app.logger.warning('Invalid login attempt')
        return jsonify({'error': 'Invalid credentials'}), 401

    def logout(self, token):
        success = self.auth.revoke_token(token)
        if success:
            current_app.logger.info('User logged out successfully')
            return jsonify({'message': 'Logged out successfully'}), 200
        current_app.logger.warning('Invalid logout attempt')
        return jsonify({'error': 'Invalid token'}), 401