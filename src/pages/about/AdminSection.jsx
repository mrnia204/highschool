import React from 'react';
import PrincipalImg from '../../assets/mrPrincipal.jpg';
import AdminTeamsHelper from './AdminTeamsHelper';

const AdminSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">School Administration</h2>
          <p className="text-base md:text-lg text-gray-600">
            Meet our dedicated leaderhip team
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img 
                src={PrincipalImg} alt="Principal Lucky Ketano"
                className='w-64 h-80 object-cover rounded-lg mx-auto shadow-md'
              />
              <div className="text-center mt-4">
                <h3 className="text-lg md:text-xl text-gray-800 font-bold">Lucky Ketano</h3>
                <p className="text-blue-600 font-medium">Principal</p>
                <p className="text-sm text-gray-600 mt-1">B.Ed. - 15 years in education</p>
              </div>
            </div>
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
            <AdminTeamsHelper 
              teamImage={PrincipalImg}
              fullName="James Kila"  
              position="Deputy Principal"   
              division="Academic Affairs"
            />
            <AdminTeamsHelper 
              teamImage={PrincipalImg}
              fullName="Sarah Namaliu "  
              position="Academic Coordicator"   
              division="Curriculum & Assesment"
            />
            <AdminTeamsHelper 
              teamImage={PrincipalImg}
              fullName="Peter Waigani"  
              position="Student Affairs Officer"   
              division="Student Welfare & Discipline"
            />
            <AdminTeamsHelper 
              teamImage={PrincipalImg}
              fullName="Grace Mendi"  
              position="Administrative Manager"   
              division="Operations & Finance"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminSection;