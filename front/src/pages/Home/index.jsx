import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Ticket from '../../components/Ticket'
import Courses from '../../components/Courses'
import News from '../../components/News'
import Prouds from '../../components/Prouds'
import Contact from '../../components/Contanct'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <News />
      <Ticket />
      <Prouds/>
      <Contact/>
    </>
  )
}

export default Home
