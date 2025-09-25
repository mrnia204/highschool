import React from "react";
import { NavLink } from "react-router-dom";

import BackgroundImg from '../../assets/background.jpg';


const AboutHeroSection = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${BackgroundImg})`
      }}
      ></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">About Lumusa Baptist High School </h1>
        <p className="text-lg md:text-xl lg:text-2xl">Discover out stories, vision, and commitment to excellence</p>
      </div>
    </section>
  )
};

export default AboutHeroSection;