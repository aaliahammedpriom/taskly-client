import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';

const Loading = ({ children }) => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner text-info"></span>
            </div>
        )
    }
    return children
};

export default Loading;