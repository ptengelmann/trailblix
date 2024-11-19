import React from 'react';
import styled from 'styled-components';

const TermsWrapper = styled.section`
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

const TermsContent = styled.div`
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

const TermsOfServicePage = () => {
    return (
        <TermsWrapper>
            <SectionTitle>Terms of Service</SectionTitle>
            <TermsContent>
                <h3>Introduction</h3>
                <p>Welcome to Trailblix! These Terms of Service govern your use of our website and services.</p>

                <h3>Use of Our Service</h3>
                <p>By using our platform, you agree to comply with all applicable laws and regulations.</p>

                <h3>Account Responsibility</h3>
                <p>You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>

                <h3>Limitation of Liability</h3>
                <p>Trailblix will not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>

                <h3>Changes to Terms</h3>
                <p>We reserve the right to modify these Terms of Service at any time. Please review them regularly for updates.</p>

                <h3>Contact Us</h3>
                <p>If you have any questions about these Terms, feel free to contact us at support@trailblix.com.</p>
            </TermsContent>
        </TermsWrapper>
    );
};

export default TermsOfServicePage;
