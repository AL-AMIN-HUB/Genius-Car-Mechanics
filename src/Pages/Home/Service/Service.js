import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, description, price, img } = props.service;
  return (
    <div className="service">
      <div className="img-service">
        <img src={img} alt="" />
      </div>
      <div className="service-details">
        <h3>{name}</h3>
        <h5> ${price} </h5>
        <p>{description} </p>
        <Link to={`/booking/${id}`}>
          <button className="btn btn-warning">
            <FontAwesomeIcon icon={faArrowRight} /> Book {name.toLowerCase()}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
