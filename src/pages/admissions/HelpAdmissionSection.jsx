import Button from "../../components/base/Button";
import Card from "../../components/base/Card"
import ContentHead from "../../components/base/ContentHead"

const HelpAdmissionSection = () => {
  return (
    <Card bgColor="bg-blue-50">
      <ContentHead 
        contentHead="Need Help With Your Application?"
        content="Our admissions team is here to assist you throughout the process"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">Admissions Office</h3>
          <div className="space-y-3">

            <div  className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-blue-600"></i>
              </div>
              <span className="text-gray-700">+657 XXX XXXX</span>
            </div>
            <div  className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-mail-line text-blue-600"></i>
              </div>
              <span className="text-gray-700">admissions@lbhs.edu.pg</span>
            </div>
            <div  className="flex items-center space-x-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-phone-line text-blue-600"></i>
              </div>
              <span className="text-gray-700">Monday-Friday | 8:00 AM-4:00 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Visit Our Campus</h3>
          <p className="text-gray-600 mb-4">
            Schedule a campus tour to see our facilities and meet our staff
          </p>
          <div className="space-y-3">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Schedule Campus Tour
            </Button>
           
          </div>
        </div>
      </div>
    </Card>
  )
}

export default HelpAdmissionSection;