import React from 'react';
import { Navigate } from 'react-router-dom';
import { MyAuth } from '../../context/index';

function ProtectedRoute({ children }) {
    const { user, isAuthenticated } = MyAuth();

    // Check if user is authenticated (has email and password)
    if (!isAuthenticated || !user?.email || !user?.password) {
        // Redirect to login page if not authenticated
        return <Navigate to="/" replace />;
    }

    // If authenticated, render the protected component
    return children;
}

export default ProtectedRoute;