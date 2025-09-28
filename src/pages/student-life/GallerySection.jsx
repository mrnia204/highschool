import React from "react";

import Card from '../../components/base/Card';
import ContentHead from '../../components/base/ContentHead';
import Button from "../../components/base/Button";
import GalleryHelper from "./GalleryHelper";

import student from '../../assets/students.jpg';

const Gallery = () => {
  return (
    <Card>
      <ContentHead 
        contentHead="Photo Gallery"
        content="Capturing the moments that define our school community - from academic achievements to cultural celebrations"
      />
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button className="hover:bg-blue-50 border border-gray-200 bg-gray-100 focus:text-gray-200 focus:bg-blue-600">
          All Events 
        </Button>
        <Button className="hover:bg-blue-50 border border-gray-200 bg-gray-100 focus:text-gray-200 focus:bg-blue-600">
         Cultural Events
        </Button>
        <Button className="hover:bg-blue-50 border border-gray-200 bg-gray-100 focus:text-gray-200 focus:bg-blue-600">
          Sports
        </Button>
        <Button className="hover:bg-blue-50 border border-gray-200 bg-gray-100 focus:text-gray-200 focus:bg-blue-600">
          Academic
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GalleryHelper 
          imgUri={student}
          title="Cultural Festival 2024"
          content="Students showcasing traditional PNG dances and customs"        
        />
        <GalleryHelper 
          imgUri={student}
          title="Inter-House Sports Day"
          content="Annual athletics competition between school houses"        
        />
        <GalleryHelper 
          imgUri={student}
          title="Grade 10 Graduation 2023"
          content="Celebrating our graduates as they move on to National High Schools"        
        />
        <GalleryHelper 
          imgUri={student}
          title="Science Fair Competition"
          content="Celebrating our graduates as they move on to National High Schools"        
        />
        <GalleryHelper 
          imgUri={student}
          title="Grade 10 Graduation 2023"
          content="Celebrating our graduates as they move on to National High Schools"        
        />
        <GalleryHelper 
          imgUri={student}
          title="Grade 10 Graduation 2023"
          content="Celebrating our graduates as they move on to National High Schools"        
        />
        <GalleryHelper 
          imgUri={student}
          title="Grade 10 Graduation 2023"
          content="Celebrating our graduates as they move on to National High Schools"        
        />
      </div>
    </Card>
  );
};

export default Gallery;