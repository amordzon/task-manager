import React from "react";
import NavbarPage from "./NavbarPage";
import "../../styles/HomePage.css";
import Jumbotron from "./Jumbotron";
import LaptopSection from "./LaptopSection";

const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <Jumbotron />
      <LaptopSection />
    </div>
  );
};

export default HomePage;
