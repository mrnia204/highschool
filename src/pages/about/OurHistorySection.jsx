import React from "react";
import OurHistoryHelper from "./OurHistoryHelper";
import StudentsImg from '../../assets/students.jpg';

const OurHistorySection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our History</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established in 2019, Lumusa High School was founded with a vision to provide quality 
                Higher education to the students of Lumusa and surrounding communities in Western Highlands Province. 
                In just seven years, we have grown from a small institution to one of the most respected high schools in the district.
              </p>
              <p>
                Our journey began with 150 students and 8 dedicated teachers. Today, 
                we proudly serve over 800 students with a faculty of 15 experienced educators, 
                all committed to nurturing the next generation of Papua New Guinea's leaders.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Key Milestones</h3>
              <div className="space-y-3">
                <OurHistoryHelper 
                  year="2019" 
                  details="School establishment with 150 students" 
                />
                <OurHistoryHelper 
                  year="2020" 
                  details=" First graduating class with 85% success rate" 
                />
                <OurHistoryHelper 
                  year="2021" 
                  details="New double Classroom opened" 
                />
                <OurHistoryHelper 
                  year="2022" 
                  details="Recognized as top-performing school in WHP" 
                />
                 <OurHistoryHelper 
                  year="2023" 
                  details="98% of graduates accepted to National High Schools" 
                />
                 <OurHistoryHelper 
                  year="2024" 
                  details="Students number inscreased to 500" 
                />
              </div>
            </div>
          </div>
          <div className="lg:pl-18">
            <img 
              src={StudentsImg} 
              alt="Lumusa high School history"
              className="w-full max-h-lvh object-cover rounded-l-lg shadow-lg mb-2"
            />
             <img 
              src={StudentsImg} 
              alt="Lumusa high School history"
              className="w-full max-h-lvh object-cover rounded-r-lg shadow-lg mb-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurHistorySection;