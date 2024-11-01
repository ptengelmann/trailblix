import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
    background-color: var(--deep-blue);
    color: var(--soft-white);
    padding: 2rem;
    text-align: center;
`;

const FooterLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;

    a {
        color: var(--soft-white);
        text-decoration: none;
        font-size: 0.9rem;

        &:hover {
            color: var(--bright-coral);
        }
    }
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;

    svg {
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: var(--bright-coral);
        }
    }
`;

const Footer = () => (
    <FooterWrapper>
        <FooterLinks>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
        </FooterLinks>
        <SocialIcons>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
        </SocialIcons>
        <p>© 2024 Trailblix. All rights reserved.</p>
    </FooterWrapper>
);

export default Footer;
