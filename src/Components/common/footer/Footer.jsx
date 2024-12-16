import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='grid'>
          <div className='box logo'>
            <h2>About CamelQ Training Inst.</h2>
            <p>CamelQ is a leading software training institute providing Software Training, Project Guidance, IT Consulting and Technology Workshops. Using our enhanced global software training delivery methodology.</p>      
          </div>
          <div className='box link'>
            <h2>Explore</h2>
            <ul>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className='social'>
          <h2> Follow Us On</h2>
          <a href="https://www.facebook.com/people/CamelQ-Software-Solutions/61563781927395/" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-facebook-f icon'></i>
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcamel_q31616" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-twitter icon'></i>
          </a>
          <a href="https://www.instagram.com/camelqsoftwaresolutions/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-instagram icon'></i>
          </a>
          <a href="https://www.youtube.com/channel/UCatU4NvAGUEZRbWhzmc-GQg" target="_blank" rel="noopener noreferrer">
            <i className='fab fa-youtube icon'></i>
          </a>
          </div>
          <div className='last'>
            <h2>Have a Questions?</h2>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                 <p>H.No: 10-1-55/A, Kameshwara Rao Colony, Lingojiguda, Saroornagar.</p>
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <p>+91 8121444670 </p>
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <p>info@camelq.in </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | This template is made with <i className='fa fa-heart'></i> by SWETHA
        </p>
      </div>
    </>
  )
}

export default Footer