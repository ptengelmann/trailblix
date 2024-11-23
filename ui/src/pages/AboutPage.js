import React from 'react';
import './styles.css';

const AboutPage = () => {
    return (
        <section className="about-wrapper">
            <h1>About Us</h1>
            <p>
                Welcome to our company. We are dedicated to providing the best service possible.
            </p>
            <div className="team-section">
                <h2 className="section-title">Our Team</h2>
                {/* Team members and other content */}
            </div>
        </section>
    );
};

export default AboutPage;