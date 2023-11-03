import React from "react";
import NavbarPage from "./NavbarPage";
import "../../styles/HomePage.css";
import Jumbotron from "./Jumbotron";
import LaptopSection from "./LaptopSection";
import HeaderSection from "./HeaderSection";
import Features from "./Features";

const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <Jumbotron />
      <LaptopSection />
      <HeaderSection />
      <Features />
    </div>
  );
};

export default HomePage;
