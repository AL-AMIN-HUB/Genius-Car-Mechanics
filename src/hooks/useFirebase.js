import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    //   login method
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
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

    // question:  dependence here want .. but why don't we give?
  }, [auth]);

  // user log out method
  const logOut = () => {
    signOut(auth).then(() => {});
  };

  return {
    user,
    error,
    signInGoogle,
    logOut,
  };
};

export default useFirebase;
