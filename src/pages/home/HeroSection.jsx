import React from "react";
import { NavLink } from "react-router-dom";

import BackgroundImg from '../../assets/background.jpg';
import Button from '../../components/base/Button';


const HeroSection = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgb(0,0,0,0.4)), url(${BackgroundImg})`
      }}
    >
      <div className="w-full px-6 py-20">
        <div className="max-w-4xl">
          <h1 className=" text-2xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to 
            <br />
            <span className="text-yellow-400">Lumusa Baptist High School</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4">Shaping Future Leaders Since 2019</p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Established in 2019, Lumusa Baptist High School continues to shape future leaders through quality 
            education, character development, and academic excellence in the remote heart of Western Highlands Province.
          </p>
          <p className="flex flex-col sm:flex-row gap-4">
            <NavLink to='/about' data-discover="true">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Learn About Our School </Button>
            </NavLink>
            <NavLink to='/about' data-discover="true">
              <Button className="border-2 border-blue-600 hover:bg-blue-700 text-white">Admission Infomation</Button>
            </NavLink>
          </p>
        </div>
      </div>

    </section>
  )
};

export default HeroSection;