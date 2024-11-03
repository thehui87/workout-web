// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface ProtectedRouteProps {
    children: JSX.Element;
    // path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { userLoggedIn } = useSelector((state: RootState) => state.auth);

    return userLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
