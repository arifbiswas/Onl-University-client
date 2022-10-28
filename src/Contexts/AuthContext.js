import React from 'react';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebaseConfig';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);
export const AuthProvider = createContext();

const AuthContext = ({children}) => {
    const [user,setUser] = useState();
    const [loader ,setLoader] = useState(true)

    
    const createUserWithGoogle = (provider) =>{
      setLoader(true)
        return signInWithPopup(auth,provider)
    }

    const createUserWithGitHub =(provider)=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }

    const createUserWithGmailPassword = (email,password)=>{
        setLoader(true)
      return createUserWithEmailAndPassword(auth,email,password)
       
    }

    const userProfileUpdate = (updateInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser,updateInfo)
    }

    const loginUser =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const emailVerified =()=>{
        setLoader(true)
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('auth set user',currentUser);
            if(currentUser === null || currentUser.emailVerified ){
                    setUser(currentUser);
                    
                }
                setLoader(false);
            })
            
        
        return ()=>{
            unsubscribe()
        }
    },[])

    const LogOut = () =>{
        setLoader(true)
        return signOut(auth)
    }
    const userInfo = 
    { 
        user,
        createUserWithGoogle,
        createUserWithGitHub,
        LogOut,
        createUserWithGmailPassword,
        userProfileUpdate,
        loginUser,
        setUser,
        loader,
        emailVerified,
        auth
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;