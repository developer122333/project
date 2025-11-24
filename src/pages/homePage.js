import React, { } from "react";
import About from "components/about";
 
import HeroSection from "components/hero";
import ContactSection from "components/contact";
import Features from "components/whyUs";
import ServicesSection from "components/services";
import SplashScreen from "components/preloaderScreen";
 
const HomePage = () => {
   
  return (
    <>
    <SplashScreen/>
    
       <HeroSection />
       <About />
      <Features />
      <ServicesSection />
       <ContactSection />
    </>
  );
};

export default HomePage;
