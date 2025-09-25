import React from "react";

const MissionVisionSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
          <p className="text-base md:text-lg text-gray-600">
            Guiding principles that drive our educational excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="ri-eye-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To be the premier high school in Western Highlands Province, recognized for 
              academic excellence, character development, and preparing students for success in National High Schools and beyond.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="ri-focus-2-line text-2xl text-red-800"></i>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To provide quality, holistic education that nurtures academic excellence, moral values, and leadership skills, 
              empowering our students to become responsible citizens and future leaders of Papua New Guinea.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-book-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">
                Striving for the highest standards in all we do
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-heart-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">
                Upholding honesty and moral principles
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-group-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Respect</h4>
              <p className="text-sm text-gray-600">
                Valuing diversity and trating all with dignity
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="ri-lightbulb-line text-white text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">
                Embracing creativity and forward thinking
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection;