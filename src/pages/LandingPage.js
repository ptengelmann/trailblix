import React from 'react';
import HeroSection from './HeroSection.js'; // Import the HeroSection component
import FeaturesOverview from './FeaturesOverview.js'; // Import the FeaturesOverview component
import BenefitsOverview from './BenefitsOverview.js'; // Import the BenefitsOverview component
import TestimonialSection from './TestimonialSection.js'; // Import the TestimonialSection component

// Main LandingPage component
const LandingPage = () => (
    <div>
        <section id="hero">
            <HeroSection />
        </section>
        <section id="features">
            <FeaturesOverview />
        </section>
        <section id="benefits">
            <BenefitsOverview /> {/* Add the BenefitsOverview section here */}
        </section>
        <section id="testimonials">
            <TestimonialSection /> {/* Add the TestimonialSection here */}
        </section>
        {/* Add other sections like About Us and Contact */}
    </div>
);

export default LandingPage;
