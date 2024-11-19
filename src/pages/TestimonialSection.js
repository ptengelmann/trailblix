import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the Testimonial Section
const TestimonialWrapper = styled.section`
    padding: 4rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    text-align: center;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--deep-blue);
`;

const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const TestimonialCard = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
    text-align: left;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
`;

const UserPhoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 1rem;
`;

const UserDetails = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const UserName = styled.h3`
    font-size: 1.2rem;
    color: var(--deep-blue);
    margin-left: 1rem;
`;

const UserRoleLocation = styled.p`
    font-size: 0.9rem;
    color: var(--gray-tone);
    margin-left: 1rem;
`;

const TestimonialText = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
    font-style: italic;
`;

const ArrowButtonContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem; /* Space between arrows */
`;

const ArrowButton = styled.button`
    background-color: transparent;
    border: none;
    color: var(--deep-blue);
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.2);
    }
`;

const TestimonialSection = () => {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'Software Developer',
            location: 'New York, USA',
            photo: 'https://via.placeholder.com/80',
            text: 'Trailblix helped me identify the exact skills I needed for my next role, and I found the perfect job in no time!',
        },
        {
            name: 'Jane Smith',
            role: 'Marketing Manager',
            location: 'London, UK',
            photo: 'https://via.placeholder.com/80',
            text: 'Thanks to Trailblix’s career path recommendations, I took the leap to a more fulfilling position and advanced my career.',
        },
        {
            name: 'Chris Johnson',
            role: 'Data Scientist',
            location: 'San Francisco, USA',
            photo: 'https://via.placeholder.com/80',
            text: 'I was able to upskill and secure a higher-paying role through the personalized job suggestions from Trailblix.',
        },
        {
            name: 'Sarah Lee',
            role: 'Product Manager',
            location: 'Toronto, Canada',
            photo: 'https://via.placeholder.com/80',
            text: 'The personalized learning path Trailblix created for me was a game changer. I got a promotion just a few months later!',
        },
        {
            name: 'David Brown',
            role: 'UX Designer',
            location: 'Sydney, Australia',
            photo: 'https://via.placeholder.com/80',
            text: 'Trailblix gave me the tools to make the career change I had always wanted. I now work in a field I’m truly passionate about!',
        },
        {
            name: 'Emily Williams',
            role: 'Project Manager',
            location: 'Berlin, Germany',
            photo: 'https://via.placeholder.com/80',
            text: 'I was stuck in my career and Trailblix provided the clarity and direction I needed. I’m now on a fast track for growth!',
        },
    ];

    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handleNext = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2)); // To prevent going out of bounds
    };

    const handlePrev = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length - 2) % (testimonials.length - 2));
    };

    return (
        <TestimonialWrapper>
            <SectionTitle>What Our Users Are Saying</SectionTitle>
            <TestimonialsGrid>
                {testimonials.slice(currentTestimonialIndex, currentTestimonialIndex + 3).map((testimonial, index) => (
                    <TestimonialCard key={index}>
                        <UserDetails>
                            <UserPhoto src={testimonial.photo} alt={testimonial.name} />
                            <div>
                                <UserName>{testimonial.name}</UserName>
                                <UserRoleLocation>{testimonial.role} | {testimonial.location}</UserRoleLocation>
                            </div>
                        </UserDetails>
                        <TestimonialText>{testimonial.text}</TestimonialText>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>
            <ArrowButtonContainer>
                <ArrowButton onClick={handlePrev}>&#8592;</ArrowButton>
                <ArrowButton onClick={handleNext}>&#8594;</ArrowButton>
            </ArrowButtonContainer>
        </TestimonialWrapper>
    );
};

export default TestimonialSection;
