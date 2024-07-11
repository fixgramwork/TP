import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function SUG() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/api/auth/register', {
            email,
            password
        })
            .then(response => {
                setSuccessMessage('회원가입 성공');
                setErrorMessage('');
                setEmail('');
                setPassword('');
            })
            .catch(error => {
                setErrorMessage(error.response.data);
                setSuccessMessage('');
            });
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
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
                        className="signup-input"
                        placeholder="이메일을 입력하세요"
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
                        className="signup-input"
                        placeholder="비밀번호를 입력하세요"
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign up</button>
            </form>
        </div>
    );
}

export default SUG;
