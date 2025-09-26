import React from "react";
import { NavLink } from "react-router-dom";

function ProjectCard({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((item) => (
        <div
          key={item.id}
          className="group bg-white border border-gray-100 py-6 px-6 text-start cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"

        >
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded">
            <img
              src={item.Image}
              alt={item.name}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/40 rounded opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300 cursor-pointer">
              {item.liveLink && (
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white border border-1 px-4 py-2 text-sm rounded"
                >
                  Live Preview
                </a>
              )}

              <NavLink
                to={`/portfolio/${item.id}`}
                className="text-white border border-1 px-4 py-2 text-sm rounded"
              >
                View Details
              </NavLink>
            </div>
          </div>

          <h3 className="font-bold text-xl text-black mb-4">{item.name}</h3>
          <p className="text-base text-gray-500 mb-4 leading-tight">
            {item.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.stack.map((tech, index) => (
              <span
                key={index}
                className="text-sm bg-transparent border border-gray-300 text-gray-800 px-2 py-1 rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200"
              >
                {tech.slug}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
