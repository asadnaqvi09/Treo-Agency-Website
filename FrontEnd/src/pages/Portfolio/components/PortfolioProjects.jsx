import React, { useState } from 'react'
import ProjectCard from '../../../layout/ProjectCard';
import { Projects } from '../../../data/Projects';

function PortfolioProjects() {
  const [Filter, setFilter] = useState("All");

  const ServicesName = [
    { id: 0, name: "All" },
    { id: 1, name: "Web Development" },
    { id: 2, name: "App Development" },
    { id: 3, name: "UI/UX Design" },
    { id: 4, name: "Social Media Marketing" },
  ];

  // ✅ Correct filtering based on project category
  const filteredProjects = Filter === "All"
    ? Projects
    : Projects.filter(project => project.category === Filter);

  return (
    <>
      <section className='px-4 md:px-10 py-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
              <span className='text-blue-600'>Projects</span> We Have Done
            </h2>
            <p className='text-sm md:text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore the projects we have done
            </p>
          </div>

          {/* Filter Buttons */}
          <div className='flex flex-wrap justify-center gap-2 md:gap-4 mb-6'>
            {ServicesName.map(service => (
              <button
                key={service.id}
                onClick={() => setFilter(service.name)}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 cursor-pointer ${
                  Filter === service.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Filtered Projects Grid */}
          <ProjectCard projects={filteredProjects} />
        </div>
      </section>
    </>
  )
}

export default PortfolioProjects;
