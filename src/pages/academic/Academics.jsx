import React from "react";
import AcademicHeroSection from "./AcademicHeroSection";
import AcademicAchievementSection from "./AcademicAchievementSection";
import CurriculumSection from "./CurriculumSection";
import AcademicPathwaySection from "./AcademicPathwaySection";
import SuccessStoriesSection from "./SuccessStoriesSection";
import AcademicResources from "./AcademicResources";

const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AcademicHeroSection />
      <AcademicAchievementSection/>
      <CurriculumSection />
      <AcademicPathwaySection />
      <SuccessStoriesSection />
      <AcademicResources />
    </div>
  )
}

export default Academics;