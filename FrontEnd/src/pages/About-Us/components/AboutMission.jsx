import React from "react";
import { IoRocketSharp, IoPeopleSharp, IoCheckmarkSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";

function AboutMission() {
  const MissionCards = [
    {
      id: 1,
      logo: <IoRocketSharp />,
      heading: "Innovation",
      paragraph: "Cutting-edge solutions for modern challenges",
    },
    {
      id: 2,
      logo: <AiOutlineGlobal />,
      heading: "Commitment",
      paragraph: "Dedication to customer success and long-term relationships",
    },
    {
      id: 3,
      logo: <IoPeopleSharp />,
      heading: "Collaboration",
      paragraph: "Building partnerships with clients and partners to drive growth",
    },
    {
      id: 4,
      logo: <IoCheckmarkSharp />,
      heading: "Excellence",
      paragraph: "Delivering high-quality work that exceeds client expectations",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row md:gap-12 items-start justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 flex flex-col md:mt-[4rem]">
          <h2 className="text-3xl font-bold text-black">Our Mission</h2>
          <p className="text-gray-500">
            To empower businesses with cutting-edge digital solutions that drive
            growth, enhance user experiences, and create lasting value. We believe in
            the power of technology to transform industries and improve lives.
          </p>
          <p className="text-gray-500">
            Our commitment goes beyond just delivering projects – we build
            long-term partnerships with our clients, ensuring their continued
            success in the digital landscape.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2">
          {MissionCards.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-6 rounded-md shadow-sm hover:shadow-md transition duration-300 bg-white hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl text-blue-500 mb-2">{item.logo}</div>
              <h3 className="text-lg font-bold text-black mb-1">
                {item.heading}
              </h3>
              <p className="text-gray-600 text-sm">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMission;
