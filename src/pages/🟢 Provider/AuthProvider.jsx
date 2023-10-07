import { createContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  // Create user
  const createUser = (email, password) => {
   setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin
  const signIn = (email, password) => {
      setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

// sign out 
 const logOut = () => {
      setLoading(true)
      return signOut(auth)
 }
//  get the user here...
 useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            if(currentUser){
                  setUser(currentUser)
            }
            setLoading(false)
      })

      return ()=> unSubscribe
 },[]) 


  const userIfo = {
    user,
    signIn,
    logOut,
    createUser,
    loading
  };

  return (
    <AuthContext.Provider value={userIfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
