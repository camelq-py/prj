import React from 'react'
import '../../src/styles/PythonCourse.css'
import { Link } from 'react-router-dom'


const PythonCourse = () => {
  return (
    <div className='courses-container'>

      <h1>PYTHON TRAINING</h1>
      <div className='why-course-container'>
        <div className='why-course-content'>
          <h2>Why Python?</h2>
          <p>
            Python is beginner-friendly with simple, readable syntax.
          </p>
          <p>
            It is in high demand across industries, offering great job opportunities.
          </p>
          <p>
            Python has a vast ecosystem of libraries for various fields like web development, data science, and automation.
          </p>
          <p>
            It is versatile, supporting applications in web development, machine learning, AI, scripting, and more.
          </p>
        </div>
        <img className='why-course-image' src='/images/py-course.png' alt='' />
      </div>
      <p>
        Our Python training at MS Technologies is designed to help you become proficient in one of the most
        in-demand and versatile programming languages. Python is a high-level, object-oriented, and interpreted
        language known for its simplicity and ease of use. Whether you're building robust web applications or
        prototyping ideas, Python’s clear syntax and extensive libraries make it a great choice for developers
        at all levels.
      </p>

      <h1 className='course-goals-heading'>
        Course Goals for Python Fullstack
      </h1>

      <div className='course-objective-container'>
        <div>
          <ol className='course-objective'>
            <li className='course-objective-heading'>
              <strong>Master Python Fundamentals</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Gain a solid foundation in Python programming, covering core concepts like variables, data types, control flow, functions, and modules.</li>
              <li className='course-objective-point'>Develop a strong understanding of object-oriented programming (OOP), including concepts like classes, objects, inheritance, and polymorphism.</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Learn Python for Web Development</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Build expertise in using Python for web applications with frameworks such as <strong>Flask</strong> or <strong>Django.</strong></li>
              <li className='course-objective-point'>Learn to create dynamic websites and applications that can handle HTTP requests, routing, and templating.</li>
            </ul>
            <li className='course-objective-heading'><strong>Database Integration</strong></li>
            <ul>
              <li className='course-objective-point'>Understand how to work with databases, including the use of <strong>SQL</strong> and <strong>ORM</strong> (Object-Relational Mapping) tools like <strong>SQLAlchemy.</strong></li>
              <li className='course-objective-point'>Learn how to perform basic database operations (CRUD) and manage database connections.</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Frontend and Backend Integration</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Get familiar with front-end technologies such as <strong>HTML, CSS,</strong> and <strong>JavaScript.</strong> </li>
              <li className='course-objective-point'>Understand how to link Python-based backends to front-end interfaces to create full-fledged web applications.</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>API Development</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Learn how to create RESTful APIs using Python frameworks like <strong>Flask</strong> or <strong>Django Rest Framework.</strong> </li>
              <li className='course-objective-point'>Understand the principles of API design, authentication, and handling JSON data.</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Version Control and Collaboration</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Learn to use Git for tracking changes and collaborate with other developers using platforms like <strong>GitHub</strong> or <strong>GitLab.</strong> </li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Testing and Debugging Skills</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Understand the significance of writing testable code and learn to implement unit testing using tools like <strong>pytest</strong> or <strong>unittest.</strong> </li>
              <li className='course-objective-point'>Improve problem-solving abilities with debugging and error-handling techniques in Python</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Deployment and Cloud Hosting</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Learn how to deploy Python web applications to cloud platforms like <strong>Heroku, AWS,</strong> or <strong>Google Cloud.</strong> </li>
              <li className='course-objective-point'>Understand the deployment process to bring your application into production.</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Build Real-World Projects</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Work on practical full-stack projects that involve both front-end and back-end development.</li>
              <li className='course-objective-point'>Learn how to manage the complete development cycle, from planning and coding to deployment.</li>
            </ul>
            <li className='course-objective-heading'>
              <strong>Introduction to Data Science</strong>
            </li>
            <ul>
              <li className='course-objective-point'>Optionally, explore the basics of data analysis and machine learning with Python libraries like <strong>Pandas</strong> and <strong>Scikit-learn.</strong>
              </li>
            </ul>
          </ol>
        </div>
      </div>

      <h1>Career Opportunities in Python</h1>
      <div className='opportunities-container'>
        <div>
          <p>Python Developer (Backend/Fullstack)</p>
          <p>Data Scientist</p>
          <p>Machine Learning Engineer</p>
        </div>

        <div>
          <p>Data Engineer</p>
          <p>Automation Engineer</p>
          <p>DevOps Engineer </p>
        </div>

        <div>
          <p>Web Scraping Developer</p>
          <p>Cybersecurity Analyst</p>
          <p>Software Engineer</p>
        </div>
        <div>
          <p>Game Developer</p>
          <p>Financial Analyst / Quantitative Analyst (Quant)</p>
          <p>Cloud Engineer</p>
          <p>Research Scientist</p>
        </div>
      </div>
      <p style={{textAlign:'center'}}>Excited to Learn python? <Link to="/register" style={{fontWeight:'bold', color:'green'}}>Click here</Link> to register...</p>

    </div>
  )
}

export default PythonCourse
