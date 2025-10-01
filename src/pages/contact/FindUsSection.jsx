import CampusMap from "../../components/base/CampusMap";
import Card from "../../components/base/Card"
import ContentHead from "../../components/base/ContentHead";
import RemixImgCard from "../../components/base/RemixImgCard";

const FindUsSection = () => {
  const findUs = [
    {
      title: "Address",
      content: "Lumusa, Western Highlands Province, Papua New Guinea ",
      bgColor: "bg-blue-600",
      remixIcon: "ri-map-pin-line text-white"

    },
    {
      title: "Transportation",
      content: "Accessible by road from Mount Hagen and surrounding areas",
      bgColor: "bg-green-600",
      remixIcon: "ri-car-line text-white"
    },
    {
      title: "Visiting Hours",
      content: "Monday - Friday: 8:00 AM - 4:00 PM",
      bgColor: "bg-purple-600",
      remixIcon: "ri-time-line text-white"
    },
  ]
  return (
    <Card bgColor="bg-gray-50">
      <ContentHead 
        contentHead="Find Us"
        content="Located in the beautiful Western Highlands Province of Papua New Guinea."      
      />
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="aspect-video">
          <CampusMap />
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {findUs.map((item, i) => (
              <RemixImgCard 
                key={i}
                bgColor={item.bgColor}
                title={item.title}
                content={item.content}
                remixIcon={item.remixIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default FindUsSection;