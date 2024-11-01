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

const Dropdown = styled.select`
    padding: 0.5rem;
    border: 1px solid var(--gray-tone);
    border-radius: 5px;
    font-size: 1rem;
`;

const MultiSelect = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const OptionCard = styled.div`
    background-color: ${({ selected }) => (selected ? '#ff6b6b' : '#fff')};
    color: ${({ selected }) => (selected ? '#fff' : '#000')};
    border: 1px solid var(--gray-tone);
    border-radius: 10px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #ff8787;
        color: #fff;
    }
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

const ProfileCreationPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        careerField: '',
        customField: '',
        selectedSkills: [],
        customSkill: ''
    });

    const careerFields = ['Technology', 'Healthcare', 'Sales', 'Marketing', 'Zoology', 'Education', 'Other'];
    const skills = ['JavaScript', 'Public Speaking', 'Data Analysis', 'Social Media Management', 'Animal Care', 'SEO Optimization', 'Other'];

    const toggleSkillSelection = (skill) => {
        setFormData((prevData) => ({
            ...prevData,
            selectedSkills: prevData.selectedSkills.includes(skill)
                ? prevData.selectedSkills.filter((s) => s !== skill)
                : [...prevData.selectedSkills, skill]
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            dateOfBirth: formData.dateOfBirth,
            careerField: formData.careerField === 'Other' ? formData.customField : formData.careerField,
            skills: formData.selectedSkills.includes('Other')
                ? [...formData.selectedSkills.filter(skill => skill !== 'Other'), formData.customSkill]
                : formData.selectedSkills
        };
        console.log('Profile Data:', profileData);
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

                <label htmlFor="career-field">Select Your Career Field:</label>
                <Dropdown
                    id="career-field"
                    name="careerField"
                    value={formData.careerField}
                    onChange={handleChange}
                >
                    <option value="">-- Select --</option>
                    {careerFields.map((field) => (
                        <option key={field} value={field}>
                            {field}
                        </option>
                    ))}
                </Dropdown>
                {formData.careerField === 'Other' && (
                    <Input
                        type="text"
                        name="customField"
                        placeholder="Please specify your career field"
                        value={formData.customField}
                        onChange={handleChange}
                    />
                )}

                <h2>Select Your Skills:</h2>
                <MultiSelect>
                    {skills.map((skill) => (
                        <OptionCard
                            key={skill}
                            selected={formData.selectedSkills.includes(skill)}
                            onClick={() => toggleSkillSelection(skill)}
                        >
                            {skill}
                        </OptionCard>
                    ))}
                </MultiSelect>
                {formData.selectedSkills.includes('Other') && (
                    <Input
                        type="text"
                        name="customSkill"
                        placeholder="Please specify your skill"
                        value={formData.customSkill}
                        onChange={handleChange}
                    />
                )}

                <Button type="submit">Save and Continue</Button>
            </Form>
        </ProfileWrapper>
    );
};

export default ProfileCreationPage;
