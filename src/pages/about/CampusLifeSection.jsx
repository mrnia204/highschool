import React from "react";
import CampusLifeHelper from "./CampusLifeHelper";

import Card from "../../components/base/Card";
import ContentHead from "../../components/base/ContentHead";

import classroom_1 from '../../assets/lbhs/classroom-1.jpg';
import Campuslife_2 from '../../assets/lbhs/campus-life-2.jpg';
import Campuslife_3 from '../../assets/lbhs/campus-life-3.jpg';
import Campuslife_4 from '../../assets/lbhs/campus-life-4.jpg';
import Campuslife_5 from '../../assets/lbhs/campus-life-5.jpg';
import Campuslife_6 from '../../assets/lbhs/campus-life-6.jpg';

const CampusLifeSection = () => {
  const CapusLifeImg = [
    {
      id: 1,
      imageUri: classroom_1,
      description: "Morden Classrooms"
    },
    {
      id: 2,
      imageUri: Campuslife_2,
      description: "School Environment"
    },
    {
      id: 3,
      imageUri: Campuslife_3,
      description: "Science Laboratory"
    },
    {
      id: 4,
      imageUri: Campuslife_4,
      description: "School Library"
    },
    {
      id: 5,
      imageUri: Campuslife_5,
      description: "Sports Facilities"
    },
    {
      id: 6,
      imageUri: Campuslife_6,
      description: "Teachers Residents"
    },

  ]

  return (
    <Card>
      <ContentHead 
        contentHead="Campus Life"
        content="Take a glimpse of our vibrant school community" 
      /> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CapusLifeImg.map((items) => (
          <CampusLifeHelper 
            key={items.id}
            imageUri={items.imageUri}
            title={items.description}         
          />
        ))}
      </div>
    </Card>
  )
}

export default CampusLifeSection;