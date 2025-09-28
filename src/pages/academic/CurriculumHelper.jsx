import React from "react"
import CurriculumSubject from "./CurriculumSubjects";

const CurriculumHelper = ({grade, subjects=[]}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-lg md:text-2xl font-bold text-blue-600 mb-6">{grade}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {subjects.map((subject, index) => (
          <CurriculumSubject key={index} subject={subject}/>
        ))}
      </div>
    </div>
  )
}

export default CurriculumHelper;