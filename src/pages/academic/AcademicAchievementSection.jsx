import React from "react";
import AcademicAchievementHelper from "./AcademicAchievementHelper";

const AcademicAchievementSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl text-gray-800 mb-4">Our Academic Achievements</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Lumusa Baptist High School consistently proces top-performing students who excel in National Examinations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AcademicAchievementHelper 
            bgColor="bg-blue-50"
            iconColor="bg-blue-600"
            number_rate="95%"
            textColor="text-blue-600"
            details="Pass Rate"
            remixIcon="ri-trophy-line"
          />
          <AcademicAchievementHelper 
            bgColor="bg-green-50"
            iconColor="bg-green-600"
            number_rate="85%"
            textColor="text-green-600"
            details="National High School Acceptance"
            remixIcon="ri-graduation-cap-line"
          />
          <AcademicAchievementHelper 
            bgColor="bg-yellow-50"
            iconColor="bg-yellow-600"
            number_rate="15"
            textColor="text-yellow-600"
            details="Top 10% Students in (2024)"
            remixIcon="ri-medal-line"
          />
           <AcademicAchievementHelper 
            bgColor="bg-purple-50"
            iconColor="bg-purple-600"
            number_rate="7"
            textColor="text-purple-600"
            details="Years of Excellence"
            remixIcon="ri-star-line"
          />
        </div>
      </div>
    </section>
  )
}

export default AcademicAchievementSection;