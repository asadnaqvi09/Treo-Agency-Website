import React from 'react';

function OurProcess() {
  const Process = [
    {
      id: 1,
      title: "Discovery",
      description: "We understand your business, goals, and target audience."
    },
    {
      id: 2,
      title: "Strategy",
      description: "We develop a comprehensive strategy tailored to your needs."
    },
    {
      id: 3,
      title: "Execution",
      description: "Our expert team brings your vision to life with precision."
    },
    {
      id: 4,
      title: "Optimization",
      description: "We continuously optimize and improve for better results."
    }
  ];

  return (
    <section className='py-12 px-4 md:px-10'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-bold text-gray-900 mb-4'>Our Process</h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          We follow a proven process to ensure every project is delivered on time and exceeds expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {Process.map((item) => (
          <div
            key={item.id}
            className="card flex flex-col items-center text-center"
          >
            <div className="index w-12 h-12 flex justify-center items-center text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mb-4 text-lg font-semibold">
              {item.id}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProcess;