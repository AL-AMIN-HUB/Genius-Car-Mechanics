import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInGoogle = () => {};
  const googleProvider = new GoogleAuthProvider();

  //   login method
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      setError(error.message);
    });

  // user log out method
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  //   user state change observed

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    // question : Why is the arrow function then unsubscribed return here?
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    error,
    signInGoogle,
    logOut,
  };
};

export default useFirebase;
