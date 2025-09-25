import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return(
    <footer className="bg-gray-800 text-white">
      <div className="p-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-15 h-13 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">LBHS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Lumusa Baptist High School</h3>
                <p className="text-sm text-gray-300">Est. 2019</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Shaping future leaders through quality education and character development in Western Highlands Province.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer" 
                  data-discover="true"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer" 
                  data-discover="true"
                >
                  About Us
                </NavLink>
              </li>
                <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer" 
                  data-discover="true"
                >
                  Academics
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer" 
                  data-discover="true"
                >
                  Admissions
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer" 
                  data-discover="true"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="items-start flex space-x-2">
                <div className="w-4 h-4 flex items-center justify-center mt-0.5">
                  <i className="ri-map-min-line text-blue-400"></i>
                </div>
                <span className="text-gray-300">Lumusa, Western Highlands Province, Papua New Guinea</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-blue-400"></i>
                </div>
                <span className="text-gray-400">(+657) XXX XXXX</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <span className="text-gray-400">infor@lumusahigh.edu.pg</span>
              </div>
            </div>
          </div>

          <div> 
            <h4 className="text-lg font-semibold mg-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
               <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
               <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-youtube-fill text-white"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-gray-700 px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center  text-xs md:text-sm text-gray-400">
          <p className="">@ 2025 Lumusa Baptist High School. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <NavLink to="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</NavLink>
            <span>|</span>
             <a href="https://mrnia-356c3.web.app/"  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Code with Christopher Nia</a>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer;