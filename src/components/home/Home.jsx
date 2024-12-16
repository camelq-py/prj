import React from "react"
import About from "../about/About"
import Hero from "./hero/Hero"
import Courses from "../courses/Courses"
import Services from "../services/Services"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Courses />
    </>
  )
}

export default Home
