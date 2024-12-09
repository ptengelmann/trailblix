import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle.js';
import LandingPage from './pages/LandingPage.js';
import AboutPage from './pages/AboutPage.js';
import SignUpPage from './pages/SignUpPage.js';
import ProfileCreationPage from './pages/ProfileCreationPage.js';
import ProfileQuizPage from './pages/ProfileQuizPage.js';
import LoginPage from './pages/LoginPage.js';
import PricingOverview from './pages/Pricing.js'; 
import BlogPage from './pages/BlogPage.js'; 
import { AuthProvider } from './AuthContext.js';
import ProtectedRoute from './ProtectedRoute.js';
import Footer from './components/Footer.js';
import ContactUsPage from './pages/ContactUsPage.js'; 
import TermsOfServicePage from './pages/TermsOfServicePage.js'; 
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js'; 
import DashboardPage from './pages/DashboardPage.js';  
import Header from './components/Header.js';  
import CareerDetailsPage from './pages/DashboardComponents/CareerDetailsPage.js'; 
import LearningPathsPage from './pages/DashboardComponents/LearningPathsPage.js'; 
import ProgressPage from './pages/DashboardComponents/ProgressPage.js'; 
import JobsPage from './pages/DashboardComponents/JobsPage.js';  
import ResourcesPage from './pages/DashboardComponents/ResourcesPage.js'; // Import ResourcesPage
import 'bootstrap/dist/css/bootstrap.min.css';

// Component to conditionally render the Header and Footer based on route
const AppLayout = ({ children }) => {
    const location = useLocation(); // Use useLocation hook from react-router-dom
    const isDashboardPage = location.pathname === '/dashboard' || location.pathname.includes('/dashboard');

    return (
        <div>
            {/* Only show header if not in the dashboard */}
            {!isDashboardPage && <Header />}
            {children}
            {/* Only show footer if not in the dashboard */}
            {!isDashboardPage && <Footer />}
        </div>
    );
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <GlobalStyle />
                <AppLayout>
                    <Routes>
                        {/* Public Routes */}
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/profile-creation" element={<ProfileCreationPage />} />
                        <Route path="/profile-quiz" element={<ProfileQuizPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/pricing" element={<PricingOverview />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/contact" element={<ContactUsPage />} />
                        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

                        {/* Protected Route for Dashboard */}
                        <Route 
                            path="/dashboard/*"
                            element={
                                <ProtectedRoute>
                                    <DashboardPage /> 
                                </ProtectedRoute>
                            }
                        >
                            {/* Nested routes for Dashboard */}
                            <Route path="career-paths/:careerName" element={<CareerDetailsPage />} />
                            <Route path="progress" element={<ProgressPage />} />
                            <Route path="jobs" element={<JobsPage />} />
                            <Route path="resources" element={<ResourcesPage />} /> {/* Resources Page Route */}
                            <Route path="learning-paths" element={<LearningPathsPage />} />
                        </Route>
                    </Routes>
                </AppLayout>
            </Router>
        </AuthProvider>
    );
}

export default App;
