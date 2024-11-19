// src/pages/FeaturesOverview.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBrain, faBook, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const floatAnimation = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
`;

const FeaturesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--deep-blue) 30%, var(--light-pink) 100%);
    text-align: center;
    color: var(--soft-white);
`;

const SectionHeadline = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--soft-white);
`;

const FeaturesGrid = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    width: 100%;
`;

const Card = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 250px;
    padding: 2rem;
    margin: 1rem;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    position: relative;
    z-index: 1;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const IconWrapper = styled.div`
    font-size: 2.5rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
    animation: ${floatAnimation} 3s ease-in-out infinite;
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--deep-blue);
`;

const CardDescription = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
`;

const FeaturesOverview = () => (
    <FeaturesSection>
        <SectionHeadline>How Trailblix Works</SectionHeadline>
        <FeaturesGrid>
            <Card>
                <IconWrapper>
                    <FontAwesomeIcon icon={faUserCircle} />
                </IconWrapper>
                <CardTitle>Create Your Profile</CardTitle>
                <CardDescription>
                    Build your career profile and let our AI analyze your strengths.
                </CardDescription>
            </Card>
            <Card>
                <IconWrapper>
                    <FontAwesomeIcon icon={faBrain} />
                </IconWrapper>
                <CardTitle>Get AI-Driven Career Matches</CardTitle>
                <CardDescription>
                    Receive tailored career suggestions based on your skills and goals.
                </CardDescription>
            </Card>
            <Card>
                <IconWrapper>
                    <FontAwesomeIcon icon={faBook} />
                </IconWrapper>
                <CardTitle>Discover Learning Resources</CardTitle>
                <CardDescription>
                    Explore courses and resources to bridge your skill gaps.
                </CardDescription>
            </Card>
            <Card>
                <IconWrapper>
                    <FontAwesomeIcon icon={faBriefcase} />
                </IconWrapper>
                <CardTitle>Explore Job Opportunities</CardTitle>
                <CardDescription>
                    Find job openings that align with your ideal career path.
                </CardDescription>
            </Card>
        </FeaturesGrid>
    </FeaturesSection>
);

export default FeaturesOverview;
