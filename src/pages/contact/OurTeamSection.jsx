import Card from "../../components/base/Card"
import ContentHead from "../../components/base/ContentHead"

const OurTeamSection = () => {
  const ourTeam = [
    {
      imgUri: "https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mr.James Kila",
      position: "Principal",
      department: 'Adminstration',
      contact: [
        {icon: 'ri-mail-line', con: "prinicipal@lbhs.edu.pg"},
        {icon: 'ri-phone-line', con: "+675 XXX XXXX"},
      ]
    },
      {
      imgUri: "https://plus.unsplash.com/premium_photo-1670884443304-24ed536d8da3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mrs. Love Bitter",
      position: "Academic",
      department: 'Adminstration',
      contact: [
        {icon: 'ri-mail-line', con: "prinicipal@lbhs.edu.pg"},
        {icon: 'ri-phone-line', con: "+675 XXX XXXX"},
      ]
    },
      {
      imgUri: "https://plus.unsplash.com/premium_photo-1661266851970-7f2bf75fdc40?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Miss. Joyce Paul",
      position: "Admin Officer",
      department: 'Adminstration',
      contact: [
        {icon: 'ri-mail-line', con: "prinicipal@lbhs.edu.pg"},
        {icon: 'ri-phone-line', con: "+675 XXX XXXX"},
      ]
    },
     {
      imgUri: "https://images.unsplash.com/photo-1700631102134-9aef0b7fe818?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mr.James Kila",
      position: "Principal",
      department: 'Adminstration',
      contact: [
        {icon: 'ri-mail-line', con: "prinicipal@lbhs.edu.pg"},
        {icon: 'ri-phone-line', con: "+675 XXX XXXX"},
      ]
    },
      {
      imgUri: "https://plus.unsplash.com/premium_photo-1670884443304-24ed536d8da3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mrs. Love Bitter",
      position: "Academic",
      department: 'Adminstration',
      contact: [
        {icon: 'ri-mail-line', con: "prinicipal@lbhs.edu.pg"},
        {icon: 'ri-phone-line', con: "+675 XXX XXXX"},
      ]
    },
      {
      imgUri: "https://plus.unsplash.com/premium_photo-1661266851970-7f2bf75fdc40?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Miss. Joyce Paul",
      position: "Admin Officer",
      department: 'Adminstration',
      contact: [
        {icon: 'ri-mail-line', con: "prinicipal@lbhs.edu.pg"},
        {icon: 'ri-phone-line', con: "+675 XXX XXXX"},
      ]
    },
 
  ]
  return (
    <Card>
      <ContentHead 
        contentHead="Meet Our Team"
        content="Our dedicated staf members are here to support yoru educational journey and answer your questions."      
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ourTeam.map((staff, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-md active:shadow-md focus:shadow-md">
            <img src={staff.imgUri} alt={staff.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-top"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{staff.name}</h3>
            <p className="text-blue-600 font-medium mb-1">{staff.position}</p>
            <p className="text-gray-600 text-sm mb-4">{staff.department}</p>

            <div className="space-y-2 text-sm">
              {staff.contact.map((item, i) => (
              <div key={i} className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className={`${item.icon} text-blue-600`}></i>
                </div>
                <span className="text-gray-700">{item.con}</span>
              </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default OurTeamSection;