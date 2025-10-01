import React from "react";
import Bgacademics from '../../assets/lbhs/campus-life-5.jpg';
import TitleHead from "../../components/base/TitleHead";

const AcademicHeroSection = () => {
  return (
    <TitleHead 
      imageUri={Bgacademics}
      title="Academic Execellence"
      content="Preparing students for success in National High schools and beyond through comprehensive education"
    />
  )
}

export default AcademicHeroSection;