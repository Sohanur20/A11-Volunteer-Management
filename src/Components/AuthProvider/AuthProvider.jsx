/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import {

 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,


} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUsers = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}


const googleLogin = () => {
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}


const logOutUser = () => {
  setLoading(true)
  return signOut(auth)
}


/// update user profile 
const updateUserProfile = (name, photoURL) =>{
  return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photoURL })  
}


useEffect(() => {


  const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)

      if (currentUser) {
        const haveUser = {email : currentUser.email};
        
      }
  })
  return () => {
      unSubscribe()
  }
}, [])



  const userInformetion = {
    user,
    createUsers,
    signInUser,
    googleLogin,
    loading,
 
    logOutUser,
    updateUserProfile
    
  };

  return (
    <AuthContext.Provider value={userInformetion}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
