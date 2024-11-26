import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProfileWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    min-height: 100vh;
    background-color: var(--light-pink);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 800px;
    background-color: var(--soft-white);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid var(--gray-tone);
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: var(--soft-white);
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff8787;
    }
`;

const OutcomeCardWrapper = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
`;

const OutcomeCard = styled.div`
    background-color: ${(props) => (props.isSelected ? 'var(--bright-coral)' : 'var(--soft-white)')};
    color: ${(props) => (props.isSelected ? 'var(--soft-white)' : 'var(--deep-blue)')};
    padding: 1.5rem 2rem;
    border-radius: 25px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
`;

const ProfileCreationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        location: '',
        currentRole: '',
        desiredOutcome: '',
        desiredNextStep: '',
        skillGaps: '',
        preferredRoleType: '',
        skillTransferability: '',
        newCareerInterest: '',
        skillsAudit: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Data:', formData);
        navigate('/profile-quiz');
    };

    return (
        <ProfileWrapper>
            <h1>Complete Your Profile</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="text"
                    name="currentRole"
                    placeholder="Current Role"
                    value={formData.currentRole}
                    onChange={handleChange}
                    required
                />

                {/* Desired Outcome Cards */}
                <label htmlFor="desiredOutcome">Desired Outcome:</label>
                <OutcomeCardWrapper>
                    {['Career Progression', 'Change Within The Same Field', 'Complete Change'].map((outcome) => (
                        <OutcomeCard
                            key={outcome}
                            isSelected={formData.desiredOutcome === outcome}
                            onClick={() => setFormData({ ...formData, desiredOutcome: outcome })}
                        >
                            {outcome}
                        </OutcomeCard>
                    ))}
                </OutcomeCardWrapper>

                {/* Show additional fields based on selected outcome */}
                {formData.desiredOutcome === 'Career Progression' && (
                    <>
                        <label htmlFor="desiredNextStep">Desired Next Step:</label>
                        <Input
                            type="text"
                            name="desiredNextStep"
                            placeholder="Your desired next step"
                            value={formData.desiredNextStep}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="skillGaps"
                            placeholder="Skills or certifications you need"
                            value={formData.skillGaps}
                            onChange={handleChange}
                        />
                    </>
                )}

                {formData.desiredOutcome === 'Change Within The Same Field' && (
                    <>
                        <Input
                            type="text"
                            name="preferredRoleType"
                            placeholder="Preferred Role Type"
                            value={formData.preferredRoleType}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="skillTransferability"
                            placeholder="Skills that can be leveraged"
                            value={formData.skillTransferability}
                            onChange={handleChange}
                        />
                    </>
                )}

                {formData.desiredOutcome === 'Complete Change' && (
                    <>
                        <Input
                            type="text"
                            name="newCareerInterest"
                            placeholder="New Career Interest"
                            value={formData.newCareerInterest}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="skillsAudit"
                            placeholder="Current skills you have"
                            value={formData.skillsAudit}
                            onChange={handleChange}
                        />
                    </>
                )}

                <Button type="submit">Save and Continue</Button>
            </Form>
        </ProfileWrapper>
    );
};

export default ProfileCreationPage;
