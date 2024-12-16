import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container flexSB'>
                <div className='logo'>
                <img className='logo-img' src='https://camelq.in/wp-content/uploads/2024/12/Untitled-300-x-300-px-150-x-150-px.png' alt="Camelq Logo"></img>
                  <div className='logo-text'>
                  <h1> Camelq</h1>
                  <span> Training Inst. </span>
                </div>
                </div>
                
                <div className= "soc">
                  <a href="https://www.facebook.com/people/CamelQ-Software-Solutions/61563781927395/" target="_blank" rel="noopener noreferrer">
                    <icon className='fab fa-facebook icon'></icon>
                  </a>
                  <a href="https://www.instagram.com/camelqsoftwaresolutions/?hl=en" target="_blank" rel="noopener noreferrer">
                    <icon className='fab fa-instagram icon'></icon>
                  </a>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcamel_q31616" target="_blank" rel="noopener noreferrer">
                    <icon className='fab fa-twitter icon'></icon>
                  </a>
                  <a href="https://www.youtube.com/channel/UCatU4NvAGUEZRbWhzmc-GQg" target="_blank" rel="noopener noreferrer">
                    <icon className='fab fa-youtube icon'></icon>
                  </a>
                </div>  
            </div>
        </section>
     </> 
  )
}
export default Head