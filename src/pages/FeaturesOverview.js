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
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--deep-blue) 30%, var(--light-pink) 100%);
    position: relative;
    overflow: hidden;
    text-align: center;
    color: var(--soft-white);
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
        <Card>
            <IconWrapper>
                <FontAwesomeIcon icon={faUserCircle} />
            </IconWrapper>
            <CardTitle>Create a Profile</CardTitle>
            <CardDescription>
                Build your career profile and let our AI analyze your strengths.
            </CardDescription>
        </Card>
        <Card>
            <IconWrapper>
                <FontAwesomeIcon icon={faBrain} />
            </IconWrapper>
            <CardTitle>AI Career Matches</CardTitle>
            <CardDescription>
                Get tailored career suggestions based on your skills and goals.
            </CardDescription>
        </Card>
        <Card>
            <IconWrapper>
                <FontAwesomeIcon icon={faBook} />
            </IconWrapper>
            <CardTitle>Explore Learning Paths</CardTitle>
            <CardDescription>
                Discover courses and resources to bridge your skill gaps.
            </CardDescription>
        </Card>
        <Card>
            <IconWrapper>
                <FontAwesomeIcon icon={faBriefcase} />
            </IconWrapper>
            <CardTitle>Apply for Jobs</CardTitle>
            <CardDescription>
                Find job opportunities that match your ideal career path.
            </CardDescription>
        </Card>
    </FeaturesSection>
);

export default FeaturesOverview;
