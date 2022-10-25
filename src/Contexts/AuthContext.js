import React from 'react';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebaseConfig';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthProvider = createContext();

const AuthContext = ({children}) => {
    const [user,setUser] = useState();
    const[success ,setSuccess] = useState();
    const [error , setError] = useState();

    
    const createUserWithGoogle = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const createUserWithGitHub =(provider)=>{
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        const unsubscribe =()=>{
            onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser);
                console.log('user change on ',currentUser);
            })
        }
        return ()=>{
            unsubscribe()
        }
    },[])

    const LogOut = () =>{
        return signOut(auth)
    }
    const userInfo = 
    { 
        user,
        createUserWithGoogle,
        createUserWithGitHub,
        LogOut,
        success ,
        setSuccess,
        error ,
        setError,
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;