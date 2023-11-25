import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../libs/Hero'
import Features from '../libs/Features'
import HowItWorks from '../libs/HowItWorks'
import Footer from '../libs/Footer'

const Home = () => {
  return (
    <div className='bg-[#f4f6f8] overflow-x-hidden'>
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default Home