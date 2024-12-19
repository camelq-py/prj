import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Main/Navbar';
import Dashboard from './Main/Dashboard';
import LoginPage from './Main/LoginPage';
import SignupPage from './Main/SignupPage';
import Profile from './Main/Profile';

function App() {
    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navbar />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
            </Router>
        </GoogleOAuthProvider>
    );
}

export default App;
