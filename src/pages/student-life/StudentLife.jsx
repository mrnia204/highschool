import React from "react"; 
import StudentLifeHeroSection from "./StudentLifeHeroSection";
import Gallery from "./GallerySection";
import StudentsVoice from "./StudentsVoiceSection";
import StudentActivitySection from "./StudentActivitySection";
import JoinCommunitySection from "./JoinCommunitySection";

const StudentLife = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <StudentLifeHeroSection />
      <Gallery />
      <StudentsVoice />
      <StudentActivitySection />
      <JoinCommunitySection />
    </main>
  )
}

export default StudentLife;