import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LandingPage from './pages/LandingPage.js';
import AboutPage from './pages/AboutPage.js';
import SignUpPage from './pages/SignUpPage.js';
import ProfileCreationPage from './pages/ProfileCreationPage.js';
import ProfileQuizPage from './pages/ProfileQuizPage.js';
import LoginPage from './pages/LoginPage.js';
import DashboardPage from './pages/DashboardPage.js';
import { AuthProvider } from './AuthContext.js';
import ProtectedRoute from './ProtectedRoute.js';

function App() {
    return (
        <AuthProvider>
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/profile-creation" element={<ProfileCreationPage />} />
                    <Route path="/profile-quiz" element={<ProfileQuizPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route 
                        path="/dashboard" 
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
