import Card from "../../components/base/Card";
import ContentHead from '../../components/base/ContentHead';

const DepartmentSection = () => {
  const depContact = [
    {
      title: "Administration Office",
      content: "General inquiries, school policies, and administrative matters",
      contact: [
        { icon: "ri-phone-line", name: "+675 XXX 00XX9" },
        { icon: "ri-mail-line", name: 'admin@lbhs.edu.pg'},
        { icon: "ri-time-line", name: "Monday - Friday: 8:00 AP - 4:00 PM"},
      ]
    },
    {
      title: "Addmissions Office",
      content: "Student enrollment, application process, and admission requirements",
      contact: [
        { icon: "ri-phone-line", name: "+675 XXX 00XX9" },
        { icon: "ri-mail-line", name: 'admission@lbhs.edu.pg'},
        { icon: "ri-time-line", name: "Monday - Friday: 8:00 AP - 4:00 PM"},
      ]
    },
    {
      title: "Academic Affairs",
      content: "Curriculum, academic programs, and student academic support",
      contact: [
        { icon: "ri-phone-line", name: "+675 XXX 00XX9" },
        { icon: "ri-mail-line", name: 'academic@lbhs.edu.pg'},
        { icon: "ri-time-line", name: "Monday - Friday: 8:00 AP - 4:00 PM"},
      ]
    },
    {
      title: "Student Services",
      content: "Student welfare, counseling, and extracurricular activities",
      contact: [
        { icon: "ri-phone-line", name: "+675 XXX 00XX9" },
        { icon: "ri-mail-line", name: 'studens@lbhs.edu.pg'},
        { icon: "ri-time-line", name: "Monday - Friday: 8:00 AP - 4:00 PM"},
      ]
    }
  ];

  return (
    <Card>
      <ContentHead 
        contentHead="Our Departments"
        content="Each department is dedicated to providing excellent service and support to our students and families."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {depContact.map((dep, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-gradient-to-b from-gray-100 to-blue-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{dep.title}</h3>
            <p className="text-gray-600 mb-4 text-base">{dep.content}</p>
            <div className="space-y-2 text-sm">

              {dep.contact.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={`${item.icon} text-blue-600`}></i>
                  </div>
                  <span className="text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DepartmentSection;