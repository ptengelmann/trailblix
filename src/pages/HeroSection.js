import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import background from '../assets/background.png';

// Styled component for the Hero Section
const HeroWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center align the content */
    text-align: center; /* Center align the text */
    padding: 8rem 3rem; /* Adjusted for better spacing */
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    position: relative;
    color: var(--soft-white);
    min-height: 80vh;
    z-index: 0;

    @media (max-width: 768px) {
        padding: 5rem 2rem; /* Adjusted padding for smaller screens */
    }
`;

const InfoCard = styled.div`
    display: inline-flex; /* Use inline-flex to center the card horizontally */
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 15px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 10;
`;

const InfoText = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--bright-coral);
    margin: 0;
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.div`
    position: relative;
    cursor: pointer;
    margin-left: 0.5rem;
    z-index: 10;
`;

const HoverCard = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95);
    color: var(--deep-blue);
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    z-index: 100;
    opacity: ${({ show }) => (show ? '1' : '0')};
    transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-10px)')};
    transition: opacity 0.3s, transform 0.3s;

    p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.4;
    }
`;

const Headline = styled.h1`
    font-size: 4.5rem; /* Adjusted for better visibility */
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--deep-blue);
    max-width: 90%;
    text-align: center;

    span {
        color: var(--bright-coral);
    }

    @media (max-width: 768px) {
        font-size: 3rem; /* Adjusted for mobile responsiveness */
    }
`;

const Subheadline = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    max-width: 700px;
    color: var(--deep-blue);
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 1.2rem; /* Adjusted for mobile responsiveness */
    }
`;

const CTAButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    max-width: 300px; /* Button width */
    margin: 0 auto; /* Center the button */

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: none;
    }

    @media (max-width: 768px) {
        font-size: 1rem; /* Adjust for smaller screens */
        width: 100%;
    }
`;

const HeroSection = () => {
    const [showHoverCard, setShowHoverCard] = useState(false);
    const navigate = useNavigate(); // Use navigate from react-router-dom

    const handleGetStartedClick = () => {
        navigate('/profile-creation'); // Navigate to Profile Creation Page
    };

    return (
        <HeroWrapper>
            <InfoCard>
                <InfoText>
                    Leading AI Career Path Platform
                    <IconWrapper
                        onMouseEnter={() => setShowHoverCard(true)}
                        onMouseLeave={() => setShowHoverCard(false)}
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <HoverCard show={showHoverCard}>
                            <p>
                                Trailblix leverages advanced AI technology to offer personalized career guidance.
                                Get insights into job trends, skill recommendations, and more—all tailored to your
                                unique career path.
                            </p>
                        </HoverCard>
                    </IconWrapper>
                </InfoText>
            </InfoCard>
            <Headline>
                Unlock Your Future with <span>AI-Powered Career Insights</span>
            </Headline>
            <Subheadline>
            Personalized career paths, job suggestions, and learning plans—all designed for you.
            </Subheadline>
            <CTAButton onClick={handleGetStartedClick}>Get Started</CTAButton>
        </HeroWrapper>
    );
};

export default HeroSection;
