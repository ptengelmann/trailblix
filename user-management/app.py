from flask import Flask, request, jsonify
from flask_cors import CORS
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Log the login attempt
    logger.info(f"Login attempt with email: {email} and password: {password}")

    return jsonify({'message': 'Login attempt logged'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)