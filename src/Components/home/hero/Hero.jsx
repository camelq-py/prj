import React from 'react'
import "./hero.css"
import Title from "../../common/heading/Heading"
import Awrapper from '../../about/Awrapper'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='row'>
                    <Title subtitle="WELCOME TO CAMELQ" title="Best Online & Offline Training" />
                    <p>Since its founding in 2024, Camelq  has been a leader in providing cutting-edge software training, empowering students and freshers to excel in the fast-evolving tech industry. We offer comprehensive training in software development, real-time analytics, and technology consulting, combining decades of expertise with a practical, hands-on approach to learning.</p>
                    
                </div>
            </div> 
        </section>
       <div className='margin'></div> 
       <Awrapper />
    </>
  )
}

export default Hero
