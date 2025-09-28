import Card from "../../components/base/Card";
import ContentHead from "../../components/base/ContentHead";
import RemixImgCard from '../../components/base/RemixImgCard';

const StudentActivitySection = () => {
  return (
    <Card>
      <ContentHead 
        contentHead="Out Activities"
        content="Discover the wide range of activities that enrich student life at Lumusa High School"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <RemixImgCard 
          bgColor="bg-blue-50"
          remixIcon="text-blue-600 ri-music-line"
          title="Cultural Events"
          content="Traditional dances, music performances, and cultural celebrations"
        />
        <RemixImgCard 
          bgColor="bg-green-50"
          remixIcon="text-green-600 ri-football-line"
          title="Sports"
          content="Rugby, athletics, basketball, and inter-house competitions"
        />
        <RemixImgCard 
          bgColor="bg-purple-50"
          remixIcon="text-purple-600 ri-book-open-line"
          title="Academic Clubs"
          content="Debate society, science club, and academic competitions"
        />
        <RemixImgCard 
          bgColor="bg-orange-50"
          remixIcon="text-orange-600 ri-palette-line"
          title="Arts & Crafts"
          content="Traditional PNG arts, modern crafts, and creative exhibitions"
        />

      </div>
    </Card>
  )
}

export default StudentActivitySection;