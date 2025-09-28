import React from "react";
import SuccessHelper from "./SuccessHelper";

import students from '../../assets/students.jpg';

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Meet our outstanding alumi who have gone on to achieve great things
          </p>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessHelper 
            imageUri={students}
            studentName="Sarah Kila"
            year="2022"
            details="Accepted to Port Moresby National High School"
            subjects="Mathematics A, Chemistry, Biology, Physics"
          />
          <SuccessHelper
            imageUri={students}
            studentName="Michael Wambi"
            year="2023"
            details="Accepted to Port Sogeri National High School"
            subjects="Mathematics, History, Business Studies"
          />
          <SuccessHelper
            imageUri={students}
            studentName="Grace Temu"
            year="2024"
            details="Accepted to Wawin National Highschool"
            subjects="Mathematics A, Chemistry, Biology, Physics, English"
          />
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection;