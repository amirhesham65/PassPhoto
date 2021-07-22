import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebaseAuth } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// The AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const createUserWithEmailAndPassword = (email, password) => {
    return firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsAuthenticating(false);
        console.log('User is created: ' + userCredentials.user.email);
      }).catch(error => {
        console.error(error);
      });
  };

  const signIn = (email, password) => {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsAuthenticating(false);
        console.log('User is logged: ' + userCredentials.user.email);
      }).catch(error => {
        console.error(error);
      });
  };

  const signOut = () => {
    return firebaseAuth.signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return unsubscribe;

  }, []);

  const values = {
    user,
    isAuthenticating,
    createUserWithEmailAndPassword,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};


