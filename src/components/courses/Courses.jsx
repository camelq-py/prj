import React from "react";
import "./courses.css";
import Heading from "../common/heading/Heading";

const Courses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            <div className='box'>
              <div className='img'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjQX6BfrDxn62-zsygo7WyJcaVdmn8Lbjcw&s"
                  alt=""
                />
              </div>
              <h1>UI/UX Design Courses</h1>
            </div>
            <div className='box'>
              <div className='img'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTo9CHZBrL_BSVLZt7SknJftIbIR9ZbM0LQ&s"
                  alt=""
                />
              </div>
              <h1>Python Full Stack</h1>
            </div>
            <div className='box'>
              <div className='img'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NDh_FydGBjNwTlSqGzpn_kSyPcelXibxIg&s"
                  alt=""
                />
              </div>
              <h1>DevOps with AWS</h1>
            </div>
            <div className='box'>
              <div className='img'>
                <img
                  src="https://news-cdn.moonbeam.co/Building-or-buying-a-business-application-App-Developer-Magazine_e3hrvj6f.jpg"
                  alt=""
                />
              </div>
              <h1>Mobile Applications</h1>
            </div>
            <div className='box'>
              <div className='img'>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf5u3GuLUjFahx4rx0jjXayQTXDplsA6tTVg&s"
                  alt=""
                />
              </div>
              <h1>Data Analytics and Reporting</h1>
            </div>
            <div className='box'>
              <div className='img'>
                <img
                  src="https://omnics.in/wp-content/uploads/2024/04/BitKollegen-Blog-Software-Testing.webp"
                  alt=""
                />
              </div>
              <h1>Software Testing</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
