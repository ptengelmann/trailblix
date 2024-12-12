import React from 'react';
import { useNavigate } from 'react-router-dom';
import b1Image from '../assets/b1.svg';
import b2Image from '../assets/b2.svg';
import b3Image from '../assets/b3.svg';
import b4Image from '../assets/b4.svg';
import './styles.css'; // Ensure you import the CSS file for styling

const BenefitsOverview = () => {
    const navigate = useNavigate();

    return (
        <section className="benefits-wrapper">
            <h2 className="section-title">Our Benefits</h2>
            <div className="benefits-grid">
                <div className="benefit-item">
                    <img src={b1Image} alt="Benefit 1" className="benefit-image" />
                    <p className="benefit-text">Benefit 1 description</p>
                </div>
                <div className="benefit-item">
                    <img src={b2Image} alt="Benefit 2" className="benefit-image" />
                    <p className="benefit-text">Benefit 2 description</p>
                </div>
                <div className="benefit-item">
                    <img src={b3Image} alt="Benefit 3" className="benefit-image" />
                    <p className="benefit-text">Benefit 3 description</p>
                </div>
                <div className="benefit-item">
                    <img src={b4Image} alt="Benefit 4" className="benefit-image" />
                    <p className="benefit-text">Benefit 4 description</p>
                </div>
            </div>
            <button className="button" onClick={() => navigate('/details')}>Learn More</button>
        </section>
    );
};

export default BenefitsOverview;