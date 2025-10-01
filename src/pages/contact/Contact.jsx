import React from "react";
import ContactHeroSection from "./ContactHeroSection";
import ContactInfoSection from "./ContactInfoSection";
import DepartmentSection from "./DepartmentSection";
import OurTeamSection from "./OurTeamSection";
import FindUsSection from "./FindUsSection";

const Contact  = () => {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactInfoSection />
      <DepartmentSection />
      <OurTeamSection />
      <FindUsSection />
    </div>
  )
}

export default Contact;