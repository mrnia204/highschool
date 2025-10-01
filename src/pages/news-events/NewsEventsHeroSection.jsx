import React from "react";
import TitleHead from "../../components/base/TitleHead";

import bgImg from '../../assets/lbhs/Teachers_residents-2.jpg';

const NewsEventsHeroSection= () => {
  return (
    <TitleHead 
      imageUri={bgImg}
      title="News & Events"
      content="Stay updated with the latest happendings at Lumusa Baptist High School"
    /> 
  );
}

export default NewsEventsHeroSection;