import React from 'react'
import {homeAbout} from "../../dummydata"
import Title from "../common/heading/Heading"
import Awrapper from "./Awrapper"
import "./about.css"

const AboutCard = () => {
  return (                      
    <>
        <section className='aboutHome'>
                
                    <div className='grid3'>
                        {homeAbout.map((val)=>{
                            return(
                            <div className='item flexSB'>
                               
                                <div className='text'>
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                    
                                </div>
                            </div>
                            )
                        })}
                    </div>
                
            
        </section>
        <Awrapper />
    </>
  )
}

export default AboutCard