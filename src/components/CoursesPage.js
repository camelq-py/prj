// src/components/CoursesPage.js
import React from 'react';
import '../../src/styles/CoursesPage.css';
import { Link } from 'react-router-dom';


function CoursesPage() {
  return (

    <div className="courses-page">

      <h2 className='heading'>Our Courses</h2>
      <p className='course-sub-heading'>
        Here are the courses we offered to train you from non-coder to <strong>expert in coding.</strong>
      </p>

      <div className='course-detail-container'>
      <Link to="/python-course" style={{textDecoration:"none"}}>

        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/py-logo.png" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">Python Fullstack</h2>
            <p className="course-description">
              Python is a general-purpose interpreted, interactive, object-oriented,
              and high-level programming language. Python has been one of the premier,
              flexible, and powerful open-source language that is easy to learn, easy to use,
              and has powerful libraries for data manipulation and analysis
            </p>
          </div>
        </div>
        </Link>
        


        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/java-logo.webp" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">Java Fullstack</h2>
            <p className="course-description">
              The course builds a strong understanding of JDBC Technology.
              It gives in to demonstrate why Servlets are the cornerstone of Java’s
              Web platform. JSP is built on the Servlet architecture.
              The class culminates in an exploration of Java MVC frameworks like Struts at a high level.
            </p>
          </div>
        </div>


        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/react-logo.webp" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">React Js</h2>
            <p className="course-description">
              React.js (commonly referred to as React) is an open-source JavaScript library
              used especially for single-page applications (SPAs) where a smooth and dynamic
              user experience is needed. It allows developers to build web applications
              by creating reusable UI components.
            </p>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/angularjs-logo.png" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">Angular Js</h2>
            <p className="course-description">
            AngularJS is a JavaScript-based open-source framework developed by 
            Google for building dynamic web applications. It allows developers to 
            create single-page applications (SPAs) by extending HTML with declarative syntax, 
            two-way data binding, and modular components.
            </p>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/devops-logo.svg" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">DevOps</h2>
            <p className="course-description">
            DevOps is a set of practices, tools, and cultural philosophies 
            aimed at automating and integrating the processes of software development
             (Dev) and IT operations (Ops). The goal of DevOps is to shorten the software 
             development lifecycle and provide continuous delivery of high-quality software
            </p>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/testing-logo.png" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">Testing</h2>
            <p className="course-description">
            Testing is the process of evaluating software to identify bugs, verify functionality,
             and ensure it meets the required specifications. It includes various methods such as 
             unit testing, integration testing, and user acceptance testing. The goal is to improve software quality, 
             reliability, and performance before deployment.
            </p>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-logo">
            <img src="https://cdn-icons-png.flaticon.com/256/7858/7858975.png" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">UI/UX Design</h2>
            <p className="course-description">
            UI/UX design focuses on creating user-friendly interfaces (UI) and delivering an intuitive, 
            enjoyable experience (UX) for users. UI design involves the visual aspects, such as layout, 
            colors, and typography, while UX design emphasizes usability, accessibility, and user satisfaction. 
            Together, they ensure products are both aesthetically appealing and easy to use.
            </p>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/dotnet-logo.png" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">.Net Fullstack</h2>
            <p className="course-description">
            .NET is a free, open-source framework developed by Microsoft, 
            primarily used for building modern web, desktop, and mobile applications. 
            It supports multiple programming languages, including C#, F#, and Visual Basic, 
            and offers a comprehensive library of pre-built functions and tools.
            </p>
          </div>
        </div>

        <div className="course-detail">
          <div className="course-logo">
            <img src="/images/database-logo.png" alt="Course Logo" />
          </div>
          <div className="course-info">
            <h2 className="course-name">DataBase</h2>
            <p className="course-description">
            Databases are structured systems for storing, managing, and retrieving data efficiently. 
            They can be classified into relational databases (SQL), which use tables and queries for 
            data organization, and non-relational databases (NoSQL), which store data in formats like 
            key-value pairs or documents.
            </p>
          </div>
        </div>


      </div>


    </div>
  );
}

export default CoursesPage;
