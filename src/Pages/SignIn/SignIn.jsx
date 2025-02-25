import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../provider/AuthContext';
import { useNavigate } from 'react-router';

const SignIn = () => {
    const navigate = useNavigate()
    const {user,setUser ,googleSign} = useContext(AuthContext)
    const handdleGoogleSign = ()=>{
        googleSign()
        .then(res=>{
            setUser(res.user)
            navigate('/')
        })
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96 text-white">
                <h2 className="text-2xl font-bold text-center mb-6">Welcome !</h2>

                <button onClick={handdleGoogleSign} className="w-full btn flex items-center justify-center bg-white text-black py-2 rounded-lg mb-4 shadow gap-3">
                    <FcGoogle className="text-3xl" /> Go with Google
                </button>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-700" />
                    <span className="mx-3 text-gray-400">or</span>
                    <hr className="flex-grow border-gray-700" />
                </div>
                <button
                    disabled={true}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-4"
                >
                    Create account
                </button>
            </div>
        </div>
    );
};

export default SignIn;