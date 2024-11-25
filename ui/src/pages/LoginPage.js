import './styles.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext.js';
import config from '../config.js';
import CryptoJS from 'crypto-js';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const loginUser = async (email, password) => {
        try {
            await login(email, password);
            return true;
        } catch (err) {
            console.error('Error logging in:', err);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Encrypt the password before sending it
        const encryptedPassword = CryptoJS.AES.encrypt(formData.password, config.encryptionKey).toString();
        const userExists = await loginUser(formData.email, encryptedPassword);
        if (!userExists) {
            setError('User does not exist or password is incorrect. Please check your credentials.');
            return;
        }
        // Navigate to the home page or dashboard after successful login
        navigate('/dashboard');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
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