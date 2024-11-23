import './styles.css';
import React, { useState } from 'react';

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
            <section className="pricing-section">
                <h2 className="section-headline">Choose Your Plan</h2>
                <button 
                    onClick={togglePricingPlan} 
                    className={`toggle-button ${isYearly ? "active" : ""}`}
                >
                    Switch to {isYearly ? 'Monthly' : 'Yearly'}
                </button>

                {/* Testimonials Section */}
                <div className="testimonial-section">
                    <h3 className="testimonial-title">What Our Users Are Saying</h3>
                    <div className="testimonial-list">
                        <div className="testimonial-card">
                            <p className="testimonial-text">"Trailblix has changed my career trajectory! The personalized career recommendations are top-notch!"</p>
                            <div className="testimonial-author">Jane Doe</div>
                            <div className="testimonial-position">Software Engineer, San Francisco</div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-text">"The learning paths and job suggestions helped me land my dream job in data science!"</p>
                            <div className="testimonial-author">John Smith</div>
                            <div className="testimonial-position">Data Scientist, New York</div>
                        </div>
                    </div>
                </div>

                <div className="pricing-table">
                    <div className="plan-card">
                        <h3 className="plan-title">Free Plan (Basic)</h3>
                        <p className="price-tag">Free</p>
                        <ul className="feature-list">
                            <li className="feature-item">Basic Career Recommendations</li>
                            <li className="feature-item">Essential Learning Resources</li>
                            <li className="feature-item">Job Suggestions</li>
                            <li className="feature-item">Profile and Progress Tracking</li>
                            <li className="feature-item">Limited Access to Industry Insights</li>
                        </ul>
                        <p className="benefits">Benefits: Explore core features of Trailblix without cost.</p>
                        <button className="call-to-action" onClick={() => alert('Sign Up for Free!')}>Get Started for Free</button>
                    </div>

                    <div className="plan-card">
                        <h3 className="plan-title">Premium Plan (Pro)</h3>
                        <p className="price-tag">{isYearly ? `$${yearlyPrice}/year` : `$${monthlyPrice}/month`}</p>
                        <ul className="feature-list">
                            <li className="feature-item">Full Career Recommendations</li>
                            <li className="feature-item">Advanced Learning Paths</li>
                            <li className="feature-item">Real-Time Job Suggestions</li>
                            <li className="feature-item">Skill Gap Analysis and Learning Tracker</li>
                            <li className="feature-item">Personalized Industry Insights</li>
                            <li className="feature-item">Achievement Badges and Milestones</li>
                            <li className="feature-item">Priority Support</li>
                        </ul>
                        <p className="benefits">Benefits: Fully personalized experience with advanced resources.</p>
                        {isYearly && <p className="savings-text">You save ${savings} by choosing yearly!</p>}
                        <button className="call-to-action" onClick={() => alert('Subscribe Now!')}>Choose Premium</button>
                    </div>
                </div>

                {/* Compare Plans */}
                <div className="compare-plans-section">
                    <h3 className="compare-plans-headline">Compare Plans</h3>
                    <table className="comparison-table">
                        <thead>
                            <tr className="comparison-row">
                                <th className="comparison-header">Features</th>
                                <th className="comparison-header">Free Plan</th>
                                <th className="comparison-header">Premium Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="comparison-row">
                                <th className="comparison-header">Basic Career Recommendations</th>
                                <td className="comparison-data highlight">✔</td>
                                <td className="comparison-data highlight">✔</td>
                            </tr>
                            <tr className="comparison-row">
                                <th className="comparison-header">Essential Learning Resources</th>
                                <td className="comparison-data highlight">✔</td>
                                <td className="comparison-data highlight">✔</td>
                            </tr>
                            <tr className="comparison-row">
                                <th className="comparison-header">Job Suggestions</th>
                                <td className="comparison-data highlight">✔</td>
                                <td className="comparison-data highlight">✔</td>
                            </tr>

                            {showFullComparison && (
                                <>
                                    <tr className="comparison-row">
                                        <th className="comparison-header">Advanced Learning Paths</th>
                                        <td className="comparison-data"></td>
                                        <td className="comparison-data highlight">✔</td>
                                    </tr>
                                    <tr className="comparison-row">
                                        <th className="comparison-header">Skill Gap Analysis</th>
                                        <td className="comparison-data"></td>
                                        <td className="comparison-data highlight">✔</td>
                                    </tr>
                                    <tr className="comparison-row">
                                        <th className="comparison-header">Priority Support</th>
                                        <td className="comparison-data"></td>
                                        <td className="comparison-data highlight">✔</td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>

                    <button className="toggle-comparison-button" onClick={toggleFullComparison}>
                        {showFullComparison ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default PricingOverview;
