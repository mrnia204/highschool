import React from "react"; 

const CampusLifeHelper = ({imageUri, title}) => {
  return (
    <div className="relative group">
      <img 
        src={imageUri} 
        alt={title}
        className="w-full h-64 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
    </div>
  )
}

export default CampusLifeHelper;