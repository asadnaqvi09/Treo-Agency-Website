import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ServicesCard from "../../../layout/ServicesCard.jsx";

const OurServices = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="font-bold text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we bring your ideas to life with cutting-edge technology
          </p>
        </motion.div>

        {/* services card container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <ServicesCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="allServiceCTA text-center mt-12"
        >
          <NavLink
            to="/services"
            className="text-white font-bold text-md px-4 py-3 rounded-lg border border-transparent 
              bg-gradient-to-r from-indigo-500 to-purple-500
              transition-all duration-300 ease-in-out 
              hover:from-indigo-400 hover:to-purple-400 
              hover:shadow-[0_4px_20px_rgba(139,92,246,0.5)] 
              hover:scale-105 cursor-pointer"
          >
            View All Services
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;