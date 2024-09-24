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
    const[loding,setLoding]=useState(true);
    const createUser = (email,password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword ( auth,email, password);
    }

    const logOut = ()=>{
        setLoding(true);
        return signOut(auth);
    }

   
useEffect(() =>{
    const unSubCribe = onAuthStateChanged(auth,  currentUser=>{
        console.log('user in the auth state',currentUser );
        setUser(currentUser)
        setLoding(false);
    });
    return () => {
        unSubCribe();
    }
 },[])

 const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loding
   
  }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;