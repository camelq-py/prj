import React from "react"
import "./courses.css"


const CoursesTable = () => {
  const courses = [
    { name: "Data Science", content: "View Course" , register: "SignUp!" ,contentLink: "https://onlinecourses.nptel.ac.in/noc25_cs20/preview"  },
    { name: "Machine Learning", content: "View Course", register: "SignUp!",contentLink: "https://onlinecourses.nptel.ac.in/noc25_cs50/preview" },
    { name: "AI", content: "View Course", register: "SignUp!",contentLink: "https://onlinecourses.nptel.ac.in/noc25_cs07/preview"},
    { name: "Python", content: "View Course", register: "SignUp!", contentLink: "https://onlinecourses.swayam2.ac.in/cec24_cs11/preview" },
    { name: "Testing", content: "View Course", register: "SignUp!", contentLink: "https://onlinecourses.nptel.ac.in/noc25_cs66/preview"},
    { name: "C++", content: "View Course", register: "SignUp!", contentLink: "https://onlinecourses.swayam2.ac.in/aic20_sp01/preview" },
    { name: "Core Java", content: "View Course", register: "SignUp!", contentLink: "https://swayam.gov.in/explorer" },
    { name: "Advanced Computer Networks", content: "View Course", register: "SignUp!",contentLink: "https://onlinecourses.nptel.ac.in/noc25_cs02/preview"},
    { name: "Web Technology", content: "View Course", register: "SignUp!", contentLink: "https://onlinecourses.swayam2.ac.in/nou25_cs09/preview" },
    { name: "HTML", content: "View Course", register: "SignUp!", contentLink: "https://onlinecourses.swayam2.ac.in/aic20_sp11/preview"},
    { name: "Data Structure", content: "View Course", register: "SignUp!", contentLink: "https://onlinecourses.swayam2.ac.in/cec25_ma15/preview"},
  ];

  return (
      <div className="ct">
        <h1>Learn Software Courses from the Expert Trainers</h1>
      
      <table border="1" className="table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Content</th>
            <th>RegisterNow</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td> 
                <a href={course.contentLink} target="_blank" rel="noopener noreferrer">{course.content}
                </a>
              </td>
              <td>
                <a href="http://localhost:3000/register" rel="noopener noreferrer">{course.register}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}

export default CoursesTable