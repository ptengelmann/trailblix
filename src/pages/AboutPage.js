import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
    padding: 8rem 4rem 2rem;
    max-width: 1000px;
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

const TeamSection = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
`;

const TeamMember = styled.div`
    text-align: center;

    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
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

        <h2>Meet Our Team</h2>
        <TeamSection>
            <TeamMember>
                <img src="path-to-image" alt="Team Member Name" />
                <h3>Pedro Perez Serapiao</h3>
                <p>CEO & Founder</p>
            </TeamMember>
            <TeamMember>
                <img src="path-to-image" alt="Team Member Name" />
                <h3>Marcos Perez Rossini</h3>
                <p>Chief Technology Officer</p>
            </TeamMember>
            {/* Add more team members as needed */}
        </TeamSection>
    </AboutWrapper>
);

export default AboutPage;
