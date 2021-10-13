import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { img, name, expertize } = expert;
  return (
    <div id="experts" className="col col-lg-3 col-md-6 col-12">
      <div className="card h-100 border-0 shadow expert-img">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title"> {name} </h3>
          <h5 className="card-text text-danger">{expertize}</h5>
        </div>
      </div>
    </div>
  );
};

export default Expert;
