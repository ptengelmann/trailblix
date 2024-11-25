import React, { useState } from 'react';
import styled from 'styled-components';

// Wrapper for Jobs Page
const JobsWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--deep-blue);
    text-align: center;
`;

const JobList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

const JobCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
`;

const JobTitle = styled.h3`
    font-size: 1.75rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
    font-weight: bold;
`;

const JobDetails = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
    margin-bottom: 1rem;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: var(--deep-blue);
        transform: translateY(-3px);
    }
`;

const FilterSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const FilterItem = styled.select`
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid var(--gray-tone);
    background-color: var(--soft-white);
`;

const JobAlertsSection = styled.div`
    background-color: var(--light-pink);
    border-radius: 15px;
    padding: 2rem;
    margin-top: 3rem;
    text-align: center;
`;

const JobAlertsButton = styled(Button)`
    background-color: var(--deep-blue);
    font-size: 1.1rem;
    padding: 1rem 2rem;
`;

const JobsPage = () => {
    // States for managing jobs and filters
    const [jobs, setJobs] = useState([
        { title: 'Data Scientist', company: 'XYZ Corp', location: 'New York', salary: '$100,000', type: 'Full-time' },
        { title: 'Software Engineer', company: 'ABC Inc.', location: 'San Francisco', salary: '$120,000', type: 'Remote' },
        { title: 'Product Manager', company: 'TechStartup', location: 'London', salary: '$110,000', type: 'Hybrid' },
    ]);

    const [filter, setFilter] = useState({ location: '', jobType: '' });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const applyFilter = () => {
        // Apply filter logic here based on the state
        console.log('Applying filters: ', filter);
    };

    const handleJobAlertClick = () => {
        // Logic for setting job alerts
        alert('Job alert set!');
    };

    return (
        <JobsWrapper>
            <SectionTitle>Job Opportunities</SectionTitle>

            {/* Filter Section */}
            <FilterSection>
                <FilterItem name="location" onChange={handleFilterChange}>
                    <option value="">Location</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="London">London</option>
                </FilterItem>

                <FilterItem name="jobType" onChange={handleFilterChange}>
                    <option value="">Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                </FilterItem>

                <Button onClick={applyFilter}>Apply Filters</Button>
            </FilterSection>

            {/* Job Listings */}
            <JobList>
                {jobs.map((job, index) => (
                    <JobCard key={index}>
                        <JobTitle>{job.title}</JobTitle>
                        <JobDetails>{job.company} | {job.location} | {job.salary} | {job.type}</JobDetails>
                        <Button>Apply Now</Button>
                    </JobCard>
                ))}
            </JobList>

            {/* Job Alerts Section */}
            <JobAlertsSection>
                <h3>Set Job Alerts</h3>
                <p>Get notified about new job openings that match your skills and preferences.</p>
                <JobAlertsButton onClick={handleJobAlertClick}>Set Job Alert</JobAlertsButton>
            </JobAlertsSection>
        </JobsWrapper>
    );
};

export default JobsPage;
