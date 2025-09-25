import React from "react";

const AnnouncementHelper = ({date, event, className, details}) => {
  return (
    <div className="bg-blue-50 border-1-4 border-blue-600 p-6 rounded-r-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{date}</span>
            <span className={`${className} text-sm px-2 py-1 rounded-full`}>{event}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{details}</h3>
        </div>
        <div className="w-6 h-6 flex items-center justify-center">
          <i className="ri-arrow-right-line text-blue-600"></i>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementHelper;