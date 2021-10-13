import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    //   login method
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   user state change observed
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    // question : Why is the arrow function then unsubscribed return here?
    return () => unsubscribed;

    // question:  dependence here want .. but why don't we give?
  }, [auth]);

  // user log out method
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    error,
    signInGoogle,
    logOut,
    isLoading,
  };
};

export default useFirebase;
