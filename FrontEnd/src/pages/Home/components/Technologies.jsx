import React, { useState } from 'react';
import technologies from '../../../data/Technolgies';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";

function Technologies() {
  const [filter, setFilter] = useState('All');

  const technologiesName = [
    { id: 'All', name: 'All' },
    { id: 1, name: 'FrontEnd' },
    { id: 2, name: 'BackEnd' },
    { id: 3, name: 'Database' },
    { id: 4, name: 'NoCode/LowCode' },
  ];

  const filteredTechnologies = filter === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === filter);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 3 },
  };

  return (
    <section className="py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            <span className="text-blue-600">Technologies</span> We Use
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the cutting-edge technologies we use to build innovative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {technologiesName.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.name)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                filter === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="technologyCarousel w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            keyBoardControl
            containerClass="carousel-container"
            itemClass="px-2 md:px-4"
            arrows={false}
            showDots={false}
          >
            {filteredTechnologies.map(tech => (
              <motion.div
                key={tech.id}
                className="relative group flex justify-center items-center"
                style={{ height: '120px' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-xs md:text-sm rounded py-1 px-2 bottom-full mb-2 transform -translate-x-1/2 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {tech.name}
                  <div className="absolute h-2 w-2 bg-gray-800 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;