import React from "react";
import { NavLink } from "react-router-dom";

const NotFounds = () => {
  return (
    <div className="bg-light py-5 text-center">
      <img
        className="d-block mx-auto mt-5 img-fluid"
        src="https://www.seekpng.com/png/detail/825-8253740_404-graphic-sorry-page-not-found.png"
        alt=""
      />
      <NavLink className="fs-4 btn btn-outline-dark mt-5" to="/home">
        Go Back Home
      </NavLink>
    </div>
  );
};

export default NotFounds;
