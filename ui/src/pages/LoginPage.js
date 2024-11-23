import './styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.js';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://your-backend-endpoint.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to login');
            }

            const data = await response.json();
            login(data.token); // Assuming the backend returns a token
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to login. Please check your credentials.');
        }
    };

    return (
        <section className="login-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="input"
                />
                <button type="submit" className="button">
                    Login
                </button>
            </form>
            <div className="sign-up-link-wrapper">
                <a href="/signup">Sign Up</a>
            </div>
            {error && <p className="error-message">{error}</p>}
        </section>
    );
};

export default LoginPage;