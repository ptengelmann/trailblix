import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './styles.css'; // Ensure you import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.js';
import config from '../config.js';
import CryptoJS from 'crypto-js';

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
    color: var(--deep-blue);
    &:focus {
        outline: none;
        border-color: var(--bright-coral);
    }
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

const SocialLoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
    max-width: 500px;
`;

const SocialButton = styled.button`
    background-color: ${props => props.color || 'var(--bright-coral)'};
    color: var(--soft-white);
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState(null);

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Encrypt the password
      const salt = bcrypt.genSaltSync(10);
      const encryptedPassword = bcrypt.hashSync(password, salt);

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
    const loginUser = async (email, password) => {
        try {
            await login(email, password);
            return true;
        } catch (err) {
            console.error('Error logging in:', err);
            return false;
        }

        // Mock user data for demonstration purposes
        const mockUserData = { name: 'John Doe', email: formData.email };

        // Save user data to AuthContext and navigate to the Dashboard
        login(mockUserData);
        navigate('/dashboard');
    };

    const handleSocialLogin = (provider) => {
        console.log(`Login with ${provider}`);
        // Add social login logic here
    };
 

      // Submit the form data to the backend
      const res = await axios.post('http://localhost:5000/api/login', { email, password: encryptedPassword });
      setResponse(res.data); // Preserve the return response
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

            {/* Social Login Buttons */}
            <SocialLoginWrapper>
                <SocialButton color="var(--bright-coral)" onClick={() => handleSocialLogin('Google')}>
                    Sign in with Google
                </SocialButton>
                <SocialButton color="var(--deep-blue)" onClick={() => handleSocialLogin('LinkedIn')}>
                    Sign in with LinkedIn
                </SocialButton>
            </SocialLoginWrapper>

            <SignUpLinkWrapper>
                Don't have an account yet? <a onClick={() => navigate('/signup')}>Sign Up</a>
            </SignUpLinkWrapper>
        </LoginWrapper>
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );

};

export default LoginPage;
