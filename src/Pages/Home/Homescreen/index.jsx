import React from "react";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Experience from "../Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Experience/>
      <ContactMe/>
      <Footer/>
    </>
  );
}
