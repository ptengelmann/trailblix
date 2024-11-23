import React, { useState } from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap'; // Progress bar for skill development

// Styled-components for the Progress Page

const ProgressWrapper = styled.section`
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--deep-blue);
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    color: var(--bright-coral);
    margin-bottom: 1rem;
    font-weight: bold;
`;

const SubSection = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    background-color: var(--soft-white);
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TrackerTitle = styled.h3`
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: var(--deep-blue);
    font-weight: bold;
`;

const TrackerDescription = styled.p`
    font-size: 1.1rem;
    color: var(--gray-tone);
    margin-bottom: 1rem;
`;

const SkillBarWrapper = styled.div`
    margin-bottom: 2rem;
`;

const AchievementWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
`;

const AchievementCard = styled.div`
    background-color: var(--light-pink);
    color: var(--deep-blue);
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    text-align: center;
    flex: 1 1 calc(33% - 1rem);

    h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
    }
`;

const ReflectButton = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    border: none;
    border-radius: 25px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--deep-blue);
    }
`;

const ProgressPage = () => {
    // Sample Data for Skills, Career, and Achievements
    const [learningPaths, setLearningPaths] = useState([
        { title: 'Data Science Basics', progress: 60 },
        { title: 'Advanced Machine Learning', progress: 30 },
    ]);

    const [careerGoals, setCareerGoals] = useState([
        { goal: 'Complete Data Science Bootcamp', steps: ['Learn Python', 'Learn Data Visualization', 'Understand Machine Learning'] },
        { goal: 'Get a Job in Data Science', steps: ['Apply to 5 jobs', 'Interview Preparation', 'Follow Up on Applications'] },
    ]);

    const [achievements, setAchievements] = useState([
        { title: 'Completed First Learning Path', description: 'You have completed the first learning path on your journey.' },
        { title: 'Applied for 5 Jobs', description: 'You have applied for 5 data science-related job opportunities.' },
    ]);

    return (
        <ProgressWrapper>
            <SectionTitle>Your Progress</SectionTitle>

            {/* Skill Development Tracker */}
            <SubSection>
                <TrackerTitle>Skill Development Tracker</TrackerTitle>
                <TrackerDescription>Track your progress on key skills that align with your career path.</TrackerDescription>
                {learningPaths.map((path, index) => (
                    <SkillBarWrapper key={index}>
                        <h4>{path.title}</h4>
                        <ProgressBar now={path.progress} label={`${path.progress}%`} />
                    </SkillBarWrapper>
                ))}
            </SubSection>

            {/* Learning Path Progress */}
            <SubSection>
                <TrackerTitle>Learning Path Progress</TrackerTitle>
                <TrackerDescription>Monitor your progress in completing key courses and milestones.</TrackerDescription>
                {learningPaths.map((path, index) => (
                    <SkillBarWrapper key={index}>
                        <h4>{path.title}</h4>
                        <ProgressBar now={path.progress} label={`${path.progress}%`} />
                    </SkillBarWrapper>
                ))}
            </SubSection>

            {/* Career Goals Tracker */}
            <SubSection>
                <TrackerTitle>Career Goals Tracker</TrackerTitle>
                <TrackerDescription>Keep track of your progress towards your career goals.</TrackerDescription>
                {careerGoals.map((goal, index) => (
                    <div key={index}>
                        <h4>{goal.goal}</h4>
                        <ul>
                            {goal.steps.map((step, stepIndex) => (
                                <li key={stepIndex}>{step}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </SubSection>

            {/* Achievements and Badges */}
            <SubSection>
                <TrackerTitle>Achievements and Badges</TrackerTitle>
                <TrackerDescription>Celebrate your achievements and milestones as you go!</TrackerDescription>
                <AchievementWrapper>
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={index}>
                            <h4>{achievement.title}</h4>
                            <p>{achievement.description}</p>
                        </AchievementCard>
                    ))}
                </AchievementWrapper>
            </SubSection>

            {/* Review and Reflect */}
            <SubSection>
                <ReflectButton onClick={() => alert('Reflect on your progress!')}>Review and Reflect</ReflectButton>
            </SubSection>
        </ProgressWrapper>
    );
};

export default ProgressPage;
