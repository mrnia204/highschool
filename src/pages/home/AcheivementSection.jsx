import AcheivementHelper from "./AcheivementHelper"

const AcheivementSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in education and student development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <AcheivementHelper 
            remixIcon="ri-trophy-line"
            acheivement="Top Academic Performance"
            description="Consistently sending top-performing students to National High Schools every year"
          />
            <AcheivementHelper 
            remixIcon="ri-graduation-cap-line"
            acheivement="Quality Education"
            description="Comprehensive curriculum preparing students for higher education and career success"
          />
            <AcheivementHelper 
            remixIcon="ri-team-line"
            acheivement="Strong Community"
            description="Building character and leadership skills through community engagement"
          />
            <AcheivementHelper 
            remixIcon="ri-award-line"
            acheivement="Excellence Awards"
            description="Recognized for outstanding educational standards and student achievements"
          />
        </div>
      </div>
    </section>
  )
}

export default AcheivementSection;