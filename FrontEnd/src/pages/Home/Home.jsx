import React from 'react'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import OurServices from './components/OurServices'
import Technologies from './components/Technologies'
import OurStrategy from './components/OurStrategy'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Faq from '../../layout/Faq'

function Home() {
  return (
    <>
    <HeroSection />
    <WhyChooseUs />
    <OurServices />
    <Technologies />
    <OurStrategy />
    <Portfolio />
    <Testimonial />
    <Faq />
    </>
  )
}

export default Home
