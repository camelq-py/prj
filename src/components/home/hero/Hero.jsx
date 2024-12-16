import React from "react"
import { useNavigate } from "react-router-dom";
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO CamelQ' title='Get Ready for Take-off' />
            <p>Give yourself an upgrade with our inspiring online courses and join a global community of learners</p>
            <div className='button'>
              <button className='primary-btn' onClick={() => navigate('/courses')}>
                Find a Course
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
