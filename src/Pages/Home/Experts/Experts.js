import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("./ourExperts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div >
      <h2 className="text-primary text-center">Our Experts</h2>
      <div className="container mx-auto row g-4">
        {" "}
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
