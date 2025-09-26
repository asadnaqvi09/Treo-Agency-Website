import React from "react";
import { motion } from "framer-motion";
import WhyChooseUsImg from "../../../assets/images/WhyChooseUsVector.png";

function WhyChooseUs() {
  const reasons = [
    { number: "01", title: "Years of Expertise", description: "Leverage our decades of industry experience..." },
    { number: "02", title: "Innovation", description: "We leverage the latest technologies..." },
    { number: "03", title: "Customer-Centric", description: "We prioritize our clients' needs..." },
    { number: "04", title: "Scalability", description: "Our solutions are designed to grow..." },
    { number: "05", title: "Support", description: "We provide ongoing support..." },
  ];

  const firstRow = reasons.slice(0, 2);
  const secondRow = reasons.slice(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl bg-[#F8F9FA] mx-auto px-4 md:px-18 py-6 md:py-10"
    >
      <div className="heading text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Why <span className="text-blue-600">Choose Us?</span>
        </h2>
        <p className="text-[#212529] text-base text-sm">
          From Ideas to Reality: 600+ Projects Completed Globally.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          className="flex flex-col md:flex-row gap-2 w-full md:w-3/4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {firstRow.map((reason, index) => (
            <motion.div
              key={index}
              className="flex-1"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-3xl font-bold text-black mb-2">{reason.number}</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mr-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="vectorImg hidden md:block w-full md:w-1/4"
        >
          <img src={WhyChooseUsImg} alt="Why Choose Us" className="w-full h-auto object-contain" />
        </motion.div>
      </div>

      {/* second row */}
      <motion.div 
        className="flex flex-col md:flex-row gap-2 w-full mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {secondRow.map((reason, index) => (
          <motion.div
            key={index}
            className="flex-1"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-3xl font-bold text-black mb-2">{reason.number}</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mr-4">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default WhyChooseUs;