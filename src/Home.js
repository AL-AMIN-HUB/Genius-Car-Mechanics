import React from "react";
import Banner from "./Pages/Home/Banner/Banner";
import Experts from "./Pages/Home/Experts/Experts";
import Services from "./Pages/Home/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
