import React, { useState } from 'react';
import styled from 'styled-components';

const PricingSection = styled.section`
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--deep-blue) 30%, var(--light-pink) 100%);
    color: var(--soft-white);
    text-align: center;
    border-bottom: 2px solid var(--deep-blue);
`;

const SectionHeadline = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--soft-white);
    font-weight: bold;
`;

const TestimonialSection = styled.div`
    margin-top: 4rem;
    padding: 3rem 2rem;
    background-color: var(--soft-white);
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TestimonialTitle = styled.h3`
    font-size: 2rem;
    color: var(--deep-blue);
    margin-bottom: 1.5rem;
`;

const TestimonialList = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`;

const TestimonialCard = styled.div`
    background-color: var(--light-pink);
    color: var(--deep-blue);
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-width: 350px;
    width: 100%;
    margin-bottom: 1.5rem;
    text-align: left;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const TestimonialText = styled.p`
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.div`
    font-weight: bold;
`;

const TestimonialPosition = styled.div`
    font-size: 0.9rem;
    color: var(--gray-tone);
`;

const ToggleButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }

    &.active {
        background-color: var(--deep-blue);
    }
`;

const PricingTable = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    gap: 2rem;
    flex-wrap: wrap;
`;

const PlanCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    width: 320px;
    padding: 2.5rem;
    text-align: left;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    margin-bottom: 2rem;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    }
`;

const PlanTitle = styled.h3`
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: var(--deep-blue);
    font-weight: bold;
`;

const PriceTag = styled.p`
    font-size: 2rem;
    color: var(--deep-blue);
    font-weight: bold;
    margin: 1rem 0;
`;

const FeatureList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
    margin: 0.5rem 0;
    color: var(--gray-tone);
    display: flex;
    align-items: center;

    &::before {
        content: '✔'; /* Checkmark character */
        color: var(--bright-coral); /* Branding color */
        margin-right: 0.5rem;
        font-weight: bold;
    }
`;

const Benefits = styled.p`
    font-size: 0.9rem;
    color: var(--gray-tone);
    margin-top: 1rem;
    font-style: italic;
`;

const CallToAction = styled.button`
    margin-top: 1.5rem;
    background-color: var(--bright-coral);
    color: var(--soft-white);
    border: none;
    border-radius: 25px; /* More rounded for a modern look */
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }

    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 25px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover:before {
        opacity: 1;
    }
`;

const SavingsText = styled.p`
    font-size: 1rem;
    color: var(--soft-white);
    margin-top: 1rem;
`;

const ComparePlansSection = styled.div`
    margin-top: 4rem;
    padding: 2rem;
    background-color: var(--soft-white);
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ComparePlansHeadline = styled.h3`
    font-size: 2rem;
    color: var(--deep-blue);
    margin-bottom: 1.5rem;
`;

const ComparisonTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const ComparisonRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9; /* Light background for even rows */
    }
`;

const ComparisonHeader = styled.th`
    padding: 1rem;
    color: var(--deep-blue);
`;

const ComparisonData = styled.td`
    padding: 1rem;
    color: var(--gray-tone);
    text-align: center;

    &.highlight {
        color: var(--bright-coral); /* Highlight key features */
        font-weight: bold;
    }
`;

const ToggleComparisonButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }
`;

