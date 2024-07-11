import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/routes/auth', {
            email,
            password
        })
            .then(response => {
                setSuccessMessage('Login successful');
                setErrorMessage('');
            })
            .catch(error => {
                setErrorMessage(error.response ? error.response.data : 'Login failed');
                setSuccessMessage('');
            });
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                <p id='SUG'>계정이 없으신가요?<Link to="/Signup">[회원가입]</Link></p>
            </form>
        </div>
    );
}

export default Login;