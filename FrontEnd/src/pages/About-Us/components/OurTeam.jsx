import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Hamza Ali",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1623184663796-f0eb7e46d6ab?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Arslan Khalid",
    role: "App Developer",
    image: "https://plus.unsplash.com/premium_photo-1661582266427-c3054efeab65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fE93bmVyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Asad Abbas",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

function OurTeam() {
  return (
    <section className='px-4 md:px-10 py-10'>
      <div className='flex flex-col text-center items-center justify-center mb-10'>
        <h1 className='text-4xl font-bold max-w-3xl'>Meet Our Team</h1>
        <h3 className='text-xl font-semibold text-gray-400 max-w-2xl'>
          Our talented team of designers and developers work together to bring your vision to life.
        </h3>
      </div>

      <div className="TeamCards grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {teamMembers.map(member => (
          <div key={member.id} className="relative w-[20rem] h-[20rem] overflow-hidden rounded shadow-lg group">
            {/* Name and Role on Top */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/20 text-white z-10">
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-md font-medium text-gray-300">{member.role}</p>
            </div>

            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
