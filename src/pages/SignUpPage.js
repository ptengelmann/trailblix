import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.js'; // Import useAuth
import axios from 'axios'; // Import axios
import styled from 'styled-components';

// Styled-components for the SignUp page
const SignUpWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    min-height: 100vh;
    background: linear-gradient(135deg, var(--deep-blue) 30%, var(--light-pink) 100%);
    color: var(--soft-white);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
    background-color: var(--soft-white);
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: left;
`;

const Input = styled.input`
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid var(--gray-tone);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
    &:focus {
        border-color: var(--deep-blue);
    }
`;

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--gray-tone);
`;

const Checkbox = styled.input`
    cursor: pointer;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 0.9rem;
    text-align: center;
`;

// Main SignUpPage component
const SignUpPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Destructure the login function from AuthContext
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        retypePassword: '',
        consent: false,
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.retypePassword) {
            setError('Passwords do not match.');
            return;
        }
    
        if (!formData.consent) {
            setError('You must agree to receive emails from us.');
            return;
        }
    
        setError('');
    
        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                email: formData.email,
                password: formData.password,
            });
    
            if (response.data) {
                login({ email: response.data.email, token: response.data.token }); // Store email and token
                navigate('/dashboard');
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };
    return (
        <SignUpWrapper>
            <h1>Create Your Account</h1>
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
                <Input
                    type="password"
                    name="retypePassword"
                    placeholder="Retype Password"
                    value={formData.retypePassword}
                    onChange={handleChange}
                    required
                />
                <CheckboxWrapper>
                    <Checkbox
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                    />
                    <label htmlFor="consent">
                        I agree to receive emails from Trailblix with career updates and tips.
                    </label>
                </CheckboxWrapper>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button type="submit">Create Account</Button>
            </Form>
        </SignUpWrapper>
    );
};

export default SignUpPage;
