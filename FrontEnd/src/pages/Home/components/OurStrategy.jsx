import React from "react";
import AgileImg from "../../../assets/images/Strategy.png";

function OurStrategy() {
  return (
    <section className="py-12 px-4 md:px-18 text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="font-bold text-blue-600">Strategy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our strategic approach to delivering exceptional results
              for our clients
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-12">
          <div className="w-full text-center md:text-start md:w-1/2 flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-xl text-[#262626] md:text-3xl font-bold leading-tight">
                Our <span className="text-blue-600 ">Agile</span> Development{" "}
                <br /> Strategy
              </h1>
            </div>

            <div className="text-[#87888B] text-base lg:text-md font-medium">
              <p>
                Our Agile development strategy focuses on flexibility,
                collaboration, and customer satisfaction. By breaking projects
                into smaller iterations, we ensure quicker delivery, continuous
                improvement, and a seamless process that adapts to your business
                needs. With Agile, we prioritize transparency, team synergy, and
                delivering value at every step
              </p>
            </div>

            <div className="">
              <button
                className="text-white font-bold text-lg px-4 py-2 rounded-lg border border-transparent 
             bg-gradient-to-r from-indigo-500 to-purple-500
             transition-all duration-300 ease-in-out 
             hover:from-indigo-400 hover:to-purple-400 
             hover:shadow-[0_4px_20px_rgba(139,92,246,0.5)] 
             hover:border-purple-400 
             hover:scale-105 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={AgileImg}
              alt="Hero Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStrategy;
