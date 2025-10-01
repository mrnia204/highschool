import React from "react";
import { NavLink } from "react-router-dom";

import BackgroundImg from '../../assets/lbhs/bg-img.jpg';
import Button from "../../components/base/Button";


const AppealSection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(30,64,174,0.8), rgba(30,64,178,0.8)), url(${BackgroundImg})`
      }}
    >
      <div className="px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl text-white font-bold mb-6">Ready to Join Our School Community?</h2>
          <p className="text-base md:text-xl text-gray-200 mb-8 leading-relaxed">
            Take the first step towards yoru child's bright future. Learn about our admission 
            process and become part of the Lumusa Baptist High School family.
          </p>
          <p className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to='/' data-discover="true">
              <Button className='bg-yellow-500 hover:bg-yellow-600 text-gray-800 sm:w-auto'>Apply for Admission</Button>
            </NavLink>
            <NavLink to='/' data-discover="true">
              <Button className='border-2 border-yellow-600 hover:border-white text-white hover:bg-white hover:text-gray-800 sm:w-auto'>Contact Us Today </Button>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AppealSection;