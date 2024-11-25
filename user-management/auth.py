import bcrypt
from pymongo import MongoClient

class Auth:
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['user_management']
        self.users = self.db['users']

    def find_user_by_email(self, email):
        return self.users.find_one({'email': email})

    def check_password(self, password, hashed_password):
        return bcrypt.checkpw(password.encode('utf-8'), hashed_password)