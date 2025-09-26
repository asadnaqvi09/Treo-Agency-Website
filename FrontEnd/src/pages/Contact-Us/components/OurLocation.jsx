import React from 'react';

function OurLocation() {
  return (
    <section className='py-12 px-4 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full h-[400px]'>
          <iframe  
            className='w-full h-full'
            title="Our Location"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=33.6844,73.0479&z=15&output=embed`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default OurLocation;
