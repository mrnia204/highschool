import { NavLink } from "react-router-dom";

const ExploreSection = () => {
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
          <NavLink to='/about' className="group cursor-pointer" data-discover="true">
            <div className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                <i className="ri-information-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">About Us</h3>
              <p className="text-base text-gray-600">Learn about our history, vision, and mission</p>
            </div>
          </NavLink>
          <NavLink to='/about' className="group cursor-pointer" data-discover="true">
            <div className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                <i className="ri-book-open-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academics</h3>
              <p className="text-base text-gray-600">Explore our subjects and academic program</p>
            </div>
          </NavLink>
          <NavLink to='/about' className="group cursor-pointer" data-discover="true">
            <div className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                <i className="ri-newspaper-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">News</h3>
              <p className="text-base text-gray-600">Stay updated with latest school news</p>
            </div>
          </NavLink>
          <NavLink to='/about' className="group cursor-pointer" data-discover="true">
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-700 transition-colors">
                <i className="ri-phone-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
              <p className="text-base text-gray-600">Get in touch with our School for more information</p>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection;