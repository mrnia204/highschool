import React from "react";
import { Subjects, CarrierOpportunity } from "./PathwaySubjects";

const PathwayHelper = ({remixIcon, stream, info, subjects, carriers}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className={`${remixIcon} text-2xl text-white`}></i>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{stream}</h3>
      <p className="text-gray-600 mb-6 text-center">{info}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 m">Core Subjects</h4>
        <div className="space-y-2 flex flex-col flex-wrap">
          <Subjects subjects={subjects} />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Carrer Opportunities:</h4>
        <CarrierOpportunity carriers={carriers} />
      </div>
    </div>
  )
}

export default PathwayHelper;