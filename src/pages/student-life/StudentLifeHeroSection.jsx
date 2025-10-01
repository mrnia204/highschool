import React from "react";
import TitleHead from "../../components/base/TitleHead";

import BgImage from '../../assets/lbhs/school-env-1.jpg';

const StudentLifeHeroSection = () => {
  return (
    <TitleHead 
      imageUri={BgImage}
      title="Student Life at Lumusa"
      content= "Experience the vibrant community, rich culture, and endless opportunities that make our school special"
    />
  )
}

export default StudentLifeHeroSection;