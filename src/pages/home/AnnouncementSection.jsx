import React from "react";
import { NavLink } from "react-router-dom";

import Card from "../../components/base/Card";
import ContentHead from '../../components/base/ContentHead';

import AnnouncementHelper from "./AnnouncementHelper";
import Button from "../../components/base/Button";

const AnnouncementSection = () => {
  const announcements = [
    {
   
      date:"Dec 14, 2025",
      event:"Exam",    
      details: "Term 4 Exam Begin",  
      className: "bg-blue-100 text-blue-700"
    },
    {
      date: "Dec 20, 2025",
      event: "Holiday",    
      details: "Chrismas Holiday Break",
      className: "bg-green-100 text-green-700",      
    },
    {
      date:"Jan 29, 2026",
      event:"Registration",      
      details:"New Academic Year Registration Opens", 
      className:"bg-yellow-100 text-yellow-700",     
    }
  ];

  return (
    <Card>
      <ContentHead 
        contentHead="Important Announcements"
        content="Stay informed about upcomming events and important dates."
      />
      <div className="space-y-6">
        {announcements.map((announcement, index) => (
          <AnnouncementHelper 
            key={index}
            date={announcement.date}
            event={announcement.event}
            details={announcement.details}
            className={announcement.className}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <NavLink to='about' data-discover="true">
          <Button className="border-blue-600 border-2 text-blue-600 hover:bg-blue-600 hover:text-white text-base">View All News & Events</Button>
        </NavLink>
      </div>
        
    </Card>
  )
}

export default AnnouncementSection;