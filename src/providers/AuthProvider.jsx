import { createContext, useEffect, useState } from "react";
import app from './../firebase.config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Create AuthContext
export const AuthContext = createContext(null)

// Initialize Firebase Auth

const auth = getAuth(app);

// AuthProvider Component
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword ( auth,email, password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

   
useEffect(() =>{
    const unSubCribe = onAuthStateChanged(auth,  currentUser=>{
        console.log('user in the auth state',currentUser );
        setUser(currentUser)
    });
    return () => {
        unSubCribe();
    }
 },[])

 const authInfo = {
    user,
    createUser,
    signIn,
    logOut
   
  }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;