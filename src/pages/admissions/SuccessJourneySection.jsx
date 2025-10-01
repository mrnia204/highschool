import Button from "../../components/base/Button";
import TitleHead from "../../components/base/TitleHead"

const SuccessJourneySection = () => {
  return (
    <TitleHead
      imageUri={`https://images.unsplash.com/flagged/photo-1574305679704-747181205b5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
      title="Your Journey to Success starts Here"
      content="Join hundreds of successful graduates who started their journey at Lumusa High School. Apply today and take the first step towards your bright future."    
      gradient="from-blue-600 to-blue-700"
    >
      <Button className="text-white bg-yellow-600 hover:bg-yellow-700">
        Apply Now
      </Button>
      <Button className="text white border border-gray-200 hover:bg-white hover:text-gray-700">
        Download Brochure
      </Button>
    </TitleHead>
  )
}

export default SuccessJourneySection;