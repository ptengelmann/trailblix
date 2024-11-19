import React from 'react';
import styled from 'styled-components';

const PrivacyWrapper = styled.section`
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

const PrivacyContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    font-size: 1rem;
    text-align: left;
    color: var(--gray-tone);

    p {
        margin-bottom: 1.5rem;
    }

    h3 {
        font-size: 1.8rem;
        margin-top: 2rem;
    }
`;

const PrivacyPolicyPage = () => {
    return (
        <PrivacyWrapper>
            <SectionTitle>Privacy Policy</SectionTitle>
            <PrivacyContent>
                <h3>Introduction</h3>
                <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.</p>

                <h3>Information We Collect</h3>
                <p>We may collect personal information such as your name, email address, and usage data when you use our platform.</p>

                <h3>How We Use Your Information</h3>
                <p>Your information is used to provide personalized services, improve our platform, and communicate updates or promotions with you.</p>

                <h3>Sharing Your Information</h3>
                <p>We do not sell or share your personal information with third parties unless required by law or for business purposes.</p>

                <h3>Data Security</h3>
                <p>We implement reasonable measures to protect your data, but no method of transmission over the internet is 100% secure.</p>

                <h3>Changes to Privacy Policy</h3>
                <p>We reserve the right to modify this Privacy Policy at any time. Please check this page regularly for updates.</p>

                <h3>Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@trailblix.com.</p>
            </PrivacyContent>
        </PrivacyWrapper>
    );
};

export default PrivacyPolicyPage;
