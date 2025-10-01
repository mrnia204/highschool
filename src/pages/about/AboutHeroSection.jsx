import React from "react";
import { NavLink } from "react-router-dom";

import BackgroundImg from '../../assets/lbhs/bg-img.jpg';
import TitleHead from "../../components/base/TitleHead";
import ContentHead from "../../components/base/ContentHead";


const AboutHeroSection = () => {
  return (
    <TitleHead 
      gradient="from-blue-400 to-blue-500"
      imageUri={BackgroundImg}
      title="About Lumusa Baptist High School"
      content="Discover out stories, vision, and commitment to excellence"
    />
  )
};

export default AboutHeroSection;