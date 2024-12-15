import React, { useState } from 'react';
import '../App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        console.log('Subscribed with email:', email);
        fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        setEmail(''); // Clear input after subscribing
    };

    return (
        <div className="footer-wrapper">
            <div className="footer-links">
                <a href="/about">About Us</a>
                <a href="/features">Features</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="social-icons">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="newsletter-wrapper">
                <div>
                    <input
                        className="newsletter-input"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button className="subscribe-button" onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
