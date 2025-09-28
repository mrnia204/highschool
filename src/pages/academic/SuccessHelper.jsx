import React from "react";

const SuccessHelper = ({imageUri, studentName, year, details, subjects}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUri} alt={studentName}  className="w-full h-64 object-cover object-top"/>
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{studentName}</h3>
        <p className="text-blue-600 font-semibold mb-3"> class of {year}</p>
        <p className="text-gray-700 mb-4">{details}</p>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Top Subjects</h4>
          <p className="text-sm text-gray-600">{subjects}</p>
        </div>
      </div>
    </div>
  )
}

export default SuccessHelper;