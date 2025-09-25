import React from "react";
import HeroSection from "./AboutHeroSection";
import OurHistorySection from "./OurHistorySection";
import MissionVisionSection from "./VisionMissionSection";
import AdminSection from './AdminSection';
import CampusLocationSection from "./CampusLocationSection";
import CampusLifeSection from "./CampusLifeSection";

function About() {
  return (
   <div className="min-h-screen bg-white">
    <HeroSection />
    <OurHistorySection />
    <MissionVisionSection />
    <AdminSection />
    <CampusLocationSection />
    <CampusLifeSection />
   </div>
  )
}

export default About;