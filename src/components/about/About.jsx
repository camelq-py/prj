import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container">
          <h2 className="sectionTitle">Our Mission, Vision, and Values</h2>
          <div className="missionVisionValues">
            <div className="card">
              <div className="imgWrapper">
                <img src="https://www.seekpng.com/png/full/430-4307808_our-mission-icon-png-goals-icon-png-blue.png" alt="Mission" />
              </div>
              <h3>Our Mission</h3>
              <p>To provide high-quality, industry-relevant training programs that equip individuals with the skills and confidence to succeed in today’s competitive world</p>
            </div>
            <div className="card">
              <div className="imgWrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/2985/2985863.png" alt="Vision" />
              </div>
              <h3>Our Vision</h3>
              <p>To be the leading hub of innovation and excellence, providing unparalleled training that prepares learners for the challenges of tomorrow</p>
            </div>
            <div className="card">
              <div className="imgWrapper">
                <img src="https://cdn-icons-png.flaticon.com/512/8386/8386456.png" alt="Values" />
              </div>
              <h3>Our Values</h3>
              <p>We embrace creativity and innovation, continually enhancing our training methodologies to stay ahead of the evolving demands of industries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
