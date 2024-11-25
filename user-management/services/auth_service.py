from flask import jsonify, current_app
from auth import Auth

class AuthService:
    def __init__(self):
        self.auth = Auth()

    def login_user(self, email, password):
        user = self.auth.find_user_by_email(email)
        if user and self.auth.check_password(password, user['password']):
            return True
        return False