import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CareerPathsWrapper = styled.div`
    padding: 3rem 2rem;
    background-color: var(--light-pink);
    min-height: 100vh;
`;

const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const PageTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const PageDescription = styled.p`
    font-size: 1.1rem;
    color: var(--dark-gray);
    max-width: 800px;
    margin: 0 auto;
`;

const CareerCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const CareerTitle = styled.h3`
    font-size: 2rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const CareerDetail = styled.p`
    font-size: 1.1rem;
    color: var(--dark-gray);
    margin-bottom: 0.5rem;
`;

const ExploreButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: var(--deep-blue);
        transform: translateY(-3px);
    }
`;

// CareerPathsPage Component
const CareerPathsPage = () => {
    const navigate = useNavigate();

    const handleExplorePath = (career) => {
        // Navigate to the CareerDetailsPage with the selected career name
        navigate(`/dashboard/career-paths/${career}`);
    };

    return (
        <CareerPathsWrapper>
            {/* Title and Description Section */}
            <TitleWrapper>
                <PageTitle>Career Paths Recommended for You</PageTitle>
                <PageDescription>
                    Based on your profile and interests, here are some paths that might suit you.
                </PageDescription>
            </TitleWrapper>

            {/* Career Cards */}
            <CareerCard>
                <CareerTitle>Data Scientist</CareerTitle>
                <CareerDetail>Brief overview of the Data Scientist career.</CareerDetail>
                <CareerDetail>Average Salary: $90,000 - $120,000</CareerDetail>
                <CareerDetail>Growth Potential: High</CareerDetail>
                <CareerDetail>Confidence Score: 85%</CareerDetail>
                <ExploreButton onClick={() => handleExplorePath('data-scientist')}>Explore Path</ExploreButton>
            </CareerCard>

            <CareerCard>
                <CareerTitle>Software Engineer</CareerTitle>
                <CareerDetail>Brief overview of the Software Engineer career.</CareerDetail>
                <CareerDetail>Average Salary: $100,000 - $140,000</CareerDetail>
                <CareerDetail>Growth Potential: High</CareerDetail>
                <CareerDetail>Confidence Score: 92%</CareerDetail>
                <ExploreButton onClick={() => handleExplorePath('software-engineer')}>Explore Path</ExploreButton>
            </CareerCard>

            {/* Additional Career Cards can be added here */}
        </CareerPathsWrapper>
    );
};

export default CareerPathsPage;
