import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FB_API,
  authDomain: process.env.REACT_APP_FB_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT,
  storageBucket: process.env.REACT_APP_FB_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER,
  appID: process.env.REACT_APP_FB_APP,
});

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// The AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const createUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsAuthenticating(false);
        console.log('User is created: ' + userCredentials.user.email);
      }).catch(error => {
        console.error(error);
      });
  };

  const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        setUser(userCredentials.user);
        setIsAuthenticating(false);
        console.log('User is logged: ' + userCredentials.user.email);
      }).catch(error => {
        console.error(error);
      });
  };

  const signOut = () => {
    return firebase.auth().signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
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


