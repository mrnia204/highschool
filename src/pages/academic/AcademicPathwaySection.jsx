import React from "react";
import PathwayHelper from "./PathwayHelper";


const AcademicPathwaySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Academic PathWays</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Choose your path to success with our specialized academic streams
          </p>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PathwayHelper 
            remixIcon="ri-microscope-line"
            stream="Science Stream"
            info="Prepares students for careers in medicine, engineering, and technology"
            subjects={[
              "Mathematics",
              "Biology",
              "Chemistry",
              "Physics"
            ]}
            carriers={[
              "Doctor",
              "Engineer",
              "Scientist",
              "Pharmacist",
              "Veterinarian"
            ]}
          />
          <PathwayHelper 
            remixIcon="ri-line-chart-line"
            stream="Commerce Stream"
            info="Develops business and economic understanding for future leaders"
            subjects={[
              "Mathematics B",
              "Economics",
              "Accounting",
              "Geography"
            ]}
            carriers={[
              "Accountant",
              "Economist",
              "Banker",
              "Business Manager",
              "Entrepreneur"              
            ]}
          />
           <PathwayHelper 
            remixIcon="ri-book-open-line"
            stream="Arts Stream"
            info="Cultivates critical thinking and communication skills"
            subjects={[
              "English",
              "Economics",
              "History",
              "Personal Development",
              "Geography"
            ]}
            carriers={[
              "Teacher",
              "Journalist",
              "Lawyer",
              "Social Worker",
              "Government officer",              
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default AcademicPathwaySection;