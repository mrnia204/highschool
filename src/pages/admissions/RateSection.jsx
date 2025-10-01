import Card from '../../components/base/Card';
import RemixImgCard from '../../components/base/RemixImgCard';
import Counter from '../../components/base/Counter';

const RateSection = () => {
  const items = [
    {
      bgColor: "bg-blue-600",
      remixIcon: "ri-graduation-cap-line text-white",
      title: 95,
      suffix: "%",
      content: "Pass Rate"
    },
     {
      bgColor: "bg-green-600",
      remixIcon: "ri-school-line text-white",
      title: 85,
      suffix: "%",
      content: "National High School Acceptance"
    },
     {
      bgColor: "bg-purple-600",
      remixIcon: "ri-team-line text-white",
      title:450,
      suffix: "+",
      content: "Current Students"
    },
     {
      bgColor: "bg-orange-600",
      remixIcon: "ri-award-line text-white",
      title: 7,
      suffix: "+",
      content: "Years of Excellence"
    },

  ]

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto ">
        {items.map((item, index) => (
          <RemixImgCard 
            key={index}
            bgColor={item.bgColor}
            remixIcon={item.remixIcon}
            title={<Counter 
              targetNumber={item.title}
              duration={2000}
              className='text-4xl'
              suffix={item.suffix}
            />}
            content={item.content}  
          />
        ))}
      </div>
    </Card>
  )
}

export default RateSection;;