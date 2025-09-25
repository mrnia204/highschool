import React from "react";
import { NavLink } from "react-router-dom";

import AnnouncementHelper from "./AnnouncementHelper";
import Button from "../../components/base/Button";

const AnnouncementSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl text-gray-800 mb-4">Important Announcements</h2>
            <p className="text-base md:text-lg text-gray-600">
              Stay informed about upcomming events and important dates.
            </p>
          </div>

          <div className="space-y-6">
            <AnnouncementHelper 
              date="Dec 14, 2025"
              event="Exam"      
              details="Term 4 Exam Begin"   
              className="bg-red-100 text-red-700"   
            />
            <AnnouncementHelper 
              date="Dec 20, 2025"
              event="Holiday"      
              details="Chrismas Holiday Break"
              className="bg-green-100 text-green-700"      
            />
            <AnnouncementHelper 
              date="Jan 29, 2026"
              event="Registration"      
              details="New Academic Year Registration Opens" 
              className="bg-yellow-100 text-yellow-700"     
            />

          </div>

          <div className="text-center mt-8">
            <NavLink to='about' data-discover="true">
              <Button className="border-blue-600 border-2 text-blue-600 hover:bg-blue-600 hover:text-white text-base">View All News & Events</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnnouncementSection;