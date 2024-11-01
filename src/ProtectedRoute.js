// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext.js';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // If user is not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If user is authenticated, render the children components
    return children;
};

export default ProtectedRoute;
