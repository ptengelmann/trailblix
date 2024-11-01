// src/pages/ProfileQuizPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; // Import axios to make HTTP requests

const QuizWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    min-height: 80vh;
    background-color: var(--light-pink);
`;

const QuestionCard = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 600px;
    width: 100%;
    margin-bottom: 2rem;
`;

const Option = styled.div`
    background-color: ${({ selected }) => (selected ? '#ff6b6b' : '#fff')};
    color: ${({ selected }) => (selected ? '#fff' : '#000')};
    border: 1px solid var(--gray-tone);
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    margin-bottom: 1rem;

    &:hover {
        background-color: #ff8787;
        color: #fff;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff8787;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

const questions = [
    { question: 'What type of projects excite you the most?', options: ['Building something new', 'Solving complex problems', 'Managing teams', 'Analyzing data'] },
    { question: 'How do you measure success in your career?', options: ['Financial stability', 'Recognition and awards', 'Making an impact', 'Leadership positions'] },
    { question: 'What type of work environment do you thrive in?', options: ['Collaborative', 'Independent', 'Hybrid', 'Remote/Flexible'] },
    { question: 'How do you prefer to learn new skills?', options: ['Online courses', 'Hands-on projects', 'Reading books', 'Mentorship'] },
    { question: 'What motivates you the most in your career?', options: ['Career growth', 'Making a difference', 'Financial rewards', 'Work-life balance'] },
];

const ProfileQuizPage = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionSelect = (option) => {
        setSelectedOptions({
            ...selectedOptions,
            [currentQuestion]: option,
        });
    };

    const handleNext = async () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Prepare the data to send to the server
            const userAnswers = {
                answers: selectedOptions,
            };
            try {
                const response = await axios.post('http://localhost:5000/api/quiz', userAnswers);
                console.log('Quiz answers saved:', response.data);
                // Redirect to the Sign-Up Page only after successful save
                navigate('/signup'); 
            } catch (error) {
                console.error('Error saving quiz answers:', error);
            }
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <QuizWrapper>
            <QuestionCard>
                <h2>{questions[currentQuestion].question}</h2>
                {questions[currentQuestion].options.map((option) => (
                    <Option
                        key={option}
                        selected={selectedOptions[currentQuestion] === option}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </Option>
                ))}
            </QuestionCard>
            <ButtonContainer>
                <Button onClick={handleBack} disabled={currentQuestion === 0}>
                    Back
                </Button>
                <Button onClick={handleNext}>
                    {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                </Button>
            </ButtonContainer>
        </QuizWrapper>
    );
};

export default ProfileQuizPage;
