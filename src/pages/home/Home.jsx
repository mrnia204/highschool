import AcheivementSection from "./AcheivementSection";
import AnnouncementSection from "./AnnouncementSection";
import AppealSection from "./AppealSection";
import ExploreSection from "./ExploreSection";
import HeroSection from "./HeroSection";

function Home() {
  return (
   <div className="min-h-screen">
    <HeroSection />
    <ExploreSection />
    <AcheivementSection />
    <AnnouncementSection />
    <AppealSection />
   </div>
  )
}

export default Home;