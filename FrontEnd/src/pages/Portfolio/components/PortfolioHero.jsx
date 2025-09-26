import React from 'react'
import aboutImg from '../../../assets/images/AboutHero.jpg'

function PortfolioHero() {
  return (
    <>
    <section className='relative w-full h-[200px] md:h-[400px] overflow-hidden'>
        <img src={aboutImg} alt="This is Portfolio Hero Image" className='absolute inset-0 w-full h-full object-cover z-0'/>
        <div className="overlay absolute inset-0 bg-black/30 z-10"></div>
        <div className="mainHeading relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="heading text-2xl md:text-3xl font-bold text-white max-w-3xl">
                Portfolio
            </div>
            <div className="paragraph text:md md:text-xl text-gray-100 max-w-3xl">
                We are a passionate team of Treo's dedicated to creating exceptional digital experiences that drive business growth.
            </div>
        </div>
    </section>
    </>
  )
}

export default PortfolioHero
