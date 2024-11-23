import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

const CareerDetailsWrapper = styled.div`
    padding: 2rem;
    background-color: var(--light-pink);
    min-height: 100vh;
`;

const CareerDetailsCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

const BackButton = styled.button`
    background-color: var(--deep-blue);
    color: var(--soft-white);
    padding: 0.75rem 2rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-bottom: 1.5rem;

    &:hover {
        background-color: var(--bright-coral);
    }
`;

const CareerTitle = styled.h3`
    font-size: 2.5rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const CareerDetail = styled.p`
    font-size: 1.1rem;
    color: var(--dark-gray);
    margin-bottom: 1rem;
`;

const SectionTitle = styled.h4`
    font-size: 1.5rem;
    color: var(--deep-blue);
    margin-top: 2rem;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    margin-right: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: var(--deep-blue);
        transform: translateY(-3px);
    }
`;

const CareerDetailsPage = () => {
    const { careerName } = useParams(); // Get the career name from the URL
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/dashboard/career-paths');
    };

    const careerDetails = {
        'data-scientist': {
            overview: 'A Data Scientist is responsible for analyzing large sets of data to derive actionable insights.',
            salary: '$90,000 - $120,000',
            growth: 'High',
            topLocations: 'New York, San Francisco, London',
            skills: 'Python, R, Machine Learning, SQL, Data Visualization',
            learningPath: 'Data Science Bootcamp, Machine Learning Certification',
            careerProgression: 'Junior Data Scientist → Data Scientist → Senior Data Scientist → Lead Data Scientist',
            relatedRoles: ['Data Analyst', 'Machine Learning Engineer'],
            industryTrends: 'Increased demand for data-driven decision-making across all industries.',
            jobMarketInsights: 'Top employers: Google, Amazon, Facebook.',
        },
    };

    const careerInfo = careerDetails[careerName] || {};

    return (
        <CareerDetailsWrapper>
            <BackButton onClick={handleBackClick}>Back to Career Paths</BackButton>

            <CareerDetailsCard>
                <CareerTitle>{careerName.replace('-', ' ').toUpperCase()}</CareerTitle>
                <CareerDetail><strong>Overview:</strong> {careerInfo.overview}</CareerDetail>
                <CareerDetail><strong>Average Salary:</strong> {careerInfo.salary}</CareerDetail>
                <CareerDetail><strong>Growth Potential:</strong> {careerInfo.growth}</CareerDetail>
                <CareerDetail><strong>Top Hiring Locations:</strong> {careerInfo.topLocations}</CareerDetail>
                <CareerDetail><strong>Skills Required:</strong> {careerInfo.skills}</CareerDetail>
                <CareerDetail><strong>Learning Path:</strong> {careerInfo.learningPath}</CareerDetail>

                <SectionTitle>Career Progression</SectionTitle>
                <CareerDetail>{careerInfo.careerProgression}</CareerDetail>

                <SectionTitle>Related Roles</SectionTitle>
                <CareerDetail>{careerInfo.relatedRoles.join(', ')}</CareerDetail>

                <SectionTitle>Industry Trends</SectionTitle>
                <CareerDetail>{careerInfo.industryTrends}</CareerDetail>

                <SectionTitle>Job Market Insights</SectionTitle>
                <CareerDetail>{careerInfo.jobMarketInsights}</CareerDetail>

                {/* Actions for users */}
                <Button>Bookmark Path</Button>
                <Button>Start Learning</Button>
                <Button>Apply for Jobs</Button>
            </CareerDetailsCard>
        </CareerDetailsWrapper>
    );
};

export default CareerDetailsPage;
