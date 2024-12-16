import './App.css';
import Header from "./Components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/home/Home'
import About from './Components/about/About'
import CourseHome from './Components/allcourses/CourseHome';
import Team from "./Components/team/Team"
import Contact from './Components/contact/Contact';
import Footer from './Components/common/footer/Footer';
import ServicesHome from './Components/services/ServicesHome';
import Register from './Components/register/Register';
import Interview from './Components/interview/Interview';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>       
          <Route path ='/' element={<Home />} />
          <Route path ='/about' element={<About />} />
          <Route path ='/courses' element={<CourseHome />} />
          <Route path ='/team' element={<Team />} />
          <Route path ='/contact' element={<Contact />} />
          <Route path ='/services' element={<ServicesHome />} />
          <Route path ='/register' element={<Register />} />
          <Route path ='/interview' element={<Interview />} />
        </Routes> 
        <Footer />
      </Router>
    </>
    
  );
}

export default App;
