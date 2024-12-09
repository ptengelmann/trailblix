import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components for the Pricing Page
const PricingSection = styled.section`
    padding: 4rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    text-align: center;
`;

const SectionHeadline = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 700;
    color: var(--deep-blue);
`;

const ToggleButton = styled.button`
    background-color: var(--bright-coral);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

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
    gap: 2rem;
    margin-top: 3rem;
`;

const PlanCard = styled.div`
    background-color: ${(props) => (props.isFree ? '#FF6B6B' : '#002b5b')};
    color: white;
    padding: 2rem;
    border-radius: 15px;
    width: 300px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    .price {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .features {
        list-style: none;
        padding-left: 0;
        margin-bottom: 2rem;
        font-size: 1rem;
    }

    .call-to-action {
        background-color: var(--soft-white);
        color: ${(props) => (props.isFree ? '#FF6B6B' : '#002b5b')};
        padding: 1rem 2rem;
        border-radius: 25px;
        border: 2px solid ${(props) => (props.isFree ? '#FF6B6B' : '#002b5b')};
        font-size: 1.2rem;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;

        &:hover {
            background-color: ${(props) => (props.isFree ? '#FFB3B3' : '#80A9D4')};
            transform: translateY(-3px);
        }
    }
`;

const ComparePlansSection = styled.div`
    margin-top: 4rem;
    background-color: var(--soft-white);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ComparisonTable = styled.table`
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;

    th, td {
        padding: 1rem;
        text-align: center;
        border: 1px solid #ddd;
        color: var(--deep-blue);
        font-size: 1rem;
        vertical-align: middle;
    }

    th {
        background-color: var(--deep-blue);
        color: white;
        font-size: 1.2rem;
    }

    td {
        background-color: #f9f9f9;
    }

    .highlight {
        background-color: var(--bright-coral);
        color: white;
    }
`;

const ToggleButtonCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.showFullComparison ? '#002b5b' : '#FF6B6B')};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 1.5rem;
    font-size: 1rem;  /* Adjusted font size for consistency */
    width: 150px;      /* Make the width auto to fit the content */

    &:hover {
        background-color: ${(props) => (props.showFullComparison ? '#004c7f' : '#ff8787')};
        transform: translateY(-3px);
    }
`;

const PricingOverview = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [showFullComparison, setShowFullComparison] = useState(false);

    const togglePricingPlan = () => setIsYearly(!isYearly);

    const monthlyPrice = 9.99;
    const yearlyPrice = 99;
    const savings = (monthlyPrice * 12) - yearlyPrice;

    return (
        <PricingSection>
            <SectionHeadline>Choose Your Plan</SectionHeadline>

            <ToggleButton onClick={togglePricingPlan} className={isYearly ? "active" : ""}>
                Switch to {isYearly ? 'Monthly' : 'Yearly'}
            </ToggleButton>

            <PricingTable>
                {/* Free Plan Card */}
                <PlanCard isFree={true}>
                    <h3>Free Plan (Basic)</h3>
                    <p className="price">Free</p>
                    <ul className="features">
                        <li>Basic Career Recommendations</li>
                        <li>Essential Learning Resources</li>
                        <li>Job Suggestions</li>
                        <li>Profile and Progress Tracking</li>
                        <li>Limited Access to Industry Insights</li>
                    </ul>
                    <button className="call-to-action" onClick={() => alert('Sign Up for Free!')}>Get Started for Free</button>
                </PlanCard>

                {/* Premium Plan Card */}
                <PlanCard isFree={false}>
                    <h3>Premium Plan (Pro)</h3>
                    <p className="price">{isYearly ? `$${yearlyPrice}/year` : `$${monthlyPrice}/month`}</p>
                    <ul className="features">
                        <li>Full Career Recommendations</li>
                        <li>Advanced Learning Paths</li>
                        <li>Real-Time Job Suggestions</li>
                        <li>Skill Gap Analysis and Learning Tracker</li>
                        <li>Personalized Industry Insights</li>
                        <li>Achievement Badges and Milestones</li>
                        <li>Priority Support</li>
                    </ul>
                    {isYearly && <p>You save ${savings} by choosing yearly!</p>}
                    <button className="call-to-action" onClick={() => alert('Subscribe Now!')}>Choose Premium</button>
                </PlanCard>
            </PricingTable>

            {/* Compare Plans Section */}
            <ComparePlansSection>
                <h3>Compare Plans</h3>
                <ComparisonTable>
                    <thead>
                        <tr>
                            <th>Features</th>
                            <th>Free Plan</th>
                            <th>Premium Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic Career Recommendations</td>
                            <td className="highlight">✔</td>
                            <td className="highlight">✔</td>
                        </tr>
                        <tr>
                            <td>Essential Learning Resources</td>
                            <td className="highlight">✔</td>
                            <td className="highlight">✔</td>
                        </tr>
                        <tr>
                            <td>Job Suggestions</td>
                            <td className="highlight">✔</td>
                            <td className="highlight">✔</td>
                        </tr>

                        {showFullComparison && (
                            <>
                                <tr>
                                    <td>Advanced Learning Paths</td>
                                    <td></td>
                                    <td className="highlight">✔</td>
                                </tr>
                                <tr>
                                    <td>Skill Gap Analysis</td>
                                    <td></td>
                                    <td className="highlight">✔</td>
                                </tr>
                                <tr>
                                    <td>Priority Support</td>
                                    <td></td>
                                    <td className="highlight">✔</td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </ComparisonTable>

                <ToggleButtonCard 
                    showFullComparison={showFullComparison} 
                    onClick={() => setShowFullComparison(!showFullComparison)}
                >
                    {showFullComparison ? 'Show Less' : 'Show More'}
                </ToggleButtonCard>
            </ComparePlansSection>
        </PricingSection>
    );
};

export default PricingOverview;
