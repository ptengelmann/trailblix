import argparse
import logging
from logging.handlers import RotatingFileHandler
from flask import Flask, request
from flask_cors import CORS
from pymongo import MongoClient
from controllers.auth_controller import create_auth_blueprint

def create_mongo_connection():
    client = MongoClient('mongodb://mongo-dev-pod-host:27017/')
    return client['user_management']

def setup_logging(app):
    if not app.config['DEBUG']:
        # Create a file handler object
        file_handler = RotatingFileHandler('app.log', maxBytes=10240, backupCount=10)
        file_handler.setLevel(logging.INFO)
        
        # Create a formatter object
        formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
        file_handler.setFormatter(formatter)
        
        # Add the file handler to the app's logger
        app.logger.addHandler(file_handler)

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    # Enable CORS for all origins
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    db = create_mongo_connection()
    app.logger.info(f"Connected to MongoDB, database: user_management. DB: {db}")
    auth_bp = create_auth_blueprint(db)
    app.register_blueprint(auth_bp)

    @app.route('/')
    def hello():
        # Print the domain of the caller
        caller_domain = request.headers.get('Origin')
        app.logger.info(f"Request received from domain: {caller_domain}")
        return "Hello, World!"

    setup_logging(app)
    return app

def parse_args():
    # Argument parsing
    parser = argparse.ArgumentParser(description='Flask Application')
    parser.add_argument('--debug', action='store_true', help='Enable debug mode')
    parser.add_argument('--host', default='0.0.0.0', help='Host to run the application on (default: 0.0.0.0)')
    parser.add_argument('--port', type=int, default=5000, help='Port to run the server on')
    return parser.parse_args()

if __name__ == '__main__':
    args = parse_args()
    app = create_app()
    app.run(host=args.host, port=args.port, debug=args.debug)
