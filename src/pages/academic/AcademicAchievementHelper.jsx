import React from "react";

const AcademicAchievementHelper = ({bgColor, iconColor, textColor, number_rate, details, remixIcon}) => {
  return (
    <div className={`${bgColor} text-center p-8 rounded-lg`}>
      <div className={`${iconColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`${remixIcon} text-2xl text-white`}></i>
      </div>
      <h3 className={`${textColor} text-xl md:text-3xl font-bold text-blue-600`}>{number_rate}</h3>
      <p className="text-gray-700 font-medium">{details}</p>
    </div>
  )
}

export default AcademicAchievementHelper;