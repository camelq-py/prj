import React from 'react'
import '../../src/styles/Trainers.css'

const TrainersPage = () => {
  return (
    <div className='trainers-page'>
      <h1 className='trainers-heading'>Here are the most experienced Trainers from top most companies</h1>
      <div className='trainers-container'>
        <div className='trainer-details'>
            <img className='trainer-image' src='https://png.pngtree.com/png-vector/20240125/ourlarge/pngtree-formal-dress-for-passport-photo-mens-business-suit-and-shirt-png-image_11536504.png' alt='' />
            <h3 className='trainer-name'>John</h3>
            <p className='trainer-course'>Python Fullstack Trainer</p>
        </div>
        <div className='trainer-details'>
            <img className='trainer-image' src='https://t4.ftcdn.net/jpg/07/92/37/17/360_F_792371799_SYRZRLqm9r1jK36rfF6I2CwA1VR4Ele0.jpg' alt='' />
            <h3 className='trainer-name'>Venkat</h3>
            <p className='trainer-course'>Java Fullstack Trainer</p>
        </div>
        <div className='trainer-details'>
            <img className='trainer-image' src='https://i.pinimg.com/474x/52/d6/c9/52d6c9815d604af110f7a16675b566fe.jpg' alt='' />
            <h3 className='trainer-name'>Suresh</h3>
            <p className='trainer-course'>.Net Fullstack Trainer</p>
        </div>
        <div className='trainer-details'>
            <img className='trainer-image' src='https://t4.ftcdn.net/jpg/03/78/43/25/360_F_378432516_6IlKiCLDAqSCGcfc6o8VqWhND51XqfFm.jpg' alt='' />
            <h3 className='trainer-name'>Mahendra</h3>
            <p className='trainer-course'>Testing Trainer</p>
        </div>
        <div className='trainer-details'>
            <img className='trainer-image' src='https://i.pinimg.com/736x/8c/6a/78/8c6a785483ee3e92d8163f2fac2cc567.jpg' alt='' />
            <h3 className='trainer-name'>Bhagya Lakshmi</h3>
            <p className='trainer-course'>DataBase Trainer</p>
        </div>
        <div className='trainer-details'>
            <img className='trainer-image' src='https://r2.erweima.ai/imgcompressed/img/compressed_98e525880b36d0c38fe33e8662bbcb57.webp' alt='' />
            <h3 className='trainer-name'>Ram</h3>
            <p className='trainer-course'>DevOps Trainer</p>
        </div>
        
      </div>
    </div>
  )
}

export default TrainersPage