import React from "react";
import CampusLifeHelper from "./CampusLifeHelper";
import Campuslife from '../../assets/campuslife.jpg';

const CampusLifeSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Campus Life</h2>
          <p className="text-base md:text-lg text-gray-600">Take a glimpse of our vibrant school community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CampusLifeHelper 
            imageUri={Campuslife}
            title="Morden Classrooms"          
          />
          <CampusLifeHelper 
            imageUri={Campuslife}
            title="Science Laboratory"          
          />
          <CampusLifeHelper 
            imageUri={Campuslife}
            title="School Library"          
          />
          <CampusLifeHelper 
            imageUri={Campuslife}
            title="Sports Facilities"          
          />
           <CampusLifeHelper 
            imageUri={Campuslife}
            title="Teachers Residents"          
          />
        </div>
      </div>
    </section>
  )
}

export default CampusLifeSection;