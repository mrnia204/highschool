import { NavLink } from "react-router-dom";

const ExploreSection = () => {
  const explores = [
    {
      remixIcon: "ri-information-line",
      title: "About Us",
      description: "Learn about our history, vision, and mission",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      className: "bg-blue-600 group-hover:bg-blue-700",
      link: "/about"
    },
    {
      remixIcon: "ri-book-open-line",
      title: "Academics",
      description: "Stay updated with latest school news ",
      bgColor: "bg-green-50 hover:bg-green-100",
      className: "bg-green-600 group-hover:bg-Green-700",
      link: '/academics'
    },
    {
      remixIcon: "ri-newspaper-line",
      title: "News",
      description: "Explore our subjects and academic program ",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      className: "bg-purple-600 group-hover:bg-purple-700",
      link: "/news-events"
    },
    {
      remixIcon: "ri-phone-line",
      title: "Contact Us",
      description: "Get in touch with our School for more information",
      bgColor: "bg-orange-50 hover:bg-orange-100", 
      className: "bg-orange-600 group-hover:bg-orange-700",
      link: "/admission"     
    },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="px-6">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Explore Our School</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Lumusa Baptist High School a premier educational High Shool in Western Highlands Province.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {explores.map((explore, index) => (
            <NavLink to={explore.link} className="group cursor-pointer" data-discover="true" key={index}>
              <div className={`${explore.bgColor} p-6 rounded-lg transition-colors`}>
                <div className={`${explore.className} w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors`}>
                  <i className={`${explore.remixIcon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{explore.title}</h3>
                <p className="text-base text-gray-600">{explore.description}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreSection;