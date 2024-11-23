import logging
from logging.handlers import RotatingFileHandler
from flask import Flask
from controllers.auth_controller import auth_bp
import argparse

# Argument parsing
parser = argparse.ArgumentParser(description='Flask Application')
parser.add_argument('--debug', action='store_true', help='Enable debug mode')
parser.add_argument('--port', type=int, default=5000, help='Port to run the server on')
args = parser.parse_args()

app = Flask(__name__)
app.config.from_object('config.Config')

# Set up logging
if not args.debug:
    # Create a file handler object
    file_handler = RotatingFileHandler('app.log', maxBytes=10240, backupCount=10)
    file_handler.setLevel(logging.INFO)
    
    # Create a formatter object
    formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
    file_handler.setFormatter(formatter)
    
    # Add the file handler to the app's logger
    app.logger.addHandler(file_handler)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=args.debug, port=args.port)
