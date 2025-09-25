import React from "react";

const Button = ({className, children}) => {
  return (
    <button type="button" className={`${className} text-base md:text-lg font-medium rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer w-full sm:w-auto px-3 md:px-8 py-2 md:py-4`}>
      {children}
    </button>
  )
}

export default Button;