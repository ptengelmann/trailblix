import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Import images directly
import b1Image from '../assets/b1.svg';
import b2Image from '../assets/b2.svg';
import b3Image from '../assets/b3.svg';
import b4Image from '../assets/b4.svg';

// Styled-components for the Benefits Section
const BenefitsWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    height: auto;
`;

const SectionTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    color: var(--deep-blue);
    font-weight: 700;
    margin-bottom: 3rem;
`;

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* Image and Text side-by-side */
    gap: 2rem;
    margin-bottom: 4rem;
    align-items: center; /* Align items in the center */
    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Stacks on mobile */
    }
`;

const BenefitCard = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')}; /* Alternates text and image */
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
    height: auto;
    padding: 2rem 0;
`;

const TextWrapper = styled.div`
    flex: 1;
    color: var(--deep-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h3`
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: var(--bright-coral);
`;

const SubTitle = styled.h4`
    font-size: 1.6rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
    line-height: 1.6;
    margin-bottom: 1.5rem;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 2rem;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    border: none;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }
`;

const ImageWrapper = styled.div`
    flex: 1;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BenefitImage = styled.img`
    width: 80%;
    max-width: 500px;  /* Increased max-width for larger images */
    height: auto;
    border-radius: 15px;
    background-color: transparent !important; /* Ensures no background behind the image */
    object-fit: contain;
    display: block; /* Fixes any inline-block rendering issues */
`;

const BenefitsOverview = () => {
    const navigate = useNavigate();
    const benefits = [
        {
            title: 'Personalized Career Path',
            subTitle: 'Tailored recommendations for your growth',
            description:
                'At Trailblix, we create a personalized career plan just for you. We analyze your current skills and aspirations to suggest the best career paths, tailored to your goals and the market demand. Our intelligent system helps you choose the next steps with confidence.',
            image: b1Image,
            link: '/profile-creation',
        },
        {
            title: 'Skill Gap Analysis',
            subTitle: 'Know exactly what skills to improve',
            description:
                'Our skill gap analysis tool identifies what skills are necessary for your dream job. Based on your current skills, we pinpoint the gaps and recommend specific learning paths to bridge them, giving you a clear road map to your career success.',
            image: b2Image,
            link: '/profile-creation',
        },
        {
            title: 'Real-Time Job Suggestions',
            subTitle: 'Stay updated with job opportunities',
            description:
                'Receive personalized job recommendations based on your skills, preferences, and career goals. Trailblix provides real-time job listings, ensuring that you never miss an opportunity to take the next step in your career.',
            image: b3Image,
            link: '/profile-creation',
        },
        {
            title: 'Expert Insights',
            subTitle: 'Stay ahead with professional advice',
            description:
                'Gain valuable insights from industry experts. Stay updated with the latest trends, tips, and career advice directly from professionals in your field. With Trailblix, you get the inside scoop on what works in your industry.',
            image: b4Image,
            link: '/profile-creation',
        },
    ];

    return (
        <BenefitsWrapper>
            <SectionTitle>Why Choose Trailblix?</SectionTitle>

            {benefits.map((benefit, index) => (
                <BenefitCard key={index} reverse={index % 2 !== 0}>
                    <TextWrapper>
                        <Title>{benefit.title}</Title>
                        <SubTitle>{benefit.subTitle}</SubTitle>
                        <Description>{benefit.description}</Description>
                        <Button onClick={() => navigate(benefit.link)}>Learn More</Button>
                    </TextWrapper>
                    <ImageWrapper>
                        <BenefitImage src={benefit.image} alt={benefit.title} />
                    </ImageWrapper>
                </BenefitCard>
            ))}
        </BenefitsWrapper>
    );
};

export default BenefitsOverview;
