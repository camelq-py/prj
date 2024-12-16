import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15221.529902794206!2d78.3924502!3d17.4892463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9133284cdff7%3A0x583a5c3833bd86d6!2sCamelQ%20Software%20Solutions%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1731412760197!5m2!1sen!2sin'
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from reloading the page
    alert("Your message has been sent successfully!");  // Show alert message
  };
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>H.No: 10-1-55/A, Kameshwara Rao Colony, Lingojiguda, Saroornagar.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@camelq.in</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 8121 444 670</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text' placeholder='Name' required/>
                <input type='email' placeholder='Email' required />
              </div>
              <input type='text' placeholder='Subject' required/>
              <textarea cols='30' rows='10' placeholder="Type here" required>
                
              </textarea>
              <button className='primary-btn' type="submit">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>
            <a href="https://www.facebook.com/people/CamelQ-Software-Solutions/61563781927395/" target="_blank" rel="noopener noreferrer">FACEBOOK</a> 
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcamel_q31616" target="_blank" rel="noopener noreferrer">  TWITTER </a>
            <a href="https://www.instagram.com/camelqsoftwaresolutions/?hl=en" target="_blank" rel="noopener noreferrer">  INSTAGRAM </a>
            <a href="https://www.youtube.com/channel/UCatU4NvAGUEZRbWhzmc-GQg" target="_blank" rel="noopener noreferrer">  YOUTUBE</a>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact