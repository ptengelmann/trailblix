import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the ResourcesPage
const ResourcesWrapper = styled.section`
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--deep-blue);
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    color: var(--bright-coral);
    margin-bottom: 1rem;
    text-align: center;
`;

const SubSection = styled.div`
    margin-top: 3rem;
    padding: 2rem;
    background-color: var(--soft-white);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Card = styled.div`
    background-color: var(--light-pink);
    color: var(--deep-blue);
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: var(--deep-blue);
        transform: translateY(-3px);
    }
`;

const ArticleList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
`;

const ArticleCard = styled.div`
    background-color: var(--soft-white);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
`;

const ArticleTitle = styled.h4`
    font-size: 1.2rem;
    color: var(--deep-blue);
    margin-bottom: 0.75rem;
`;

const ArticleDescription = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
`;

const ResourcesPage = () => {
    // Sample data for sections
    const [articles] = useState([
        { title: 'How to Build a Strong Resume', description: 'Tips on creating a standout resume for tech jobs.' },
        { title: 'Ace Your Interview', description: 'Prepare effectively for interviews in the data science field.' },
        { title: 'Top Skills to Learn for 2024', description: 'The most sought-after skills in the technology sector.' },
    ]);

    const [faqItems] = useState([
        { question: 'How does AI recommend jobs?', answer: 'Our AI analyzes your skills and preferences to suggest the best-fit jobs.' },
        { question: 'How can I reset my password?', answer: 'Go to the settings page and click on "Reset Password".' },
        { question: 'Can I update my career goals?', answer: 'Yes, you can update your goals anytime through your dashboard.' },
    ]);

    const [industryInsights] = useState([
        { title: 'Data Science Salary Trends', description: 'Explore the latest trends in salaries for data science roles.' },
        { title: 'Emerging Skills in Tech', description: 'Learn about the skills that will shape the tech industry in the next decade.' },
    ]);

    const [showFaq, setShowFaq] = useState(false);

    const toggleFaq = () => {
        setShowFaq(!showFaq);
    };

    return (
        <ResourcesWrapper>
            <SectionTitle>Resources for Your Career Journey</SectionTitle>

            {/* Career Advice Articles */}
            <SubSection>
                <SectionTitle>Career Advice Articles</SectionTitle>
                <ArticleList>
                    {articles.map((article, index) => (
                        <ArticleCard key={index}>
                            <ArticleTitle>{article.title}</ArticleTitle>
                            <ArticleDescription>{article.description}</ArticleDescription>
                            <Button>Read More</Button>
                        </ArticleCard>
                    ))}
                </ArticleList>
            </SubSection>

            {/* Industry Insights */}
            <SubSection>
                <SectionTitle>Industry Insights</SectionTitle>
                {industryInsights.map((insight, index) => (
                    <Card key={index}>
                        <h4>{insight.title}</h4>
                        <p>{insight.description}</p>
                        <Button>Learn More</Button>
                    </Card>
                ))}
            </SubSection>

            {/* FAQs and Help Center */}
            <SubSection>
                <SectionTitle>FAQs and Help Center</SectionTitle>
                <Button onClick={toggleFaq}>Toggle FAQ Section</Button>
                {showFaq && (
                    <div style={{ marginTop: '2rem' }}>
                        {faqItems.map((faq, index) => (
                            <Card key={index}>
                                <h4>{faq.question}</h4>
                                <p>{faq.answer}</p>
                            </Card>
                        ))}
                    </div>
                )}
            </SubSection>

            {/* Community and Networking */}
            <SubSection>
                <SectionTitle>Community and Networking</SectionTitle>
                <Card>
                    <h4>Join Our Community</h4>
                    <p>Find mentors and network with other professionals in your field.</p>
                    <Button>Join Now</Button>
                </Card>
            </SubSection>

            {/* Contact Support */}
            <SubSection>
                <SectionTitle>Contact Support</SectionTitle>
                <Card>
                    <h4>Need Help?</h4>
                    <p>Reach out to our support team for any questions or issues.</p>
                    <Button>Contact Support</Button>
                </Card>
            </SubSection>
        </ResourcesWrapper>
    );
};

export default ResourcesPage;
