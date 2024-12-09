import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    max-width: 1200px;
    margin: 0 auto;
`;

const AboutTitle = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: var(--bright-coral);
    margin-bottom: 1.5rem;
    text-align: center;
`;

const AboutDescription = styled.p`
    font-size: 1.25rem;
    text-align: center;
    line-height: 1.7;
    margin-bottom: 3rem;
    max-width: 900px;
    color: var(--gray-tone);
`;

const MissionSection = styled.div`
    margin-bottom: 3rem;
    text-align: center;
`;

const MissionTitle = styled.h2`
    font-size: 2.5rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const MissionText = styled.p`
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    color: var(--gray-tone);
    line-height: 1.6;
`;

const TeamSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem; /* Creates a gap between the cards */
    margin-top: 4rem;
`;

const TeamMember = styled.div`
    background-color: var(--soft-white);
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const TeamMemberImg = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
`;

const TeamMemberName = styled.h3`
    font-size: 1.5rem;
    color: var(--bright-coral);
    margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
    font-size: 1.1rem;
    color: var(--deep-blue);
    margin-bottom: 1rem;
`;

const TeamMemberDescription = styled.p`
    font-size: 1rem;
    color: var(--gray-tone);
`;

const AboutPage = () => {
    return (
        <AboutWrapper>
            <AboutTitle>About Us</AboutTitle>
            <AboutDescription>
                At Trailblix, we are on a mission to revolutionize the way people discover and advance in their careers. Our platform combines cutting-edge AI technology with personalized career guidance, making it easier than ever for professionals to map out their career paths, upskill, and find job opportunities tailored to their aspirations. Whether you're just starting out or looking to make a career shift, we're here to help you navigate the journey.
            </AboutDescription>

            <MissionSection>
                <MissionTitle>Our Mission</MissionTitle>
                <MissionText>
                    We believe that everyone deserves the opportunity to achieve their career goals. At Trailblix, we leverage AI to offer personalized recommendations for career growth, skill development, and job opportunities. Our mission is to make career progression accessible, efficient, and meaningful for professionals worldwide.
                </MissionText>
            </MissionSection>

            <TeamSection>
                <TeamMember>
                    <TeamMemberImg src="https://www.w3schools.com/howto/img_avatar.png" alt="Pedro Perez Serapiao" />
                    <TeamMemberName>Pedro Perez Serapiao</TeamMemberName>
                    <TeamMemberRole>CEO & Founder</TeamMemberRole>
                    <TeamMemberDescription>
                        As the CEO and Founder of Trailblix, Pedro leads the company with a vision to democratize career growth through AI. With a background in technology and entrepreneurship, he is passionate about using data-driven solutions to empower individuals to make informed career decisions.
                    </TeamMemberDescription>
                </TeamMember>

                <TeamMember>
                    <TeamMemberImg src="https://www.w3schools.com/howto/img_avatar.png" alt="Marcos Roberto Perez" />
                    <TeamMemberName>Marcos Roberto Perez</TeamMemberName>
                    <TeamMemberRole>CTO</TeamMemberRole>
                    <TeamMemberDescription>
                        Marcos is the CTO at Trailblix, overseeing the development of AI algorithms that provide personalized career guidance. With his extensive experience in machine learning and AI, he ensures the platform remains innovative and cutting-edge, delivering exceptional value to users.
                    </TeamMemberDescription>
                </TeamMember>
            </TeamSection>
        </AboutWrapper>
    );
};

export default AboutPage;
