import React from "react";

const CampusLocationSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:3xl font-bold text-gray-800 mb-4">Our Location</h2>
          <p className="text-base md:text-lg text-gray-600">
            Find us in the heart of Lumusa, Mul Baiyer Lumusa District, Western Higlands Province.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Visit Our Campus</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Located in the scenic town of Lumusa in Western Highlands Province, 
                our campus sits on 15 acres of beautifully landscaped grounds. The school is 
                easily accessible by road and is strategically positioned to serve students from Lumusa and surrounding communities.
              </p>
              <p>
                Our facilities include modern classrooms, well-equipped science laboratories, a comprehensive 
                library, sports facilities, and comfortable dormitories for boarding students. 
                The campus provides a safe, nurturing environment conducive to learning and personal growth.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0-5">
                  <i className="ri-map-pin-line text-blue-600"></i>
                </div>
                <span className="text-gray-700">Lumusa, Mul Baiyer Lumusa Distric, Western Highlands Province, Papau New Guinea</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0-5">
                  <i className="ri-time-line text-blue-600"></i>
                </div>
                <span className="text-gray-700">Office Hours: Monday - Friday, 8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-0-5">
                  <i className="ri-car-line text-blue-600"></i>
                </div>
                <span className="text-gray-700">2 hours drive from Hagen Town</span>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.739892998267!2d144.06542477474477!3d-5.532385794447809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x685bdf0008e0a01f%3A0x875d982eee577097!2sPaisa%20Field!5e1!3m2!1sen!2sus!4v1758772433024!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border: 0}}
                allowfullscreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lumusa Baptist High School"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CampusLocationSection;