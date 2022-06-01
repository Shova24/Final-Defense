// import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const [isValid, setIsvalid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  //observe user presence
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  function signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user,
    setUser,
    isLoading,
    registerUser,
    logout,
    loginUser,
    authError,
    setAuthError,
    signInWithGoogle,
    isValid,
  };
};

export default useFirebase;
