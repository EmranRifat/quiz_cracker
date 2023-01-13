import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const authContext=createContext();
const auth=getAuth(app)
const provider=new GoogleAuthProvider();

const UserContext = ({children}) => {

    const [user,setUser]=useState({ });
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIn=(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)

    }


    const signinWithGoogle=()=>{
        signInWithPopup(auth,provider);

    }

    const logOut=()=>{
       return  signOut(auth);

    }


    useEffect(()=>{
     const unsubcribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('auth state change',currentUser);
            setLoading(false);
        })
        return()=>{
            unsubcribe();
        }

    },[])


  
  
    const authInfo={user,createUser,signIn,logOut,signinWithGoogle,loading} 


    return (
        <authContext.Provider value={authInfo} >
            {children}
        </authContext.Provider>
    );
};

export default UserContext;