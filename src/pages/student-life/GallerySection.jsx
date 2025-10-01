import React, { useState } from "react";

import Card from '../../components/base/Card';
import ContentHead from '../../components/base/ContentHead';
import Button from "../../components/base/Button";
import GalleryHelper from "./GalleryHelper";

const Gallery = () => {
  const[active ,setActive] = useState("All Events");

  const Events = [
    "All Events",
    "Cultural Events", 
    "Sports",
    "Academic",
    "Graduation",
    "School Trips"
  ];

  const Galary = [
    {
      id: 1,
      imageUri: "https://images.unsplash.com/photo-1692666173090-02de3f2f3210?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cultural Festival 2024",
      description: "Students showcasing traditional PNG dances and customs",
      category: "Cultural Events",
    },
    {
      id: 2,
      imageUri: "https://images.unsplash.com/photo-1653285493568-b2456c775303?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Inter-House Sports Day",
      description: "Annual athletics competition between school houses",
      category: "Sports"
    },
    {
      id: 3,
      imageUri: "https://images.unsplash.com/photo-1654626570355-52fd0e82d3c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Grade 10 Graduation 2023",
      description: "Celebrating our graduates as they move on to National High Schools",
      category: "Academic"
    },
    {
      id: 4,
      imageUri: "https://images.unsplash.com/photo-1692666173090-02de3f2f3210?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Science Fair Competition",
      description: "SCelebrating our graduates as they move on to National High Schools",
      category: "Graduation",
    },
    {
      id: 5,
      imageUri: "https://images.unsplash.com/photo-1653285493568-b2456c775303?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Grade 10 Graduation 2023",
      description: "Celebrating our graduates as they move on to National High Schools",
      category: "School Trips"
    },
    {
      id: 6,
      imageUri: "https://images.unsplash.com/photo-1654626570355-52fd0e82d3c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Grade 10 Graduation 2023",
      description: "Celebrating our graduates as they move on to National High Schools",
      category: "Graduation"
    },
  ];

  const filteredGalaries = (active) === 'All Events' 
    ? Galary
    : Galary.filter(
      (event) => event.category === active
  );

  return (
    <Card>
      <ContentHead 
        contentHead="Photo Gallery"
        content="Capturing the moments that define our school community - from academic achievements to cultural celebrations"
      />
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Events.map((category) => (
          <Button 
            key={category}
            onClick={() => setActive(category)}
            className={`${active === category 
              ? "bg-blue-600 text-white" 
              : "bg-white text-gray-700  border border-gray-200 hover:bg-blue-100"
            }`}

          >
            {category}
          </Button>        ))}
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGalaries.length > 0 ? (
          filteredGalaries.map((event) => (
            <GalleryHelper 
              key={event.id}
              imgUri={event.imageUri}
              title={event.title}
              content={event.description}        
            />
          ))
        ): (
          <p className="text-gray-500 italic text-center">
            No Events listed in this category. 
          </p>
        )}
        
      </div>
    </Card>
  );
};

export default Gallery;