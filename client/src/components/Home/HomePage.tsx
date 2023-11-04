import React from "react";
import NavbarPage from "./NavbarPage";
import "../../styles/HomePage.css";
import Jumbotron from "./Jumbotron";
import LaptopSection from "./LaptopSection";
import HeaderSection from "./HeaderSection";
import Features from "./Features";
import FAQSection from "./FAQSection";

const HomePage = () => {
  return (
    <div>
      <NavbarPage />
      <Jumbotron />
      <LaptopSection />
      <HeaderSection />
      <Features />
      <FAQSection />
    </div>
  );
};

export default HomePage;
