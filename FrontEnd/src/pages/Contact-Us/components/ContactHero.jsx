import React from 'react'
import contactHero from '../../../assets/images/ContactHero.avif'
function ContactHero() {
  return (
    <>
    <section className='relative w-full h-[200px] md:h-[400px] overflow-hidden'>
            <img src={contactHero} alt="This is About Hero Image" className='absolute inset-0 w-full h-full object-cover z-0'/>
            <div className="overlay absolute inset-0 bg-black/40 z-10"></div>
            <div className="mainHeading relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
                <div className="heading text-2xl md:text-3xl font-bold text-white max-w-3xl">
                    Get In Touch
                </div>
                <div className="paragraph text:md md:text-xl text-gray-100 max-w-2xl">
                    Ready to start your project? Let's discuss how we can help bring your vision to life.
                </div>
            </div>
    </section>
    </>
  )
}

export default ContactHero
