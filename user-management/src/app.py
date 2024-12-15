import argparse
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from service.auth_service import login as auth_login

def configure_logging():
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger('flask.app')
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.DEBUG)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    return logger

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configure logging
logger = configure_logging()
# Connect to MongoDB
client = MongoClient('mongodb://mongo-dev-pod-host:27017/')
db = client['user_management']
logger.info(f"Connected to connect to MongoDB:{db}")

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    success, result = auth_login(data, db)
    if success:
        return jsonify({'message': 'Login successful', 'user': result}), 200
    else:
        return jsonify({'message': result}), 401

def parse_args():
    parser = argparse.ArgumentParser(description='Flask Application')
    parser.add_argument('--host', default='0.0.0.0', help='Host to run the application on (default: 0.0.0.0)')
    parser.add_argument('--port', type=int, default=5000, help='Port to run the server on (default: 5000)')
    parser.add_argument('--debug', action='store_true', help='Enable debug mode')
    return parser.parse_args()

if __name__ == '__main__':
    args = parse_args()
    logger.info("Starting User Management application")
    logger.debug(f"Host: {args.host}")
    logger.debug(f"Port: {args.port}")
    logger.debug(f"Debug mode: {args.debug}")
    app.run(host=args.host, port=args.port, debug=args.debug)
