// DashboardPage.js
import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'; // Import graph components
import { useAuth } from '../AuthContext.js'; // Import useAuth to access user data

// Sample data for graphs
const skillProgressData = [
    { name: 'Jan', skillLevel: 2 },
    { name: 'Feb', skillLevel: 3 },
    { name: 'Mar', skillLevel: 5 },
    { name: 'Apr', skillLevel: 6 },
    { name: 'May', skillLevel: 8 },
];

const jobMatchData = [
    { name: 'Matched', value: 70 },
    { name: 'Not Matched', value: 30 },
];

const COLORS = ['#FF6B6B', '#FFB3B3'];

// Styled Components
const DashboardWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    background-color: var(--light-pink);
    min-height: 100vh;
`;

const HeaderSection = styled.div`
    grid-column: span 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserName = styled.h1`
    font-size: 2rem;
    color: var(--deep-blue);
`;

const MetricCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }
`;

const GraphContainer = styled.div`
    grid-column: span 2;
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const GraphTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

// Main Dashboard Component
const DashboardPage = () => {
    const { user } = useAuth(); // Access user data
    const userName = user?.firstName ? `${user.firstName} ${user.lastName}` : user?.email || 'User'; // Use user's name or email

    return (
        <DashboardWrapper>
            {/* Header Section */}
            <HeaderSection>
                <UserName>Welcome, {userName}!</UserName> {/* Display user name or email */}
            </HeaderSection>

            {/* Summary Card */}
            <MetricCard>
                <h2>Career Progress</h2>
                <p>75% Complete</p>
            </MetricCard>

            {/* Skills Achievements Card */}
            <MetricCard>
                <h2>Skills Achievements</h2>
                <p>5 New Skills This Month</p>
            </MetricCard>

            {/* Skill Progression Graph */}
            <GraphContainer>
                <GraphTitle>Skill Progression</GraphTitle>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={skillProgressData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="skillLevel" stroke="#FF6B6B" />
                    </LineChart>
                </ResponsiveContainer>
            </GraphContainer>

            {/* Job Match Overview Graph */}
            <GraphContainer>
                <GraphTitle>Job Match Overview</GraphTitle>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={jobMatchData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#FF6B6B"
                        >
                            {jobMatchData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </GraphContainer>

            {/* Job Recommendations Card */}
            <MetricCard>
                <h2>Job Recommendations</h2>
                <p>3 New Jobs Matching Your Profile</p>
            </MetricCard>

            {/* Career Path Visualization Card */}
            <MetricCard>
                <h2>Career Path Visualization</h2>
                <p>Explore Your Career Path</p>
            </MetricCard>
        </DashboardWrapper>
    );
};

export default DashboardPage;
