import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  //   delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          window.confirm("Are you sure you want to delete?");
        }
        const remaining = services.filter((service) => service._id !== id);
        setService(remaining);
      });
  };
  return (
    <div>
      <h2>Manage Services</h2>
      {services.map((service) => (
        <div className="text-center" key={service._id}>
          <h3>{service.Name}</h3>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
