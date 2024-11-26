import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Cell } from 'recharts';

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

// Styled Components for Dashboard Home
const DashboardContent = styled.div`
    padding: 2rem;
    background-color: var(--light-pink);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--deep-blue);
    margin-bottom: 2rem;
`;

const DashboardTitle = styled.h1`
    font-size: 2.5rem;
    color: var(--deep-blue);
    font-weight: 700;
`;

const PlanCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => (props.isFree ? '#FF6B6B' : '#4CAF50')};
    padding: 1rem 2rem;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s;

    &:hover {
        background-color: ${(props) => (props.isFree ? '#FFB3B3' : '#81C784')};
        transform: translateY(-3px);
    }
`;

const MetricCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    width: 48%;
    margin-bottom: 2rem;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }

    h2 {
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--deep-blue);
    }
`;

const GraphContainer = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

const GraphTitle = styled.h3`
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: var(--deep-blue);
`;

const DashboardHome = () => {
    return (
        <DashboardContent>
            <Header>
                <DashboardTitle>Dashboard</DashboardTitle>
                <PlanCard isFree={true}>
                    <span>Free Plan</span>
                </PlanCard>
            </Header>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Career Progress Card */}
                <MetricCard>
                    <h2>Career Progress</h2>
                    <p>75% Complete</p>
                </MetricCard>

                {/* Skills Achievements Card */}
                <MetricCard>
                    <h2>Skills Achievements</h2>
                    <p>5 New Skills This Month</p>
                </MetricCard>
            </div>

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
                        <Pie data={jobMatchData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#FF6B6B">
                            {jobMatchData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </GraphContainer>
        </DashboardContent>
    );
};

export default DashboardHome;
