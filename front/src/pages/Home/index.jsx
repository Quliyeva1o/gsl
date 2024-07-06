import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Courses from '../../components/Courses'
import News from '../../components/News'
import Prouds from '../../components/Prouds'
import Contact from '../../components/Contanct'
import Exam from '../../components/Exam'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <News />
      <Exam />
      <Prouds />
      <Contact />
    </>
  )
}

export default Home