const PricingOverview = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [showFullComparison, setShowFullComparison] = useState(false); // State to toggle comparison view

    const togglePricingPlan = () => {
        setIsYearly(!isYearly);
    };

    const toggleFullComparison = () => {
        setShowFullComparison(!showFullComparison);
    };

    const monthlyPrice = 9.99;
    const yearlyPrice = 99;
    const savings = (monthlyPrice * 12) - yearlyPrice;

    return (
        <div>
            <PricingSection>
                <SectionHeadline>Choose Your Plan</SectionHeadline>
                <ToggleButton 
                    onClick={togglePricingPlan} 
                    className={isYearly ? "active" : ""}
                >
                    Switch to {isYearly ? 'Monthly' : 'Yearly'}
                </ToggleButton>

                {/* Testimonials Section */}
                <TestimonialSection>
                    <TestimonialTitle>What Our Users Are Saying</TestimonialTitle>
                    <TestimonialList>
                        <TestimonialCard>
                            <TestimonialText>"Trailblix has changed my career trajectory! The personalized career recommendations are top-notch!"</TestimonialText>
                            <TestimonialAuthor>Jane Doe</TestimonialAuthor>
                            <TestimonialPosition>Software Engineer, San Francisco</TestimonialPosition>
                        </TestimonialCard>
                        <TestimonialCard>
                            <TestimonialText>"The learning paths and job suggestions helped me land my dream job in data science!"</TestimonialText>
                            <TestimonialAuthor>John Smith</TestimonialAuthor>
                            <TestimonialPosition>Data Scientist, New York</TestimonialPosition>
                        </TestimonialCard>
                    </TestimonialList>
                </TestimonialSection>

                <PricingTable>
                    <PlanCard>
                        <PlanTitle>Free Plan (Basic)</PlanTitle>
                        <PriceTag>Free</PriceTag>
                        <FeatureList>
                            <FeatureItem>Basic Career Recommendations</FeatureItem>
                            <FeatureItem>Essential Learning Resources</FeatureItem>
                            <FeatureItem>Job Suggestions</FeatureItem>
                            <FeatureItem>Profile and Progress Tracking</FeatureItem>
                            <FeatureItem>Limited Access to Industry Insights</FeatureItem>
                        </FeatureList>
                        <Benefits>Benefits: Explore core features of Trailblix without cost.</Benefits>
                        <CallToAction onClick={() => alert('Sign Up for Free!')}>Get Started for Free</CallToAction>
                    </PlanCard>

                    <PlanCard>
                        <PlanTitle>Premium Plan (Pro)</PlanTitle>
                        <PriceTag>{isYearly ? `$${yearlyPrice}/year` : `$${monthlyPrice}/month`}</PriceTag>
                        <FeatureList>
                            <FeatureItem>Full Career Recommendations</FeatureItem>
                            <FeatureItem>Advanced Learning Paths</FeatureItem>
                            <FeatureItem>Real-Time Job Suggestions</FeatureItem>
                            <FeatureItem>Skill Gap Analysis and Learning Tracker</FeatureItem>
                            <FeatureItem>Personalized Industry Insights</FeatureItem>
                            <FeatureItem>Achievement Badges and Milestones</FeatureItem>
                            <FeatureItem>Priority Support</FeatureItem>
                        </FeatureList>
                        <Benefits>Benefits: Fully personalized experience with advanced resources.</Benefits>
                        {isYearly && <SavingsText>You save ${savings} by choosing yearly!</SavingsText>}
                        <CallToAction onClick={() => alert('Subscribe Now!')}>Choose Premium</CallToAction>
                    </PlanCard>
                </PricingTable>

                {/* Compare Plans */}
                <ComparePlansSection>
                    <ComparePlansHeadline>Compare Plans</ComparePlansHeadline>
                    <ComparisonTable>
                        <thead>
                            <ComparisonRow>
                                <ComparisonHeader>Features</ComparisonHeader>
                                <ComparisonHeader>Free Plan</ComparisonHeader>
                                <ComparisonHeader>Premium Plan</ComparisonHeader>
                            </ComparisonRow>
                        </thead>
                        <tbody>
                            <ComparisonRow>
                                <ComparisonHeader>Basic Career Recommendations</ComparisonHeader>
                                <ComparisonData className="highlight">✔</ComparisonData>
                                <ComparisonData className="highlight">✔</ComparisonData>
                            </ComparisonRow>
                            <ComparisonRow>
                                <ComparisonHeader>Essential Learning Resources</ComparisonHeader>
                                <ComparisonData className="highlight">✔</ComparisonData>
                                <ComparisonData className="highlight">✔</ComparisonData>
                            </ComparisonRow>
                            <ComparisonRow>
                                <ComparisonHeader>Job Suggestions</ComparisonHeader>
                                <ComparisonData className="highlight">✔</ComparisonData>
                                <ComparisonData className="highlight">✔</ComparisonData>
                            </ComparisonRow>

                            {showFullComparison && (
                                <>
                                    <ComparisonRow>
                                        <ComparisonHeader>Advanced Learning Paths</ComparisonHeader>
                                        <ComparisonData></ComparisonData>
                                        <ComparisonData className="highlight">✔</ComparisonData>
                                    </ComparisonRow>
                                    <ComparisonRow>
                                        <ComparisonHeader>Skill Gap Analysis</ComparisonHeader>
                                        <ComparisonData></ComparisonData>
                                        <ComparisonData className="highlight">✔</ComparisonData>
                                    </ComparisonRow>
                                    <ComparisonRow>
                                        <ComparisonHeader>Priority Support</ComparisonHeader>
                                        <ComparisonData></ComparisonData>
                                        <ComparisonData className="highlight">✔</ComparisonData>
                                    </ComparisonRow>
                                </>
                            )}
                        </tbody>
                    </ComparisonTable>

                    <ToggleComparisonButton onClick={toggleFullComparison}>
                        {showFullComparison ? 'Show Less' : 'Show More'}
                    </ToggleComparisonButton>
                </ComparePlansSection>
            </PricingSection>
        </div>
    );
};

export default PricingOverview;
