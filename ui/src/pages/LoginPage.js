import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import './styles.css'; // Ensure you import the CSS file for styling
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Hash the password before sending it to the server
        const hashedPassword = bcrypt.hashSync(password, 10);

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password: hashedPassword }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate('/dashboard'); // Redirect to the dashboard or another page
            } else {
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="button" type="submit">Login</button>
                <Link to="/register">Don't have an account? Register</Link>
            </form>
        </div>
    );
};

export default LoginPage;
