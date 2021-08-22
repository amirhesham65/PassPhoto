import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebaseAuth, firebaseFirestore } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
}

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
}

// The AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const collectionRef = firebaseFirestore.collection("users");

  const createUserWithEmailAndPassword = async (userName, email, password) => {
    try {
      const userCredentials = await firebaseAuth.createUserWithEmailAndPassword(email, password);
      await userCredentials.user.updateProfile({"displayName": userName});
      const newUser = {
        "email": userCredentials.user.email,
        "name": userName,
        "uid": userCredentials.user.uid,
        "passcode": null
      }
      await collectionRef.doc(userCredentials.user.uid).set(newUser);
      setUser(newUser);
      saveUserToLocalStorage(newUser);
      setIsAuthenticating(false);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const userCredentials = await firebaseAuth.signInWithEmailAndPassword(email, password);
      const doc = await collectionRef.doc(userCredentials.user.uid).get();
      var currentUser = null;
      if(doc.exists) {
        currentUser = doc.data();
        setUser(currentUser);
      }
      saveUserToLocalStorage(currentUser);
      setIsAuthenticating(false);
      return currentUser;
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    await firebaseAuth.signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      if (user.email) {
        setUser(getUserFromLocalStorage());
      }
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


