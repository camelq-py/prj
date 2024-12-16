import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import RegisterPage from "./components/RegisterPage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import CoursesPage from "./components/CoursesPage";
import TrainersPage from "./components/TrainersPage";
import PythonCourse from './components/PythonCourse';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/python-course" element={<PythonCourse />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;