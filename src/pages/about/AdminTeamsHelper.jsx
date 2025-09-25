import React from "react";

const AdminTeamsHelper = ({ teamImage, position, fullName, division}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src={teamImage} alt={position} />
      <h4 className="text-gray-800 font-semibold">{fullName}</h4>
      <p className="text-blue-600 text-sm font-medium">{position}</p>
      <p className="text-gray-600 text-sm mt-1">{division}</p>
    </div>
  )
}

export default AdminTeamsHelper;