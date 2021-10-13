import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInGoogle } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInGoogle} className="btn btn-warning">
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
