import React from "react";
import AdmissionsHeroSection from "./AdmissionsHeroSection";
import RateSection from "./RateSection";
import AdmissionInfoSection from "./AdmissionInfoSection";
import ApplicationProcessSection from "./ApplicationProcessSection";
import HelpAdmissionSection from "./HelpAdmissionSection";
import SuccessJourneySection from "./SuccessJourneySection";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <AdmissionsHeroSection />
      <RateSection />
      <AdmissionInfoSection />
      <ApplicationProcessSection />
      <HelpAdmissionSection />
      <SuccessJourneySection />
    </div>
  )
}

export default Admissions;