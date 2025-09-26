import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import HeroImg from "../../../assets/images/HeroImg.png";

function HeroSection() {
  return (
    <section className="py-8 md:py-10 px-10 text-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-12">
          
          {/* Left text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center md:text-start md:w-1/2 flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-[#87888B] font-semibold tracking-wider">
                Shaping Ideas into Reality
              </span>
              <h1 className="text-xl text-[#262626] md:text-5xl font-bold leading-tight">
                Empowering Your Vision <br />
                <span>with Cutting-Edge Technology</span>
              </h1>
            </div>

            <div className="text-[#87888B] text-base lg:text-md font-medium">
              <p>
                From Startups to Enterprises: Your Trusted Partner for all
                digital transformation needs. We deliver innovative solutions
                tailored to your business goals.
              </p>
            </div>

            <div>
              <NavLink to="/services">
                <button
                className="text-white font-bold text-lg px-4 py-2 rounded-lg 
                bg-gradient-to-r from-indigo-500 to-purple-500
                transition-all duration-300 ease-in-out 
                hover:from-indigo-400 hover:to-purple-400 
                hover:shadow-[0_4px_20px_rgba(139,92,246,0.5)] 
                hover:scale-105 cursor-pointer"
              >
                Our Services
              </button>
              </NavLink>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img
              src={HeroImg}
              alt="Hero Illustration"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;