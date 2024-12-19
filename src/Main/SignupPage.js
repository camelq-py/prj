import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match.");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 8 characters long and contain both letters and numbers.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/signup', { username, email, password });
            alert(response.data);
            navigate('/login'); // Redirect to login page after successful signup
        } catch (error) {
            console.error(error);
            alert('Error signing up');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2 className="signup-title">Signup</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="signup-input"
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="signup-input"
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="signup-input"
                    required 
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    className="signup-input"
                    required 
                />
                {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
                
                <button type="submit" className="signup-button">Signup</button>

                <div className="signup-link">
                    <p>Already have an account? <a href="/login" className="signup-link-text">Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;
