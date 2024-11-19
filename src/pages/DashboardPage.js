import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DashboardSidebar from './DashboardComponents/DashboardSidebar.js';
import DashboardHome from './DashboardComponents/DashboardHome.js'; // Import Home page
import CareerPathsPage from './DashboardComponents/CareerPathsPage.js';  // Import Career Paths Page
import CareerDetailsPage from './DashboardComponents/CareerDetailsPage.js'; // Import Career Details Page
import LearningPathsPage from './DashboardComponents/LearningPathsPage.js'; // Import Learning Paths Page
import ProgressPage from './DashboardComponents/ProgressPage.js'; // Import Progress Page

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('home');  // Default active tab is 'home'
    const navigate = useNavigate();

    const handleTabChange = (tab) => setActiveTab(tab);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar is fixed on the left */}
            <DashboardSidebar 
                handleTabChange={handleTabChange} 
                activeTab={activeTab} 
            />

            <div style={{ flex: 1, marginLeft: '250px', padding: '2rem' }}>
                {/* Make sure the routes for the dashboard pages are inside this div */}
                <Routes>
                    {/* Route for Dashboard Home */}
                    <Route path="/" element={<DashboardHome />} />
                    {/* Route for Career Paths */}
                    <Route path="career-paths" element={<CareerPathsPage />} />
                    {/* Route for Career Details (e.g., Data Scientist, Software Engineer) */}
                    <Route path="career-paths/:careerName" element={<CareerDetailsPage />} />
                    {/* Route for Learning Paths */}
                    <Route path="learning-paths" element={<LearningPathsPage />} />
                    {/* Route for Progress Page */}
                    <Route path="progress" element={<ProgressPage />} /> {/* Add Progress Page Route */}
                </Routes>
            </div>
        </div>
    );
};

export default DashboardPage;
