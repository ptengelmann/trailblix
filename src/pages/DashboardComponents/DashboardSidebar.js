import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSuitcase, faGraduationCap, faSearch, faClipboardList, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom'; // To handle navigation and current location

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--deep-blue);
    color: var(--soft-white);
    padding: 1.5rem;
    width: 250px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-y: auto;
    transition: transform 0.3s ease;
`;

const TabButton = styled.button`
    background: none;
    color: var(--soft-white);
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 0; /* No rounded corners */
    text-align: left;
    display: flex;
    align-items: center;
    width: 100%;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--bright-coral);
    }

    &.active {
        background-color: var(--bright-coral);
    }
`;

const TabIcon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const LogoutButton = styled(TabButton)`
    margin-top: auto;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 5px;
    transition: background-color 0.3s;
    width: 100%; /* Ensure it aligns with other sidebar items */

    &:hover {
        background-color: var(--bright-coral);  /* Make the profile section highlightable on hover */
    }
`;

const ProfileIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--soft-white);
    padding: 0.25rem;
    border-radius: 50%;
    width: 20px; /* Match size of other sidebar icons */
    height: 20px; /* Match size of other sidebar icons */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
    width: 20px; /* Set the profile image to fit within the icon size */
    height: 20px;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileText = styled.span`
    color: var(--soft-white);
    font-size: 1.1rem;
    margin-left: 0px;
`;

const ProfileDropdown = styled.div`
    position: absolute;
    top: 360px;
    left: 115px;  // Align dropdown to the right of the profile icon
    background-color: var(--soft-white);
    color: var(--deep-blue);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 150px;
    display: ${({ show }) => (show ? 'block' : 'none')};
`;

const ProfileOption = styled.div`
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
        background-color: var(--light-pink);
        border-radius: 5px;
    }
`;

const DashboardSidebar = () => {
    const navigate = useNavigate();  // Use this to navigate between pages
    const location = useLocation();  // Track the current location

    const [activeTab, setActiveTab] = useState('');
    const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);

    // Profile picture (can be replaced with actual user profile image)
    const profileImage = "https://www.w3schools.com/howto/img_avatar.png"; // Use a default image or upload logic here

    // Update the active tab when location changes
    useEffect(() => {
        const path = location.pathname;
        if (path.includes('career-paths')) {
            setActiveTab('career-paths');
        } else if (path.includes('learning-paths')) {
            setActiveTab('learning-paths');
        } else if (path.includes('jobs')) {
            setActiveTab('jobs');
        } else if (path.includes('progress')) {
            setActiveTab('progress');
        } else {
            setActiveTab('home');
        }
    }, [location]);

    const handleLogout = () => {
        console.log('Logged out!');
        navigate('/'); // Redirect to Landing Page after logging out
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownVisible(!isProfileDropdownVisible);
    };

    return (
        <SidebarWrapper>
            {/* Sidebar Links */}
            <TabButton onClick={() => navigate('/dashboard')} className={activeTab === 'home' ? 'active' : ''}>
                <TabIcon icon={faHome} /> Home
            </TabButton>
            <TabButton onClick={() => navigate('/dashboard/career-paths')} className={activeTab === 'career-paths' ? 'active' : ''}>
                <TabIcon icon={faSuitcase} /> Career Paths
            </TabButton>
            <TabButton onClick={() => navigate('/dashboard/learning-paths')} className={activeTab === 'learning-paths' ? 'active' : ''}>
                <TabIcon icon={faGraduationCap} /> Learning Paths
            </TabButton>
            <TabButton onClick={() => navigate('/dashboard/jobs')} className={activeTab === 'jobs' ? 'active' : ''}>
                <TabIcon icon={faSearch} /> Jobs
            </TabButton>
            <TabButton onClick={() => navigate('/dashboard/progress')} className={activeTab === 'progress' ? 'active' : ''}>
                <TabIcon icon={faClipboardList} /> Progress
            </TabButton>

            {/* Profile Icon and Dropdown */}
            <ProfileWrapper onClick={toggleProfileDropdown}>
                <ProfileIconWrapper>
                    <ProfileImage src={profileImage} alt="Profile" />
                </ProfileIconWrapper>
                <ProfileText>Profile</ProfileText>
            </ProfileWrapper>

            <ProfileDropdown show={isProfileDropdownVisible}>
                <ProfileOption onClick={() => navigate('/dashboard/profile-settings')}>Profile Settings</ProfileOption>
                <ProfileOption onClick={() => navigate('/dashboard/account-details')}>Account Details</ProfileOption>
                <ProfileOption onClick={() => navigate('/dashboard/help-support')}>Help/Support</ProfileOption>
                <ProfileOption onClick={handleLogout}>Log Out</ProfileOption>
            </ProfileDropdown>

            {/* Logout Button */}
            <LogoutButton onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </LogoutButton>
        </SidebarWrapper>
    );
};

export default DashboardSidebar;
