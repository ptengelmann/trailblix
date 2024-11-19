import React from 'react';
import styled from 'styled-components';

// Wrapper for About Page Section
const AboutWrapper = styled.section`
    padding: 8rem 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    color: var(--deep-blue);

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--bright-coral);
    }

    p {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
`;

// Section for Team and Other Info
const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--deep-blue);
    text-align: center;
`;

const TeamSection = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
`;

const TeamMember = styled.div`
    text-align: center;
    padding: 1rem;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        object-fit: cover;
        margin-bottom: 0.5rem;
    }

    h3 {
        font-size: 1.2rem;
        color: var(--deep-blue);
        margin-bottom: 0.3rem;
    }

    p {
        font-size: 0.9rem;
        color: var(--gray-tone);
    }

    a {
        color: var(--bright-coral);
        text-decoration: none;
        font-size: 0.9rem;
        margin-top: 0.5rem;
        display: inline-block;
        transition: color 0.3s;

        &:hover {
            color: var(--deep-blue);
        }
    }
`;

// Additional Sections like Mission, Vision, and Values
const MissionSection = styled.div`
    margin-top: 5rem;
    text-align: center;
`;

const VisionSection = styled.div`
    margin-top: 5rem;
    text-align: center;
`;

const ValuesSection = styled.div`
    margin-top: 5rem;
    text-align: center;
    padding-bottom: 3rem;
`;

const AboutPage = () => (
    <AboutWrapper>
        <h1>About Trailblix</h1>
        <p>
            At Trailblix, we are passionate about empowering individuals to make informed career
            choices using advanced AI technology. Our mission is to provide personalized career
            guidance, tailored learning paths, and job recommendations to help you blaze your
            trail in the professional world.
        </p>
        <p>
            We believe in innovation, growth, and the power of technology to transform career
            journeys. With our cutting-edge platform, we aim to bridge the gap between
            aspirations and opportunities, making career planning accessible and efficient for
            everyone.
        </p>

        {/* Mission Section */}
        <MissionSection>
            <SectionTitle>Our Mission</SectionTitle>
            <p>
                To revolutionize career development by providing personalized, data-driven
                insights, helping individuals at all stages of their career journey.
            </p>
        </MissionSection>

        {/* Vision Section */}
        <VisionSection>
            <SectionTitle>Our Vision</SectionTitle>
            <p>
                To be the world’s most trusted career development platform, empowering individuals to
                achieve their full potential and make informed decisions for long-term career
                success.
            </p>
        </VisionSection>

        {/* Values Section */}
        <ValuesSection>
            <SectionTitle>Our Values</SectionTitle>
            <p>
                At Trailblix, we value integrity, innovation, inclusivity, and continuous
                learning. Our platform reflects these values, ensuring that everyone has access to
                the tools and resources they need to succeed.
            </p>
        </ValuesSection>

        <h2>Meet Our Team</h2>
        <TeamSection>
            <TeamMember>
                <img src="https://via.placeholder.com/150" alt="Pedro Perez Serapiao" />
                <h3>Pedro Perez Serapiao</h3>
                <p>CEO & Founder</p>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </TeamMember>
            <TeamMember>
                <img src="https://via.placeholder.com/150" alt="Marcos Perez Rossini" />
                <h3>Marcos Perez Rossini</h3>
                <p>Chief Technology Officer</p>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </TeamMember>
            {/* Add more team members as needed */}
        </TeamSection>
    </AboutWrapper>
);

export default AboutPage;
