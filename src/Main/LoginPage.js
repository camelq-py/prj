import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            window.location.href = 'http://localhost:5000/auth/google';
        } catch (error) {
            console.error('Google Sign-In Error:', error);
            alert('Error signing in with Google');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });

            localStorage.setItem('authToken', response.data.token);
            alert(response.data.message);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert('Error logging in');
        }
    };

    return (
        <div className="login-container">
            <div className="form-wrapper-1">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2 className="form-heading">Welcome Back</h2>
                    <p className="form-subheading">Login to your account</p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                    />
                    <div className="forgot-password">
                        <Link to="/forgot-password" className="forgot-link">
                            Forgot Password?
                        </Link>
                    </div>
                    <button type="submit" className="login-button">Login</button>

                    <div className="divider">OR</div>

                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="google-button"
                    >
                        <img
                            src="https://icon2.cleanpng.com/20240216/piz/transparent-google-logo-google-logo-blue-circle-with-g-1710875323999.webp"
                            alt="Google Logo"
                            className="google-logo"
                        />
                        Sign in with Google
                    </button>

                    <p className="signup-text">
                        Don't have an account?{' '}
                        <Link to="/signup" className="signup-link">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
