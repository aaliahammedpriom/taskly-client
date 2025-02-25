import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);
    const [isDark,  setIsDark] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [category, setCategory] = useState('')
    const provider = new GoogleAuthProvider();
    const googleSign = ()=>{
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            
        })
        return () => {
            unSubscribe()

        }
    }, [])
    const authInfo = {
        user,
        setUser,
        category, 
        setCategory,
        isDark,  
        setIsDark,
        showForm, 
        setShowForm,
        loading,
        googleSign
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;