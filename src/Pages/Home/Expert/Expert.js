import React from "react";
import "./Expert.css";

const Expert = ({ expert }) => {
  const { img, name, expertize } = expert;
  return (
    <div id="experts" class="col col-lg-3 col-md-6 col-12">
      <div class="card h-100 border-0 shadow expert-img">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title"> {name} </h3>
          <h5 class="card-text text-danger">{expertize}</h5>
        </div>
      </div>
    </div>
  );
};

export default Expert;
