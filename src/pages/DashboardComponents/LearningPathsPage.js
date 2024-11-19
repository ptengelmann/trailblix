import React, { useState } from 'react';
import styled from 'styled-components';

// Wrapper for the Learning Paths Page
const LearningPathsWrapper = styled.div`
    padding: 3rem 2rem;
    background-color: var(--light-pink);
    min-height: 100vh;
`;

// Title and Description Section
const TitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const PageTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const PageDescription = styled.p`
    font-size: 1.1rem;
    color: var(--dark-gray);
    max-width: 800px;
    margin: 0 auto;
`;

// Course Section
const CourseCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const CourseTitle = styled.h3`
    font-size: 1.8rem;
    color: var(--deep-blue);
`;

const CourseInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: var(--dark-gray);
`;

const CourseDescription = styled.p`
    font-size: 1.1rem;
    color: var(--dark-gray);
    margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
    height: 8px;
    background-color: var(--light-gray);
    border-radius: 5px;
    overflow: hidden;
`;

const Progress = styled.div`
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: var(--bright-coral);
    transition: width 0.3s ease;
`;

const EnrollButton = styled.button`
    background-color: var(--deep-blue);
    color: var(--soft-white);
    padding: 0.75rem 2rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: var(--bright-coral);
        transform: translateY(-3px);
    }
`;

// Search and Filter Section
const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

const SearchInput = styled.input`
    padding: 0.75rem;
    border-radius: 5px;
    border: 1px solid var(--light-gray);
    width: 70%;
`;

const FilterSelect = styled.select`
    padding: 0.75rem;
    border-radius: 5px;
    border: 1px solid var(--light-gray);
`;

const LearningPathsPage = () => {
    // Example state for courses
    const [courses] = useState([
        {
            title: 'Python for Data Science',
            platform: 'Udemy',
            rating: 4.5,
            skillLevel: 'Intermediate',
            estimatedTime: '8 hours',
            progress: 60,
            description: 'Learn Python and its applications in data science.',
        },
        {
            title: 'Introduction to Machine Learning',
            platform: 'Coursera',
            rating: 4.8,
            skillLevel: 'Beginner',
            estimatedTime: '10 hours',
            progress: 20,
            description: 'A beginner course on machine learning concepts.',
        },
        {
            title: 'Advanced Data Visualization',
            platform: 'Udemy',
            rating: 4.7,
            skillLevel: 'Advanced',
            estimatedTime: '12 hours',
            progress: 85,
            description: 'Advanced techniques for data visualization using Python.',
        },
    ]);

    return (
        <LearningPathsWrapper>
            {/* Page Title and Description */}
            <TitleWrapper>
                <PageTitle>Recommended Courses to Advance Your Skills</PageTitle>
                <PageDescription>
                    Curated learning paths to help you gain the skills needed for your career path.
                </PageDescription>
            </TitleWrapper>

            {/* Search and Filter */}
            <SearchWrapper>
                <SearchInput type="text" placeholder="Search for a course..." />
                <FilterSelect>
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </FilterSelect>
            </SearchWrapper>

            {/* Displaying the Courses */}
            {courses.map((course, index) => (
                <CourseCard key={index}>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseDescription>{course.description}</CourseDescription>
                    <CourseInfo>
                        <span>Platform: {course.platform}</span>
                        <span>Rating: {course.rating}</span>
                    </CourseInfo>
                    <CourseInfo>
                        <span>Skill Level: {course.skillLevel}</span>
                        <span>Estimated Time: {course.estimatedTime}</span>
                    </CourseInfo>

                    {/* Progress Bar */}
                    <ProgressBar>
                        <Progress progress={course.progress} />
                    </ProgressBar>

                    <EnrollButton>Enroll Now</EnrollButton>
                </CourseCard>
            ))}
        </LearningPathsWrapper>
    );
};

export default LearningPathsPage;
