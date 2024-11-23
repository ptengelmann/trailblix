import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the Contact Us Page
const ContactWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    text-align: center;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--deep-blue);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: 0 auto;
    background-color: var(--light-pink);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
    width: 100%;
    margin-bottom: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: var(--deep-blue);
    }
`;

const Textarea = styled.textarea`
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
    width: 100%;
    height: 150px;
    margin-bottom: 1rem;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: var(--deep-blue);
    }
`;

const SubmitButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff8787;
    }
`;

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to a server or an API)
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <ContactWrapper>
            <SectionTitle>Contact Us</SectionTitle>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
            {isSubmitted && <p>Thank you for your message! We'll get back to you soon.</p>}
        </ContactWrapper>
    );
};

export default ContactUsPage;
