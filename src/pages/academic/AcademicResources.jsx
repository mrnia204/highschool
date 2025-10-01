import Card from "../../components/base/Card";
import ContentHead from "../../components/base/ContentHead";
import RemixImgCard from "../../components/base/RemixImgCard";
import ResourcesHelper from "./ResourcesHelper";

const AcademicResources = () => {
  const resources = [
    {
      bgColor: "bg-red-600",
      remixIcon: "ri-file-pdf-line",  
      title: "Academic Calendar",
      content: "2024 school year schedule and important dates",     
    },
    {
      bgColor: "bg-green-600",
      remixIcon:"ri-file-text-line",  
      title: "Curriculum Guide",
      content: "Detailed subject descriptions and requirements",     
    },
    {
      bgColor: "bg-blue-600",
      remixIcon: "ri-time-line",  
      title: "Class Timetable",
      content: "Weekly schedule for all grade levels",     
    },
    {
      bgColor: "bg-purple-600",
      remixIcon: "ri-book-line",  
      title: "Study Guides",
      content: "Exam preparation materials and tips",     
      
    }
  ]
  return (
    <Card>
      <ContentHead 
        contentHead="Academic Resources"
        content="Access important academic documents and resources"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <ResourcesHelper 
            key={index}
            bgColor={resource.bgColor}
            remixIcon={resource.remixIcon} 
            title={resource.title}
            content={resource.content}    
          />
        ))}
      </div>
    </Card>
  )
}

export default AcademicResources;