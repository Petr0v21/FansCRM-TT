import React from "react";
import "./index.css";
import Logo from "@assets/micro-logo.png";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <img src={Logo} alt="logo" className="home-page-image" />
      <h2 className="home-page-title">FansCRM TEST TASK APP</h2>
    </div>
  );
};

export default Home;
