import React from "react";
import ProjectCard from "../../../layout/ProjectCard";
import { Projects } from "../../../data/Projects";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Portfolio() {
  const sliceProjects = Projects.slice(0, 3);

  return (
    <section className="py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
          >
            <ProjectCard projects={sliceProjects} />
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <NavLink
            to="/portfolio"
            className="text-white font-bold text-lg px-4 py-3 rounded-lg 
             bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-in-out 
             hover:from-indigo-400 hover:to-purple-400 hover:shadow-[0_4px_20px_rgba(139,92,246,0.5)] 
             hover:border-purple-400 hover:scale-105 cursor-pointer"
          >
            View All Projects
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;