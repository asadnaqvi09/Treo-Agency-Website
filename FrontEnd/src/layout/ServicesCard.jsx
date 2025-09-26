import React from "react";
import { useServices } from "../custom-hooks/useServices.js";

const OurServices = () => {
  const { services, isLoading, error } = useServices();

  const handleGetQuote = (serviceName) => {
    const email = "agency@example.com"; 
    const subject = `Quote Request for ${serviceName} Service`;
    const body = `Hi! I'm interested in your ${serviceName} service. 
    Could you please provide me with a quote for my project?
    
    Here are the details:
    Service: ${serviceName}
    Features I need: [List your required features here]
    Budget: [Specify your budget]
    Timeline: [Specify your timeline]
    Project Details: [Provide any additional project details]
    Please let me know your pricing and timeline.
    Thank you!`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (isLoading) return <div className="text-center py-12">Loading services...</div>;
  if (error) return <div className="text-center py-12 text-red-500">Error loading services</div>;

  return (
    <section className="py-10 px-4 md:px-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 text-center md:text-start rounded-md shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 min-h-[300px] flex flex-col justify-between cursor-pointer hover:bg-gray-50 hover:scale-105"
          >
            <div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-start text-gray-600 mb-6 space-y-2 h-24 overflow-hidden">
                {service.points.map((point, index) => (
                  <li className="dots-blue" key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleGetQuote(service.name)}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-auto cursor-pointer"

            >
              Get Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;