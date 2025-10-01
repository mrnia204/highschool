import React from "react"
import Button from "../../components/base/Button";

const ResourcesHelper = ({bgColor, remixIcon, title, content}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <i className={`${remixIcon} text-2xl text-white`}></i>
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{content}</p>
      <Button className="hover:text-blue-800 text-blue-600">
        Download PDF
      </Button>
    </div>
  )
}

export default ResourcesHelper;