import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import SignIn from '../SignIn/SignIn';
import Loading from '../../components/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner text-info text-5xl"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    else return <SignIn></SignIn>
};

export default PrivateRoutes;