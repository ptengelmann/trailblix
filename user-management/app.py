import logging
from logging.handlers import RotatingFileHandler
from flask import Flask, request, jsonify, Blueprint
from flask_cors import CORS
from pymongo import MongoClient
from service.auth_service import login as auth_login

logging.getLogger("flask_cors").level = logging.DEBUG

def create_mongo_connection():
    client = MongoClient("mongodb://mongo-dev-pod-host:27017/")
    app.logger.info(f"Connected to MongoDB, client: {client}")
    return client["user_management"]

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")
    setup_logging(app)
    # CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
    CORS(app)
    app.logger.info("CORS enabled", app)
    return app

app = create_app()
db = create_mongo_connection()
app.logger.info(f"Connected to MongoDB, database: user_management. DB: {db}")

def setup_logging(app):
    if not app.config["DEBUG"]:
        file_handler = RotatingFileHandler("app.log", maxBytes=10240, backupCount=10)
        file_handler.setLevel(logging.INFO)
        formatter = logging.Formatter(
            "%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]"
        )
        file_handler.setFormatter(formatter)
        app.logger.addHandler(file_handler)

@app.after_request
def add_header(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    app.logger.debug(f">>response: {response}")
    return response
    
@app.route("/")
def hello():
    caller_domain = request.headers.get("Origin")
    app.logger.info(f"Request received from domain: {caller_domain}")
    return "Hello, World!"

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    success, result = auth_login(data, db)
    if success:
        return jsonify({'message': 'Login successful', 'user': result}), 200
    else:
        return jsonify({'message': result}), 401

def parse_args():
    # Argument parsing
    parser = argparse.ArgumentParser(description="Flask Application")
    parser.add_argument("--debug", action="store_true", help="Enable debug mode")
    parser.add_argument(
        "--host",
        default="0.0.0.0",
        help="Host to run the application on (default: 0.0.0.0)",
    )
    parser.add_argument(
        "--port", type=int, default=5000, help="Port to run the server on"
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    app.run(host=args.host, port=args.port, debug=args.debug)
