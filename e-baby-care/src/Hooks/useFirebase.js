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
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isValid, setIsvalid] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setAuthError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError("");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

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

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password) => {
    setIsvalid(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setAuthError("");
        setIsvalid(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsvalid(false);
        setAuthError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
