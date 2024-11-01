// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../AuthContext.js';

const LoginWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    min-height: 80vh;
    background-color: var(--light-pink);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
    background-color: var(--soft-white);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff8787;
    }
`;

const ForgotPasswordButton = styled(Button)`
    align-self: flex-end;
    background-color: transparent;
    color: var(--deep-blue);
    font-size: 0.9rem;
    text-decoration: underline;

    &:hover {
        color: var(--bright-coral);
        background-color: transparent;
    }
`;

const SignUpLinkWrapper = styled.div`
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--gray-tone);
    text-align: center;

    a {
        color: var(--bright-coral);
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #ff8787;
        }
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
`;

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form data before logging in
        if (!formData.email || !formData.password) {
            setError('Please fill out both fields.');
            return;
        }

        // Mock user data for demonstration purposes
        const mockUserData = { name: 'John Doe', email: formData.email };

        // Save user data to AuthContext and navigate to the Dashboard
        login(mockUserData);
        navigate('/dashboard');
    };

    return (
        <LoginWrapper>
            <h1>Login to Your Account</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ForgotPasswordButton onClick={() => navigate('/forgot-password')}>
                    Forgot Password?
                </ForgotPasswordButton>
                <Button type="submit">Login</Button>
            </Form>
            <SignUpLinkWrapper>
                Don't have an account yet? <a onClick={() => navigate('/signup')}>Sign Up</a>
            </SignUpLinkWrapper>
        </LoginWrapper>
    );
};

export default LoginPage;
