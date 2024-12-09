import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import './styles.css'; // Ensure you import the CSS file for styling

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

      // Submit the form data to the backend
      const res = await axios.post('http://localhost:5000/api/login', { email, password: encryptedPassword });
      setResponse(res.data); // Preserve the return response
      setError(''); // Clear any previous errors
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input"
        />
        <button type="submit" className="button">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {response && <p className="success-message">Login successful!</p>}
    </div>
  );
};

export default LoginPage;