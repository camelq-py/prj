// src/components/HomePage.js
import React from 'react';
import '../../src/styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
 
function HomePage() {
  const navigate = useNavigate();

  const handleViewCourses = () => {
    navigate('/courses')
  }
  return (
    <div className="homepage">
      <header>
        <h1 className='heading' >Welcome to the MS Technologies </h1>
        <p className='sub-heading'>Learn, Grow, and Succeed with Our Software Courses</p>
        <p className='website-description'>
          MS Technologies is a leading training institute that offers a diverse range
          of industry-relevant courses designed to equip individuals with the skills and
          knowledge required to succeed in the tech industry. The website highlights the institute’s
          comprehensive training programs, including full-stack development courses, specialized technologies,
          and essential IT skills.
        </p>
      </header>

      <div className='key-features-container'>
        <h1 className='feature-heading'>Key Features of MS Technologies</h1>
        <h2>Courses we offer</h2>
        <div className='courses-offering'>

          <div className='course-container'>
            <h1 className='course-title'>
              Python Full Stack Development
            </h1>
            <img className='course-logo' src='/images/py-logo.png' alt='Python logo' />
            <p className='course-about'>
              Learn both front-end and back-end development with Python,
              covering frameworks like Django, Flask, and other relevant technologies.
            </p>
          </div>

          <div className='course-container'>
            <h1 className='course-title'>
              Java Full Stack Development
            </h1>
            <img className='course-logo' src='/images/java-logo.webp' alt='Java Logo' />
            <p className='course-about'>
              A complete Java-based training program covering essential technologies
              like Spring Boot, Hibernate, and JavaScript for a robust back-end and front-end experience.
            </p>
          </div>

          <div className='course-container'>
            <h1 className='course-title'>
              .NET Full Stack Development
            </h1>
            <img className='course-logo' src='/images/dotnet-logo.png' alt='.Net logo' />
            <p className='course-about'>
              Training on Microsoft technologies, including ASP.NET, C#, and front-end frameworks
              such as Angular or ReactJS.
            </p>
          </div>

          <div className='course-container'>
            <h1 className='course-title'>
              ReactJS & Angular
            </h1>
            <img className='course-logo' src='/images/react-logo.png' alt='React logo' />
            <p className='course-about'>
              Focused training on popular front-end libraries and frameworks for building modern web applications.
            </p>
          </div>

          <div className='course-container'>
            <h1 className='course-title'>
              Ui/UX
            </h1>
            <img className='course-logo' src='/images/ui-ux-logo.png' alt='UI/UX logo' />
            <p className='course-about'>
              UI/UX design focuses on creating user-friendly interfaces (UI) and delivering an intuitive,
              enjoyable experience (UX) for users.
            </p>
          </div>

          <div className='course-container'>
            <h1 className='course-title'>
              Software Testing
            </h1>
            <img className='course-logo' src='/images/testing-logo.png' alt='UI/UX logo' />
            <p className='course-about'>
              A course designed to teach manual and automated testing methodologies,
              tools, and best practices for ensuring quality software.
            </p>
          </div>



          <div className='course-container'>
            <h1 className='course-title'>
              DevOps
            </h1>
            <img className='course-logo' src='/images/devops-logo.svg' alt='UI/UX logo' />
            <p className='course-about'>
              Training on the integration of development and operations, covering tools like Docker,
              Kubernetes, Jenkins, and more for efficient deployment and continuous integration.
            </p>
          </div>

          <div className='course-container'>
            <h1 className='course-title'>
              DataBase
            </h1>
            <img className='course-logo' src='/images/database-logo.png' alt='UI/UX logo' />
            <p className='course-about'>
              Training on Relational Databases like MySQL, PostgreSQL, and Oracle.
              NoSQL Databases like MongoDB, Cassandra, and Redis
            </p>
          </div>


        </div>
      </div>

      <button className='view-course-button' onClick={handleViewCourses}>
        View Courses
      </button>

      <h1 className='choose-heading'>Choose MS Technologies for Career growth</h1>


      <div className='features-container'>
        <div className='expert-container'>
        <i className="fas fa-graduation-cap fa-2x expert-icon"></i>
          <div className='expert-description'>
            <h3>Expert Instructors</h3>
            <p>Learn from experienced industry professionals who provide hands-on training,
              real-world insights, and personalized guidance to ensure your success.</p>
          </div>
        </div>

        <div className='expert-container'>
        <i className="fas fa-laptop fa-2x expert-icon"></i>
          <h3>Interactive Learning Platform</h3>

          <p>Engage with interactive content, tutorials, live sessions, and practical
            assignments that help reinforce your learning experience.</p>
        </div>

        <div className='expert-container'>
        <i className="fas fa-lightbulb fa-2x expert-icon"></i>
          <h3>Project-Based Learning</h3>
          <p>
            Our courses focus on real-world projects, helping you build a strong portfolio
            of work to showcase your skills to potential employers
          </p>
        </div>
        <div className='expert-container'>
        <i className="far fa-clock fa-2x expert-icon"></i>

          <h3>Flexible Learning Options</h3>
          <p>
            Enjoy flexible learning schedules, allowing you to
            learn at your own pace through online modules or instructor-led live sessions
          </p>
        </div>
        <div className='expert-container'>
        <i className="far fa-comments fa-2x expert-icon"></i>
          <h3>
            Career Support
          </h3>
          <p>
            Access career guidance, interview preparation,
            and job placement assistance to help you kick-start your career in tech.
          </p>
        </div>

        <div className='expert-container'>
        <i className="fas fa-check-circle fa-2x expert-icon"></i>
          <h3>
            Up-to-Date Curriculum
          </h3>
          <p>Our training materials are regularly updated to stay current with the
            latest industry trends and technologies.
          </p>
        </div>
        <div className='expert-container'>
        <i className="fas fa-award fa-2x expert-icon"></i>
          <h3>
            Certifications
          </h3>
          <p>
            Upon completion of courses, receive certifications
            that validate your skills and enhance your employability in the tech industry.
          </p>
        </div>
        <div className='expert-container'>
        <i className="fas fa-hands-helping fa-2x expert-icon"></i>
          <h3>
            Student-Centric Approach
          </h3>
          <p>
            Our platform is designed with students in mind, offering easy navigation,
            support, and resources to ensure a smooth learning journey.
          </p>
        </div>
        <div className='expert-container'>
        <i className="fas fa-user-friends fa-2x expert-icon"></i>
          <h3>
            Community Support
          </h3>
          <p>
            Join a vibrant community of learners and professionals,
            where you can ask questions, share insights, and collaborate with peers.
          </p>
        </div>

      </div>

    </div>
  );
}

export default HomePage;
