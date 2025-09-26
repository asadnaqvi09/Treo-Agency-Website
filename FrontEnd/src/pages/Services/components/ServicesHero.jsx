import React from 'react';
import serviceHero from "../../../assets/images/ServicesHero.avif";

function ServicesHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src={serviceHero}
        alt="Service Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-2xl md:text-5xl font-bold text-white max-w-3xl">
          Our Services
        </h1>
        <h3 className='text:md md:text-xl text-gray-300 max-w-3xl'>
            Comprehensive digital solutions to transform your business and drive growth in the digital age.
        </h3>
      </div>
    </section>
  );
}

export default ServicesHero;
