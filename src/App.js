import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import ClientReviews from './Client reviews/ClientReviews';
import Branches from './Branches/Branches';
import Header from './header/Header';
import Footer from './Footer/Footer';
import Service from './service/Service';
import Careers from './Careers/Careers';
import ReactPage from './courses/ReactPage';
import PythonPage from './courses/Python';
import JavaPage from './courses/JavaPage';
import UIUXDesignPage from './courses/UIUXDesignPage';
import InternshipPrograms from './intenship/Intenship';
import RegistrationForm from './registration/Register';
import InternshipAppli from './intenship/InternshipAppi';
import JobAppli from './jobAppi/JobAppi';
import ContactUsForm from './contactusmain/ContactUsForm';
import Home from './home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers/>} />
          <Route path='/services' element={<Service/>}/>
          <Route path="/ourclients" element={<ClientReviews />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/courses/reactpage" element={<ReactPage/>} />
          <Route path="/courses/pythonpage" element={<PythonPage/>} />
          <Route path="/courses/javapage" element={<JavaPage/>} />
          <Route path="/courses/ui-ux-page" element={<UIUXDesignPage/>} />
          <Route path="/internships" element={<InternshipPrograms/>} />
          <Route path="/registerform" element={<RegistrationForm/>} />
          <Route path="/internshipsform" element={<InternshipAppli/>} />
          <Route path="/jobappliform" element={<JobAppli/>} />
          <Route path="/contactusform" element={<ContactUsForm/>} />
        </Routes>
        <Footer/>
         </div>
    </Router>
  );
}

export default App;
