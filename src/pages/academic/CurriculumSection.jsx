import React from "react";
import CurriculumHelper from "./CurriculumHelper";

const CurriculumSection = () => {
  return (
    <section className="py-16 mask-b-to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl text-gray-800 mb-4">Curriculum Overview</h2>
          <p className="text-base md:text-lg text-gray-600 mx=w-3xl mx-auto">
            Our comprehensive curriculum follows PNG Department of 
            Education standards while preparing students for higher education
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CurriculumHelper 
            grade="Grade 09"
            subjects= {[
              "English Language",
              "Mathematics",
              "Science (Biology, Chemistry, Physics)",
              "Social Science (History, Geography)",
              "Personal Developement",
              "Arts & Crafts",
              "Physical Education",
              "Religious Education"
            ]}   
          />
          <CurriculumHelper 
            grade="Grade 10"
            subjects= {[
              "English Language",
              "Mathematics",
              "Biology",
              "Chemistry", 
              "Physics",
              "History",
              "Geography",
              "Personal Developement",
              "Physical Education",
              "Business Studies"    
            ]}   
          />
        </div>
      </div>
    </section>
  )
}

export default CurriculumSection;