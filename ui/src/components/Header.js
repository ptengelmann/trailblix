import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: rgba(0, 43, 91, 0.4);
    color: var(--soft-white);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
`;

const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const NavLink = styled(RouterLink)`
    color: var(--soft-white);
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: var(--bright-coral);
    }
`;

const CTAButton = styled.button`
    background-color: #ff6b6b;
    color: var(--soft-white);
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: #ff8787;
        transform: translateY(-3px);
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <RouterLink to="/">
                <img src="../assets/logo.png" alt="Trailblix Logo" style={{ height: '40px' }} />
            </RouterLink>
            <NavLinks>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/login">Login</NavLink>
                <CTAButton onClick={() => window.location.href = "/profile-creation"}>Get Started</CTAButton> {/* Redirects to profile creation page */}
            </NavLinks>
        </HeaderWrapper>
    );
};

export default Header;
