import React from 'react'
import './interview.css'
import {homeInterview} from "../../dummydata"

const Interview = () => {
  return (
    <div className="interviewHome">
    <div className='grid3'>
        {homeInterview.map((val)=>{
            return(
                <div className='item flexSB'>
                    <div className='text'>
                    <h2>{val.title}</h2>
                        
                                    
                    </div>
                </div>
            )
        })}
    </div>
  </div>
  )
}

export default Interview

/*<h2>INTERVIEW QUESTIONS</h2>
    <ul> 
      <li>DevOps Interview Questions</li>
      <li>AngularJS Interview Questions</li>
      <li>Java Interview Questions</li>
      <li>HTML Interview Questions</li>
      <li>JavaScript Interview Questions</li>
      <li>Advanced Java Interview Questions</li>
      <li>HTML5 and CSS Interview Questions</li>
    </ul>*/