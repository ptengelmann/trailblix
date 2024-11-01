import React from 'react';
import HeroSection from './HeroSection.js'; // Import the HeroSection component
import FeaturesOverview from './FeaturesOverview.js'; // Import the FeaturesOverview component

// Main LandingPage component
const LandingPage = () => (
    <div>
        <section id="hero">
            <HeroSection />
        </section>
        <section id="features">
            <FeaturesOverview />
        </section>
        {/* Add other sections like About Us and Contact */}
    </div>
);

export default LandingPage;
