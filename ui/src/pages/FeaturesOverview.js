import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBrain, faBook, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--soft-white);
  color: var(--deep-blue);
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeadline = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: var(--deep-blue);
  text-transform: uppercase;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack the cards on small screens */
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: var(--bright-coral);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--deep-blue);
  font-weight: bold;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: var(--gray-tone);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 350px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  padding-top: 1rem;
`;

const ExploreButton = styled.button`
  background-color: var(--bright-coral);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--deep-blue);
    transform: translateY(-3px);
  }
`;

const FeaturesOverview = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'Create Your Profile',
      description:
        'Quickly build your personalized profile with your skills, goals, and preferences to get started.',
      image: <FontAwesomeIcon icon={faUserCircle} />,
      link: '/profile-creation',
    },
    {
      title: 'Get AI-Driven Matches',
      description:
        'Receive AI-powered career recommendations that are tailored to your skills and aspirations.',
      image: <FontAwesomeIcon icon={faBrain} />,
      link: '/profile-creation',
    },
    {
      title: 'Discover Learning Resources',
      description:
        'Access tailored learning resources that help you fill any skill gaps and advance your career.',
      image: <FontAwesomeIcon icon={faBook} />,
      link: '/profile-creation',
    },
    {
      title: 'Explore Job Opportunities',
      description:
        'Find jobs that match your career goals, skills, and interests in real-time.',
      image: <FontAwesomeIcon icon={faBriefcase} />,
      link: '/profile-creation',
    },
  ];

  return (
    <FeaturesSection>
      <SectionHeadline>How Trailblix Works</SectionHeadline>
      <FeaturesGrid>
        {benefits.map((benefit, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{benefit.image}</IconWrapper>
            <FeatureTitle>{benefit.title}</FeatureTitle>
            <FeatureDescription>{benefit.description}</FeatureDescription>
            <ButtonWrapper>
              <ExploreButton onClick={() => navigate(benefit.link)}>
                Explore More
              </ExploreButton>
            </ButtonWrapper>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default FeaturesOverview;
