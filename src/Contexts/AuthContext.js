import React from 'react';
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
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
      
        return signInWithPopup(auth,provider)
    }

    const createUserWithGitHub =(provider)=>{
        
        return signInWithPopup(auth,provider)
    }

    const createUserWithGmailPassword = (email,password)=>{
        
      return createUserWithEmailAndPassword(auth,email,password)
       
    }

    const userProfileUpdate = (updateInfo) => {
        
        return updateProfile(auth.currentUser,updateInfo)
    }

    const loginUser =(email,password)=>{
       
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe =()=>{
            onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser);
                console.log(currentUser);
                setLoader(false);
            })
        }
        return ()=>{
            unsubscribe()
        }
    },[user])

    const LogOut = () =>{
       
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
        loader
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;