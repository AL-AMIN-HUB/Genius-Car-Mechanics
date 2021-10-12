import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, description, price, img } = props.service;
  return (
    <div className="service">
      <div className="img-service">
        <img src={img} alt="" />
      </div>
      <div className="service-details">
        <h3>{name}</h3>
        <h5> ${price} </h5>
        <p>{description} </p>
      </div>
    </div>
  );
};

export default Service;
