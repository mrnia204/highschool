import React from "react";
import { NavLink } from "react-router-dom";
import HeaderHelper from "./HeaderHelper";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink className="flex items-center space-x-3" to="/" data-discover="true">
            <div className=" w-10 h-10 md:w-15 md:h-15 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-lg">LBHS</span>
            </div>
            <div>
              <h1 className="text-sm md:text-xl text-gray-800 font-bold">Lumusa Baptist High School</h1>
              <p className="text-xs md:text-sm text-gray-600">Shaping Future Leaders</p>
            </div>
          </NavLink>
          <div className="hidden md:flex items-center space-x-4">
            <HeaderHelper link="/">Home</HeaderHelper>
            <HeaderHelper link="/about">About Us</HeaderHelper>
            <HeaderHelper link="/academics">Academics</HeaderHelper>
            <HeaderHelper link="/student-life">Student Life</HeaderHelper>
            <HeaderHelper link="/">News & Events</HeaderHelper>
            <HeaderHelper link="/about">Admissions</HeaderHelper>
            <HeaderHelper link="/">Contact Us</HeaderHelper>
          </div>
           <button className="lg:hidden p-2 cursor-pointer">
            <div className="w-6 h-6 items-center justify-center">
              <i className="ri-menu-line text-2xl"></i>
            </div>
          </button>
        </div>
      </nav>
    </header>
  ) 
}

export default  Header;