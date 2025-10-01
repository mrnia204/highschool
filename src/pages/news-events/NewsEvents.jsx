import React from "react";
import NewsEventsHeroSection from "./NewsEventsHeroSection";
import SearchButtonSection from "./SearchButtonSection";
import ComingEventSection from "./ComingEventSection";


const NewsEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NewsEventsHeroSection />
      <SearchButtonSection />
      <ComingEventSection />
    </div>
  );
}

export default NewsEvents;