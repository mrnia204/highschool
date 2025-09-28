import Card from "../../components/base/Card"
import ContentHead from '../../components/base/ContentHead';
import VoiceHelper from "./VoiceHelper";

import studentImage from '../../assets/mrPrincipal.jpg';

const StudentsVoice = () => {
  return (
    <Card bgColor="bg-blue-50">
      <ContentHead 
        contentHead="Student Voices"
        content="Hear what our students have to say about their experience at Lumusa High School"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <VoiceHelper 
          imageUri={studentImage}
          studentName="Maria Konga"
          grade="Grade 10"
          quote="Lumusa High School has given me the confidence to pursue my dreams. The teachers here really care about our success."       
        />
        <VoiceHelper 
          imageUri={studentImage}
          studentName="Peter Wambi"
          grade="Grade 9"
          quote="The sports programs here are amazing. I've learned teamwork and leadership through rugby and athletics."       
        />
        <VoiceHelper 
          imageUri={studentImage}
          studentName="Grace Temu"
          grade="Grade 10"
          quote="I love how our school celebrates our PNG culture while preparing us for the future. It's the best of both worlds."       
        />
      </div>
    </Card>
  )
}

export default StudentsVoice;