import React from "react";
import CampusMap from "../../components/base/CampusMap";
import Card from "../../components/base/Card";
import ContentHead from "../../components/base/ContentHead";

const CampusLocationSection = () => {
  return (
    <Card bgColor="bg-gray-50">
      <ContentHead 
        contentHead="Our Location"
        content="Find us in the heart of Lumusa, Mul Baiyer Lumusa District, Western Higlands Province."
      />
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

          <div className="">
            <div className="bg-white rounded-lg shadow-lg h-100">
              <CampusMap />
            </div>
          </div>
        </div>
    </Card>
  )
}

export default CampusLocationSection;