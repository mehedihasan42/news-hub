import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createNewUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
        })
    }

    const sendEmailVerificationCode = (user) => {
        sendEmailVerification(user)
          .then(() => console.log('Email verification sent'))
          .catch((error) => console.error('Error sending email verification:', error));
      }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log('current User',currentUser)
        setLoading(false)
    })
    return ()=>{
        return unSubscribe()
    }
   },[])

    const authInfo={
        user,
        loading,
        createNewUser,
        login,
        logOut,
        sendEmailVerificationCode,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;