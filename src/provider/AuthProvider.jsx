import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";
 export const AuthContext =  createContext(null);

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const [user, setUser] =  useState(null);

    const createUser =  (email, pass) =>{
            return createUserWithEmailAndPassword(auth , email, pass)
    }
    const loginUser =  (email, pass) =>{
            return signInWithEmailAndPassword(auth , email, pass)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
        })
        
       return () =>{
        unsubscribe()
       }

    },[])
    
    const userInfo ={
        user,
        createUser,
        loginUser
    }

    return (
        <div>
            <AuthContext.Provider value={userInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;