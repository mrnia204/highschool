import React from "react";
import { NavLink } from "react-router-dom";

const HeaderHelper = ({children, link}) => {
  return (
    <NavLink 
      className="text-gray-700 hover:text-blue-600 active:text-blue-600 focus:text-blue-600 font-medium transition-colors cursor-pointer text-base"
      to={link}
      data-discover="true"
    >
      {children}
    </NavLink>
  )
}

export default HeaderHelper;