import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the Profile Settings Page
const ProfileSettingsWrapper = styled.section`
    padding: 3rem 2rem;
    background-color: var(--soft-white);
    color: var(--deep-blue);
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 15px;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--deep-blue);
    text-align: center;
`;

const SubTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--bright-coral);
`;

const SectionWrapper = styled.div`
    margin-bottom: 3rem;
    padding: 1.5rem;
    background-color: var(--light-pink);
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--gray-tone);
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: var(--deep-blue);
`;

const TextArea = styled.textarea`
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--gray-tone);
    width: 100%;
    height: 150px;
    font-size: 1rem;
    color: var(--deep-blue);
    margin-bottom: 1.5rem;
`;

const Select = styled.select`
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--gray-tone);
    width: 100%;
    font-size: 1rem;
    color: var(--deep-blue);
    margin-bottom: 1.5rem;
`;

const Button = styled.button`
    background-color: var(--bright-coral);
    color: white;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    margin-top: 1.5rem;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: none;
    }
`;

const ProfileSettings = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        location: '',
        careerInterests: '',
        careerPreference: '',
        skillsExperience: '',
        privacySetting: 'public', // Default value
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., update user profile in database
        console.log(formData);
    };

    return (
        <ProfileSettingsWrapper>
            <SectionTitle>Profile Settings</SectionTitle>

            {/* Edit Profile Section */}
            <SectionWrapper>
                <SubTitle>Edit Profile</SubTitle>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <Input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Location"
                    />
                    <TextArea
                        name="careerInterests"
                        value={formData.careerInterests}
                        onChange={handleChange}
                        placeholder="Career Interests"
                    />
                    <Button type="submit">Save Changes</Button>
                </form>
            </SectionWrapper>

            {/* Career Preferences Section */}
            <SectionWrapper>
                <SubTitle>Career Preferences</SubTitle>
                <form onSubmit={handleSubmit}>
                    <Select
                        name="careerPreference"
                        value={formData.careerPreference}
                        onChange={handleChange}
                    >
                        <option value="data-scientist">Data Scientist</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="software-engineer">Software Engineer</option>
                        <option value="ux-designer">UX Designer</option>
                    </Select>
                    <Button type="submit">Save Preferences</Button>
                </form>
            </SectionWrapper>

            {/* Skills and Experience Section */}
            <SectionWrapper>
                <SubTitle>Skills and Experience</SubTitle>
                <form onSubmit={handleSubmit}>
                    <TextArea
                        name="skillsExperience"
                        value={formData.skillsExperience}
                        onChange={handleChange}
                        placeholder="Add skills and experience"
                    />
                    <Button type="submit">Save Skills</Button>
                </form>
            </SectionWrapper>

            {/* Privacy Settings Section */}
            <SectionWrapper>
                <SubTitle>Privacy Settings</SubTitle>
                <form onSubmit={handleSubmit}>
                    <Select
                        name="privacySetting"
                        value={formData.privacySetting}
                        onChange={handleChange}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </Select>
                    <Button type="submit">Save Privacy Settings</Button>
                </form>
            </SectionWrapper>
        </ProfileSettingsWrapper>
    );
};

export default ProfileSettings;
