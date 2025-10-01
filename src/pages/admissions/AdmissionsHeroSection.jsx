import TitleHead from '../../components/base/TitleHead';
import Button from '../../components/base/Button';

import bgImage from '../../assets/lbhs/Teachers_residents-1.jpg';

const AdmissionsHeroSection = () => {
  return (
    <TitleHead 
      imageUri={bgImage}
      title="Join Lumusa Baptist High School"
      content="Take the first step towards your child's bright future. We welcome students who are ready to excel academically and grow as future leaders."
      gradient="from-blue-600 to-blue-900"
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-yellow-400 hover:bg-amber-500 text-white">
          Apply Today
        </Button>
         <Button className="hover:bg-white border border-gray-200 text-white hover:text-gray-600">
          Download Application Form
        </Button>
      </div>
    </TitleHead>
  )
}

export default AdmissionsHeroSection;