import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.js'; // Import useAuth
import axios from 'axios'; // Import axios
import './styles.css'; // Import the CSS file

// Main SignUpPage component
const SignUpPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Destructure the login function from AuthContext
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        retypePassword: '',
        consent: false,
        marketingData: false,
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
            setError('You must agree to the use of your data.');
            return;
        }
    
        setError('');
    
        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                marketingData: formData.marketingData,
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
        <section className="sign-up-wrapper">
            <h1>Create Your Account</h1>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <input
                    className="sign-up-input"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    className="sign-up-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="sign-up-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    className="sign-up-input"
                    type="password"
                    name="retypePassword"
                    placeholder="Retype Password"
                    value={formData.retypePassword}
                    onChange={handleChange}
                    required
                />
                <div className="checkbox-wrapper">
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                    />
                    <label htmlFor="consent">
                        I agree to the use of my data.
                    </label>
                </div>
                <div className="checkbox-wrapper">
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="marketingData"
                        checked={formData.marketingData}
                        onChange={handleChange}
                    />
                    <label htmlFor="marketingData">
                        I consent to receive marketing data.
                    </label>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button className="sign-up-button" type="submit">Create Account</button>
                <button className="social-button" type="button" onClick={() => {/* Logic for Google sign-in */}}>
                    Sign-In with Google
                </button>
                <button className="linkedin-button" type="button" onClick={() => {/* Logic for LinkedIn sign-in */}}>
                    Sign-In with LinkedIn
                </button>
            </form>
        </section>
    );
};

export default SignUpPage;
