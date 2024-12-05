import React, { useState } from 'react';
import styled from 'styled-components';

const HelpSupportWrapper = styled.section`
    padding: 3rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 15px;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--deep-blue);
    text-align: center;
`;

const SubTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--bright-coral);
`;

const SectionWrapper = styled.div`
    margin-bottom: 3rem;
    padding: 2rem;
    background-color: var(--light-pink);
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FAQItem = styled.div`
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    font-size: 1.2rem;
    color: var(--deep-blue);
    border-bottom: 1px solid var(--gray-tone);
`;

const FAQTitle = styled.h4`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const FAQDescription = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
    color: var(--deep-blue);
`;

const TextArea = styled.textarea`
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
    color: var(--deep-blue);
    min-height: 150px;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: white;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: none;
    }
`;

const HelpSupportPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., sending email or saving data)
        console.log(formData);
    };

    return (
        <HelpSupportWrapper>
            <SectionTitle>Help & Support</SectionTitle>

            {/* FAQ Section */}
            <SectionWrapper>
                <SubTitle>FAQs</SubTitle>
                <FAQItem>
                    <FAQTitle>How do I reset my password?</FAQTitle>
                    <FAQDescription>
                        If you forgot your password, click on "Forgot Password" on the login page, and we'll send you an email with instructions to reset it.
                    </FAQDescription>
                </FAQItem>
                <FAQItem>
                    <FAQTitle>How can I change my email address?</FAQTitle>
                    <FAQDescription>
                        You can change your email address from the "Account Details" section of your profile settings.
                    </FAQDescription>
                </FAQItem>
                <FAQItem>
                    <FAQTitle>How do I update my subscription?</FAQTitle>
                    <FAQDescription>
                        You can manage and update your subscription in the "Subscription/Billing" section of your account settings.
                    </FAQDescription>
                </FAQItem>
            </SectionWrapper>

            {/* User Guide Section */}
            <SectionWrapper>
                <SubTitle>User Guide</SubTitle>
                <p>Trailblix helps you create a personalized career path based on your skills and aspirations. Here’s a quick guide on how to use our platform:</p>
                <ul>
                    <li>Start by creating your profile with your skills and career goals.</li>
                    <li>Take the Profile Quiz to receive tailored job recommendations and learning paths.</li>
                    <li>Explore learning resources and apply to jobs that align with your goals.</li>
                </ul>
            </SectionWrapper>

            {/* Contact Support Section */}
            <SectionWrapper>
                <SubTitle>Contact Support</SubTitle>
                <ContactForm onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextArea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button type="submit">Send Message</Button>
                </ContactForm>
            </SectionWrapper>

            {/* Community Forum Section */}
            <SectionWrapper>
                <SubTitle>Community Forum</SubTitle>
                <p>If you're looking to connect with other professionals, join our <a href="https://exampleforum.com" target="_blank" rel="noopener noreferrer">Community Forum</a> where you can ask questions, share experiences, and network with others.</p>
            </SectionWrapper>
        </HelpSupportWrapper>
    );
};

export default HelpSupportPage;
