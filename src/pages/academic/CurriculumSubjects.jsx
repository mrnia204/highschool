import React from "react";

const CurriculumSubject = ({subject}) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
      <span className="text-gray-700">{subject}</span>
    </div>
  )
}

export default CurriculumSubject;