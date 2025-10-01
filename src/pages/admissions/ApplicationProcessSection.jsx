import Card from "../../components/base/Card"
import ContentHead from "../../components/base/ContentHead"
import RemixImgCard from "../../components/base/RemixImgCard"

const ApplicationProcessSection  = () => {
  const process = [
    {
      bgColor: "bg-blue-600",
      remixIcon: "ri-number-1 text-white",
      title: "Submit Application",
      content: "Complete and submit the application form with all required documents",
    },
    {
      bgColor: "bg-green-600",
      remixIcon: "ri-number-2 text-white",
      title: "Take Entrance Exam",
      content: "Attend the entrance examination for Grades 9",
    },
    {
      bgColor: "bg-purple-600",
      remixIcon: "ri-number-3 text-white",
      title: "Receive Results",
      content: "Get your admission results and complete enrollment if accepted",
    },
  ]

  return (
    <Card>
      <ContentHead 
        contentHead="Application Process"
        content="Follow these simpole steps to apply for admission"  
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {process.map((item) => (
          <RemixImgCard 
            key={item.title}
            bgColor={item.bgColor}
            remixIcon={item.remixIcon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </Card>
  )
};

export default ApplicationProcessSection;