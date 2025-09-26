import React from 'react'
import { FaMedal, FaHeart } from 'react-icons/fa';
import { GiLightBulb } from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';

function OurValues() {
  const valueCards = [
    {
        id: 1,
        logo: <FaMedal /> ,
        title: "Excellence",
        desc: "We strive for perfection in every project, ensuring the highest quality deliverables."
    },
    {
        id: 2,
        logo: <GiLightBulb />,
        title:"Innovation",
        desc:"We embrace cutting-edge technologies and creative solutions to stay ahead."
    },
    {
        id: 3,
        logo: <FaHeart />,
        title: "Passion",
        desc: "We love what we do and it shows in every project we undertake."
    },
    {
        id:4,
        logo: <MdVerified />,
        title: "Reliability",
        desc: "Our clients trust us to deliver on time and exceed expectations consistently."
    }
  ]  
  return (
    <>
    <section className='px-4 md:px-10 py-10'>
        <div className="heading text-center flex flex-col items-center justify-center mb-10">
            <h1 className='text-xl md:text-3xl font-bold text-black max-w-3xl'>
                Our Values
            </h1>
            <h3 className='text-lg font-bold text-gray-400 max-w-2xl'>
                These core values guide everything we do and shape the way we work with our clients and each other.
            </h3>
        </div>
        <div className="valueCards grid grid-cols-1 md:grid-cols-4 gap-6">
            {valueCards.map((item) => (
                <div key={item.id} className="valueCard flex flex-col items-center text-center p-6 rounded-md shadow-sm hover:shadow-md transition duration-300 bg-white hover:scale-105 cursor-pointer gap-2">
                    <div className="logo text-5xl text-blue-500 mb-2">{item.logo}</div>
                    <h4 className="title text-lg font-bold text-black mb-1">{item.title}</h4>
                    <p className="desc text-gray-600 text-md">{item.desc}</p>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default OurValues
