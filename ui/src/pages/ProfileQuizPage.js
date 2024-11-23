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
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 600px;
    width: 100%;
    margin-bottom: 2rem;
`;

const QuestionTitle = styled.h2`
    margin-bottom: 1.5rem;
    color: var(--deep-blue);
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

const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid var(--gray-tone);
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
`;

const questions = [
    { question: 'Preferred Work Environment:', options: ['Remote', 'Hybrid', 'In-office', 'No Preference'] },
    { question: 'How Do You Prefer To Collaborate in a Team Setting:', options: ['Leading', 'Solo', 'Collaborative but not leading', 'Supporting'] },
    { question: 'What is most important to you in your career? (Select multiple):', options: ['High Salary', 'Job Stability', 'Creative Freedom', 'Career Progression', 'Work Life Balance'], multiple: true },
    { question: 'What type of tasks do you find most fulfilling?', options: ['Problem Solving', 'Creating New Ideas', 'Data Analysis', 'Organizing/planning', 'Helping Others'] },
    { question: 'What is your ideal career industry:', options: ['Text Field'], isTextField: true },
    { question: 'What level of experience would you like to start on:', options: ['Entry Level', 'Mid-level', 'Senior'] },
];

const ProfileQuizPage = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [additionalInfo, setAdditionalInfo] = useState(''); // For text input

    const handleOptionSelect = (option) => {
        if (questions[currentQuestion].multiple) {
            setSelectedOptions((prev) => ({
                ...prev,
                [currentQuestion]: prev[currentQuestion]
                    ? prev[currentQuestion].includes(option)
                        ? prev[currentQuestion].filter(o => o !== option)
                        : [...prev[currentQuestion], option]
                    : [option],
            }));
        } else {
            setSelectedOptions({
                ...selectedOptions,
                [currentQuestion]: option,
            });
        }
    };

    const handleNext = async () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Prepare the data to send to the server
            const userAnswers = {
                answers: selectedOptions,
                additionalInfo,
            };
    
            try {
                console.log('Submitting quiz data:', userAnswers);
    
                // Send the data to the backend API route
                const response = await axios.post('http://localhost:5000/api/quiz', userAnswers);
    
                console.log('Quiz data saved successfully:', response.data);
    
                // Redirect to sign-up page after success
                navigate('/signup');
            } catch (error) {
                console.error('Error saving quiz answers:', error);
                alert('There was an error saving your quiz data. Please try again.');
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
                <QuestionTitle>{questions[currentQuestion].question}</QuestionTitle>
                {questions[currentQuestion].isTextField ? (
                    <Input
                        type="text"
                        placeholder="Enter your ideal career industry"
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                    />
                ) : (
                    questions[currentQuestion].options.map((option) => (
                        <Option
                            key={option}
                            selected={selectedOptions[currentQuestion]?.includes(option)}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </Option>
                    ))
                )}
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
