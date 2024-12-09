import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for Account Details Page
const AccountDetailsWrapper = styled.section`
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

const Select = styled.select`
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid var(--gray-tone);
    width: 100%;
    font-size: 1rem;
    color: var(--deep-blue);
    margin-bottom: 1.5rem;
`;

const AccountDetails = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        connectedAccounts: ['Google', 'Facebook'],
        subscriptionPlan: 'Free Plan',
        notificationPrefs: 'Email',
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
        // Handle form submission (e.g., save changes to account details)
        console.log(formData);
    };

    return (
        <AccountDetailsWrapper>
            <SectionTitle>Account Details</SectionTitle>

            {/* Email and Password Section */}
            <SectionWrapper>
                <SubTitle>Email and Password</SubTitle>
                <form onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Update your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Change your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <Button type="submit">Save Changes</Button>
                </form>
            </SectionWrapper>

            {/* Connected Accounts Section */}
            <SectionWrapper>
                <SubTitle>Connected Accounts</SubTitle>
                <p>Linked accounts: {formData.connectedAccounts.join(', ')}</p>
                <Button type="button">Manage Linked Accounts</Button>
            </SectionWrapper>

            {/* Subscription and Billing Section */}
            <SectionWrapper>
                <SubTitle>Subscription/Billing</SubTitle>
                <p>Current Plan: {formData.subscriptionPlan}</p>
                <Button type="button">Upgrade Plan</Button>
            </SectionWrapper>

            {/* Notification Preferences Section */}
            <SectionWrapper>
                <SubTitle>Notification Preferences</SubTitle>
                <form onSubmit={handleSubmit}>
                    <Select
                        name="notificationPrefs"
                        value={formData.notificationPrefs}
                        onChange={handleChange}
                    >
                        <option value="Email">Email</option>
                        <option value="In-app">In-app</option>
                        <option value="Push">Push Notification</option>
                    </Select>
                    <Button type="submit">Save Preferences</Button>
                </form>
            </SectionWrapper>
        </AccountDetailsWrapper>
    );
};

export default AccountDetails;
