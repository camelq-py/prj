import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>CamelQ Software solutions</h1>

            <div className='box last'>
              <ul>
                <li>
                  <i className='fa fa-map'></i>
                  13th floor, Manjeera Trinity, KPHB, Hyderabad
                </li>
                <li>
                  <i className='fa fa-phone-alt'></i>
                  +91 8121444692
                </li>
                <li>
                  <i className='fa fa-paper-plane'></i>
                  info@camelq.in
                </li>
              </ul>
              <p>Connect with Us</p>
              <a href="https://www.facebook.com/people/CamelQ-Software-Solutions/61563781927395/"><i className='fab fa-facebook-f icon'></i></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcamel_q31616"><i className='fab fa-twitter icon'></i></a>
              <a href="https://www.instagram.com/camelqsoftwaresolutions/?hl=en"><i className='fab fa-instagram icon'></i></a>
              <a href="https://www.youtube.com/channel/UCatU4NvAGUEZRbWhzmc-GQg"><i className='fab fa-youtube icon'></i></a>
              <a href="https://www.linkedin.com/in/camelq-software-solutions-945baa317/"><i className='fab fa-linkedin icon'></i></a>
              <a href="https://web.telegram.org/k/#/im?p=@simplilearnupdates"><i className='fab fa-telegram icon'></i></a>
            </div>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <p>
          <img src="https://camelq.in/wp-content/uploads/2024/07/logo-1-300x271.png" alt="camelq logo" /> Copyright ©2024 All rights reserved | Powered by Camelq Software Solutions Pvt Ltd.
        </p>
      </div>
    </>
  )
}

export default Footer
