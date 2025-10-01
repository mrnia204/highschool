import React from 'react';
import Card from '../../components/base/Card';
import ContentHead from '../../components/base/ContentHead'; 

import AdminTeamsHelper from './AdminTeamsHelper';

import imgPrincipal from '../../assets/lbhs/principal.jpg';

const AdminSection = () => {
  const adminTeam = [
    {
      id: 1,
      fullName: "James Kila",
      position: "Deputy Principal",
      division: "Academic Affairs",
      description: "10 years in Education",
      imgUri: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      fullName: "Lucky Ketano",
      position: "Principal",
      division: "Lumusa High School",
      description: "1B.Ed - 15 years in Education",
      imgUri: imgPrincipal,
    },
    {
      id: 3,
      fullName: "James Kila",
      position: "Deputy Principal",
      division: "Academic Affairs",
      description: "10 years in Education",
      imgUri: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      id: 4,
      fullName: "James Kila",
      position: "Deputy Principal",
      division: "Academic Affairs",
      description: "10 years in Education",
      imgUri: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      fullName: "James Kila",
      position: "Deputy Principal",
      division: "Academic Affairs",
      description: "10 years in Education",
      imgUri: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]; 

  const principal = adminTeam.filter(member => member.position === "Principal");

  return (
    <Card>
      <ContentHead 
        contentHead= "School Administration"
        content="Meet our dedicated leaderhip team"
      />    
      <div className="bg-white rounded-lg shadow-lg mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {principal.map((detail) => (
            <div className="lg:col-span-1" key={detail.id}>
              <img 
                src={detail.imgUri} alt={detail.fullName}
                className='w-64 h-80 object-cover rounded-lg mx-auto shadow-md'
              />
              <div className="text-center mt-4">
                <h3 className="text-lg md:text-xl text-gray-800 font-bold">{detail.fullName}</h3>
                <p className="text-blue-600 font-medium">{detail.division}</p>
                <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
              </div>
            </div>
          ))}
          <div className="lg:col-span-2">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Principal's Welcome Message</h3>
            <div className="space0y-4 text-gray-600 leading-relaxed">
              <p>
                "Welcome to Lumusa High School, where excellence meets opportunity. As Principal, 
                I am honored to lead an institution that has consistently demonstrated its commitment to 
                academic excellence and character development since our establishment in 2019."
              </p>
              <p>
                "Our dedicated team of educators works tirelessly to ensure that every student receives a 
                well-rounded education that prepares them not just for National High Schools, but for life itself. 
                We believe that education is the key to unlocking potential and creating positive change in our communities."
              </p>
              <p>
                "At Lumusa High School, we don't just teach subjects; we nurture future leaders, innovators, 
                and responsible citizens who will contribute meaningfully to 
                Papua New Guinea's development. Together, we are shaping the future, one student at a time."
              </p>
            </div>
            <div className="mt-6">
              <p className="text-gray-800 font-medium">Lucky Ketano, Mr.</p>
              <p className="text-blue-600">Principal, Lumusa Baptist High School</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center">Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminTeam.map((team) => (
            <AdminTeamsHelper 
              key={team.id}
              teamImage={team.imgUri}
              fullName={team.fullName} 
              position={team.position}  
              division={team.division}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default AdminSection;