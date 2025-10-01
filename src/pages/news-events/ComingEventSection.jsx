import Card from "../../components/base/Card"
import ContentHead from "../../components/base/ContentHead"

const ComingEventSection = () => {
  const eventList = [
    {
      id: 1,
      title: "Grade 9 Orientation Week",
      content: "Welcome program for new Grade 9 students and their families.",
      date: "Feb 5th, 2026",
      time: "8:00 AM - 3:00 PM",
      location: "Main Assembly Hall",
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      content: "Individual meetings to discuss student progress and academic goals.",
      date: "Feb 24th, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Classrooms",
    },
    {
      id: 3,
      title: "Science Fair Competition",
      content: "Students present innovative science projects and experiments.",
      date: " March 3rd, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Science Laboratory",
    },
    {
      id: 4,
      title: "Independence Day Celebration",
      content: "Celebrating Papua New Guinea's independence with cultural performances",
      date: "Sept 16th, 2026",
      time: "8:00 AM - 12:00 PM",
      location: "School Grounds",
    },
  ];

  return (
    <Card>
      <ContentHead 
        contentHead="Upcoming Events"
        content="Mark your calendar for these important school events and activities"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventList.map((event) => (
          <div 
            key={event.id}
            className="bg-gray-50 rounded-lg border-l-4 border-blue-600 p-6" 
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-line text-gray-600"></i>
              </div>

            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-calendar-2-line text-gray-400"></i>
                </div>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-time-line text-gray-400"></i>
                </div>
                <span>{event.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-line text-gray-400"></i>
                </div>
                <span>{event.location}</span>
              </div>
            </div>
            <p className="text-gray-700 mt-3">{event.content}</p>
          </div>
        ))}
      </div>
      
    </Card>
  )
};

export default ComingEventSection;