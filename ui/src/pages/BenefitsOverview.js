import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the Benefits Overview Section
const BenefitsWrapper = styled.section`
    padding: 5rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--deep-blue);
    font-weight: 700;
`;

const BenefitsCard = styled.div`
    position: relative;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const ContentWrapper = styled.div`
    text-align: left;
    margin-bottom: 2rem;
`;

const CardTitle = styled.h3`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--bright-coral);
    font-weight: bold;
`;

const CardSubheader = styled.h4`
    font-size: 1.2rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
    font-weight: 500;
`;

const CardDescription = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
    margin-bottom: 1rem;
    line-height: 1.5;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavigationButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    border: none;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }
`;

const BenefitImage = styled.img`
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    margin-top: 2rem;
`;

// Main Benefits Overview component
const BenefitsOverview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const benefits = [
        {
            title: 'Personalized Career Path',
            subheader: 'Tailored Recommendations Just for You',
            description:
                'Get career recommendations that are personalized to your skills, aspirations, and career goals. We analyze your profile and provide actionable steps to get you there.',
            image: 'https://via.placeholder.com/800x450?text=Personalized+Career+Path',
        },
        {
            title: 'Skill Gap Analysis',
            subheader: 'Identify Areas for Growth',
            description:
                'Our skill gap analysis helps you discover which skills are needed for your desired career roles. We provide learning plans to bridge those gaps and equip you for success.',
            image: 'https://via.placeholder.com/800x450?text=Skill+Gap+Analysis',
        },
        {
            title: 'Real-Time Job Suggestions',
            subheader: 'Never Miss an Opportunity',
            description:
                'Receive real-time job suggestions that match your skills and preferences. We curate job openings based on your profile, ensuring you always have access to the latest opportunities.',
            image: 'https://via.placeholder.com/800x450?text=Real-Time+Job+Suggestions',
        },
        {
            title: 'Expert Insights',
            subheader: 'Learn from Industry Leaders',
            description:
                'Gain insights from experts in your field. We offer valuable tips, industry trends, and career advice from professionals to help you stay ahead of the curve.',
            image: 'https://via.placeholder.com/800x450?text=Expert+Insights',
        },
        {
            title: 'Supportive Community',
            subheader: 'Join a Network of Like-Minded Individuals',
            description:
                'Connect with professionals and like-minded individuals who share similar career aspirations. Share knowledge, network, and grow together in a supportive community.',
            image: 'https://via.placeholder.com/800x450?text=Supportive+Community',
        },
        {
            title: 'Flexible Learning Resources',
            subheader: 'Learn at Your Own Pace',
            description:
                'Access a variety of learning resources that cater to your personal learning style. From articles to courses, learn what you need at your own pace and convenience.',
            image: 'https://via.placeholder.com/800x450?text=Flexible+Learning+Resources',
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length);
    };

    const currentBenefit = benefits[currentIndex];

    return (
        <BenefitsWrapper>
            <SectionTitle>Why Choose Trailblix?</SectionTitle>
            <BenefitsCard>
                <ContentWrapper>
                    <CardTitle>{currentBenefit.title}</CardTitle>
                    <CardSubheader>{currentBenefit.subheader}</CardSubheader>
                    <CardDescription>{currentBenefit.description}</CardDescription>
                </ContentWrapper>
                <BenefitImage src={currentBenefit.image} alt={currentBenefit.title} />
                <ButtonContainer>
                    <NavigationButton onClick={handleBack}>Back</NavigationButton>
                    <NavigationButton onClick={handleNext}>Next</NavigationButton>
                </ButtonContainer>
            </BenefitsCard>
        </BenefitsWrapper>
    );
};

export default BenefitsOverview;
