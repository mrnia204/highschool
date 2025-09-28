import Card from "../../components/base/Card";
import ContentHead from "../../components/base/ContentHead";
import ResourcesHelper from "./ResourcesHelper";

const AcademicResources = () => {
  return (
    <Card>
      <ContentHead 
        contentHead="Academic Resources"
        content="Access important academic documents and resources"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResourcesHelper 
          bgColor="bg-red-600"
          remixIcon="ri-file-pdf-line"  
          title="Academic Calendar"
          content="2024 school year schedule and important dates"     
        />
        <ResourcesHelper 
          bgColor="bg-green-600"
          remixIcon="ri-file-text-line"  
          title="Curriculum Guide"
          content="Detailed subject descriptions and requirements"     
        />
        <ResourcesHelper 
          bgColor="bg-blue-600"
          remixIcon="ri-time-line"  
          title="Class Timetable"
          content="Weekly schedule for all grade levels"     
        />
        <ResourcesHelper 
          bgColor="bg-purple-600"
          remixIcon="ri-book-line"  
          title="Study Guides"
          content="Exam preparation materials and tips"     
        />
      </div>
    </Card>
  )
}

export default AcademicResources;