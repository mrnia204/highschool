import React from "react";
import Card from "../../components/base/Card";
import ContentHead from '../../components/base/ContentHead';
import RemixImgCard from "../../components/base/RemixImgCard";

const AcheivementSection = () => {
  const acheivements = [
    {
      remixIcon: "ri-graduation-cap-line",
      acheivement: "Top Academic Performance",
      description: "Consistently sending top-performing students to National High Schools every year",
    },
    {
       remixIcon: "ri-graduation-cap-line",
        acheivement: "Quality Education",
        description: "Comprehensive curriculum preparing students for higher education and career success",
    }, 
    {
      remixIcon: "ri-team-line",
      acheivement: "Strong Community",
      description: "Building character and leadership skills through community engagement",
    }, 
    {
      remixIcon: "ri-award-line",
      acheivement: "Excellence Awards",
      description: "Recognized for outstanding educational standards and student achievements",
    }
  ]

  return (
    <Card bgColor="bg-gray-50">
      <ContentHead 
        contentHead="Our Achievements"
        content="Celebrating excellence in education and student development"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {acheivements.map((acheivement, index) => (
          <RemixImgCard 
            key={index}
            bgColor="bg-blue-600 text-white"
            remixIcon={acheivement.remixIcon}
            title={acheivement.acheivement}
            content={acheivement.description}
          />
        ))}
      </div>
    </Card>
  )
}

export default AcheivementSection;