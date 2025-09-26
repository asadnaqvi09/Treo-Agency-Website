import React, { useState } from 'react';
import { motion } from 'framer-motion';
import faqImg from '../assets/images/faqImg.png';


function Faq() {
  const faqData = [
    {
      question: 'What services does Treo Studios offer?',
      answer:
        'Treo Studios offers Web Development, App Development, UI/UX Design, Game Development, and IT consulting services tailored to your business needs.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'The timeline depends on the project size and complexity. Typically, small projects take 2-4 weeks, while larger projects can take 1-3 months.',
    },
    {
      question: 'Can Treo Studios handle large-scale enterprise projects?',
      answer:
        'Yes, our experienced team is equipped to handle complex enterprise-level applications with scalable architecture and robust performance.',
    },
    {
      question: 'What technologies does your team specialize in?',
      answer:
        'We specialize in React.js, Node.js, Next.js, MongoDB, MySQL, Flutter, Unity, and modern design tools like Figma and Adobe XD.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 px-4 md:px-18">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img src={faqImg} alt="FAQ Illustration" className="w-full h-auto" />
        </motion.div>

        {/* Right Side Accordion */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="border-b pb-4"
            >
              <div
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-900"
              >
                <span>{item.question}</span>
                <span className="text-blue-600 text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 text-base">{item.answer}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;