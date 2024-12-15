import bcrypt
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def login(data, db):
    email = data.get('email')
    password = data.get('password')
        
    logger.info(f"Login attempt with email: {email}/{password}")
        
    users_collection = db['users']
    logger.debug(f">>>Querying MongoDB for email: {email}")
    user = users_collection.find_one({'email': email})
    logger.debug(f">>>User: {user}")

    if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
        logger.info(f"Login successful for email: {email}")
        return True, user
    else:
        logger.warning(f"Invalid login attempt for email: {email} and collection user: {user}")
        return False, "Invalid credentials"
    
def register(data, db):
    logger.debug(f"Registering user with data: {data}") 
    try:
        document = {'email' : data['email'], 'password' : data['password']}
        db.insert_one(document)
        return True, document
    except Exception as e:
        logger.warning(f"Register user did not succeed for email: {data['email']} and exception: {e}")
        return False, "Unable to register"