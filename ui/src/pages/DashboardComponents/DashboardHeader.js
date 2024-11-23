import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const UserName = styled.h1`
    font-size: 2rem;
    color: var(--soft-white);
    margin-right: 1rem;
`;

const ProfilePic = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid var(--deep-blue);
    transition: background-color 0.3s;
    margin-right: 1rem;

    svg {
        color: var(--deep-blue);
        transition: color 0.3s;
    }

    &:hover {
        background-color: #FF6B6B;
    }
`;

const NotificationIcon = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    color: var(--deep-blue);
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #FF6B6B;
    }
`;

const DashboardHeader = ({ userName, toggleDropdown }) => {
    return (
        <UserProfile>
            <UserName>Welcome, {userName}!</UserName>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ProfilePic onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faUserCircle} size="lg" />
                </ProfilePic>
                <NotificationIcon icon={faBell} />
            </div>
        </UserProfile>
    );
};

export default DashboardHeader;
