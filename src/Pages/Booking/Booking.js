import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://guarded-everglades-47114.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return (
    <div className=" text-center">
      <h2 className="text-primary">Details of: {service.Name}</h2>
      <div className="row container mt-5 mx-auto">
        <div className="col-md-6">
          <img className="img-fluid w-100" src={service.img} alt="" />
        </div>{" "}
        <div className="col-md-6 text-start">
          <p className="lead">{service.description}</p>
          <p>
            <small>Price: ${service.Price}</small>
          </p>
        </div>
      </div>
      <NavLink className="fs-5 text-muted text-decoration-none ms-3" to="/manageServices">
        <button className="btn mt-5 btn-warning">Manage Services</button>
      </NavLink>
    </div>
  );
};

export default Booking;
