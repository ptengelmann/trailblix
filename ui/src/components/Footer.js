import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
    background-color: var(--deep-blue);
    color: var(--soft-white);
    padding: 3rem 2rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1.5rem;

    a {
        color: var(--soft-white);
        text-decoration: none;
        font-size: 1rem;
        transition: color 0.3s;

        &:hover {
            color: var(--bright-coral);
        }
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;

    svg {
        font-size: 1.8rem;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: var(--bright-coral);
        }
    }
`;

const NewsletterWrapper = styled.div`
    margin-top: 2rem;
    text-align: center;
`;

const NewsletterInput = styled.input`
    padding: 0.8rem;
    border-radius: 20px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
    width: 250px;
    margin-right: 0.5rem;
`;

const SubscribeButton = styled.button`
    padding: 0.8rem 2rem;
    background-color: var(--bright-coral);
    border-radius: 20px;
    color: var(--soft-white);
    font-size: 1rem;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff8787;
    }
`;

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        alert(`Subscribed with: ${email}`);
        setEmail(''); // Clear input after subscribing
    };

    return (
        <FooterWrapper>
            <FooterLinks>
                <a href="/about">About Us</a>
                <a href="/features">Features</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </FooterLinks>
            <SocialIcons>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
            </SocialIcons>
            <NewsletterWrapper>
                <p>Subscribe to our newsletter for updates and career tips!</p>
                <div>
                    <NewsletterInput
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <SubscribeButton onClick={handleSubscribe}>Subscribe</SubscribeButton>
                </div>
            </NewsletterWrapper>
            <p>© 2024 Trailblix. All rights reserved.</p>
        </FooterWrapper>
    );
};

export default Footer;
