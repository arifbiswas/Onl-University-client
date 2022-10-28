import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext';

const EmailVerifiedPage = () => {
    const {user} = useContext(AuthProvider)
    const navigate = useNavigate();
    if(user?.emailVerified){
        navigate('/')
    }
    return (
        <div className='flex flex-col justify-center h-[100vh] items-center text-blue-800'>
            <h1 className='lg:text-8xl text-3xl text-rose-700 my-3'>Send Email !</h1>
            <h2 className='lg:text-3xl '>Please Check Your Mail And Verify Your Email</h2>
            <h3 className='g:text-2xl'>If your Verify Your Email then <span className='lg:text-3xl text-rose-700 my-3'>Refresh !</span> this page</h3>
        </div>
    );
};

export default EmailVerifiedPage;