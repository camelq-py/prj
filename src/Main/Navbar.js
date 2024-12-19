import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; 

import { FaUserAlt,FaChalkboardTeacher, FaLaptopCode, FaMicrochip ,FaGraduationCap,FaProjectDiagram, FaCode,FaDatabase, FaMobileAlt, FaCloud,FaChartBar,FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
function Navbar() {
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    navigate('/login');
};
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' }); 
      };
    
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
      if (activeIndex === index) {
        setActiveIndex(null); 
      } else {
        setActiveIndex(index); 
      }
    };
  
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const settings = {
        dots: true, 
        infinite: true,
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
      };
    
    return (
        <>
       <nav className="navbar">
            <div className="navbar-brand">CamelQ Tech Academy</div>
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#testimonials">Testimonial</a></li>
                <li><a href="#team">Teams</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#footer">Visit Us</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
        <div id="home" className="home-section">
            <div className="content">
                <h1>Welcome to MyTech Academy</h1>
                <p>Your journey to success starts here.</p>
                <button onClick={handleGetStartedClick}>Get Started</button>
            </div>
        </div>

            <div id="about" className="about-section">
  <div className="content">
    <h2>About Us</h2>
    <p>
      We are a leading software institution dedicated to providing top-notch
      education and training to help you become a successful developer. Our
      courses are designed to equip students with real-world skills and
      knowledge in the ever-evolving tech industry.
    </p>
    <div className="features">
      <div className="feature">
        <FaChalkboardTeacher className="icon" />
        <h3>Expert Instructors</h3>
        <p>
          Learn from experienced professionals who bring real-world
          experience to the classroom.
        </p>
      </div>
      <div className="feature">
        <FaLaptopCode className="icon" />
        <h3>Hands-on Learning</h3>
        <p>
          Our curriculum emphasizes practical experience, ensuring you gain
          the skills employers are looking for.
        </p>
      </div>
      <div className="feature">
        <FaMicrochip className="icon" />
        <h3>Cutting-Edge Technology</h3>
        <p>
          We provide access to the latest tools and technologies to give you
          a competitive edge in your career.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="services" className="services-section">
      <div className="content">
        <h2>Our Services</h2>
        <p>We offer a range of services to help you succeed in your software development journey.</p>
        <div className="services">
          <div className="service">
            <FaLaptopCode className="icon" />
            <h3>Web Development</h3>
            <p>
              We build modern, responsive, and scalable websites to help your business grow. Whether it's a simple
              landing page or a complex web application, we have the expertise to bring your vision to life.
            </p>
          </div>
          <div className="service">
            <FaProjectDiagram className="icon" />
            <h3>Project Management</h3>
            <p>
              We help you manage your software projects efficiently with professional guidance and project planning.
              We ensure smooth delivery, quality assurance, and proper communication throughout the development process.
            </p>
          </div>
          <div className="service">
            <FaCode className="icon" />
            <h3>Software Engineering</h3>
            <p>
              Our expert developers build high-quality, reliable, and secure software solutions tailored to your
              business needs, using the latest technologies and industry best practices.
            </p>
          </div>
          <div className="service">
            <FaDatabase className="icon" />
            <h3>Database Management</h3>
            <p>
              We offer robust database solutions, including database design, optimization, and management to ensure your
              data is organized, accessible, and scalable.
            </p>
          </div>
          <div className="service">
            <FaMobileAlt className="icon" />
            <h3>Mobile App Development</h3>
            <p>
              We develop feature-rich and responsive mobile applications for both Android and iOS platforms, designed to
              deliver a seamless user experience.
            </p>
          </div>
          <div className="service">
            <FaCloud className="icon" />
            <h3>Cloud Computing</h3>
            <p>
              Our cloud solutions enable your business to scale, optimize performance, and enhance security, all while
              reducing infrastructure costs through cloud computing services.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="courses" className="courses-section">
      <div className="content">
        <h2>Our Courses</h2>
        <p>Explore our comprehensive range of courses designed to equip you with the skills for a successful career in software development.</p>
        <div className="courses">
          <div className="course">
            <FaGraduationCap className="icon" />
            <h3>Full Stack Development</h3>
            <p>
              Learn both front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, React, and MongoDB. Build complete, full-stack applications.
            </p>
          </div>
          <div className="course">
            <FaLaptopCode className="icon" />
            <h3>Web Development</h3>
            <p>
              Master web development technologies like HTML5, CSS3, and JavaScript. Build responsive, interactive websites from scratch.
            </p>
          </div>
          <div className="course">
            <FaMobileAlt className="icon" />
            <h3>Mobile App Development</h3>
            <p>
              Learn how to build mobile apps for iOS and Android using technologies like React Native and Flutter.
            </p>
          </div>
          <div className="course">
            <FaDatabase className="icon" />
            <h3>Database Management</h3>
            <p>
              Get hands-on experience with relational and non-relational databases such as MySQL, PostgreSQL, and MongoDB.
            </p>
          </div>
          <div className="course">
            <FaCloud className="icon" />
            <h3>Cloud Computing</h3>
            <p>
              Learn cloud platforms like AWS and Azure to deploy and manage applications with scalability and reliability in mind.
            </p>
          </div>
          <div className="course">
            <FaChartBar className="icon" />
            <h3>Data Analytics</h3>
            <p>
              Master the techniques of data analysis, visualization, and statistical modeling using tools like Python, R, and SQL.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="testimonials" className="testimonial-section">
      <div className="content">
        <h2>What Our Students Say</h2>
        <p>Here's some feedback from our happy students and clients who have experienced our services and courses.</p>
        <Slider {...settings} className="testimonial-carousel">
          <div className="testimonial">
            <FaUserAlt className="icon" />
            <h3>John Doe</h3>
            <p className="role">Full Stack Developer</p>
            <p className="testimonial-text">
              "The Full Stack Development course at this institution has been amazing! I learned both front-end and back-end technologies, and the instructors were so helpful throughout the process."
            </p>
          </div>
          <div className="testimonial">
            <FaUserAlt className="icon" />
            <h3>Jane Smith</h3>
            <p className="role">Mobile App Developer</p>
            <p className="testimonial-text">
              "I took the Mobile App Development course, and it was fantastic. I now have the skills to build my own apps, thanks to the hands-on approach the instructors took."
            </p>
          </div>
          <div className="testimonial">
            <FaUserAlt className="icon" />
            <h3>Emily Johnson</h3>
            <p className="role">Data Analyst</p>
            <p className="testimonial-text">
              "The Data Analytics course opened my eyes to the power of data. I can now analyze and visualize data with confidence. The course was well-structured, and the examples were relevant."
            </p>
          </div>
        </Slider>
      </div>
    </div>
    <div id="team" className="team-section">
  <div className="content">
    <h2>Meet Our Team</h2>
    <p>Our team consists of talented professionals who are passionate about helping you succeed.</p>
    <div className="team-members row justify-content-center">
      <div className="team-member col-12 col-sm-6 col-md-2 mb-4">
        <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="John Doe" className="team-image img-fluid" />
        <h3>John Doe</h3>
        <p className="role">CEO</p>
        <p className="description">
          As the CEO of our company, John leads with vision and passion. He ensures that our mission and values guide every aspect of our business.
        </p>
      </div>

      <div className="team-member col-12 col-sm-6 col-md-2 mb-4">
        <img src="https://t3.ftcdn.net/jpg/01/80/80/28/360_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg" alt="Jane Smith" className="team-image img-fluid" />
        <h3>Jane Smith</h3>
        <p className="role">Founder</p>
        <p className="description">
          Jane is the founder of our institution. Her vision and leadership have driven our growth and success in the software training industry.
        </p>
      </div>

      <div className="team-member col-12 col-sm-6 col-md-2 mb-4">
        <img src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="Emily Johnson" className="team-image img-fluid" />
        <h3>Emily Johnson</h3>
        <p className="role">HR Manager</p>
        <p className="description">
          Emily handles everything related to our people. From recruitment to employee satisfaction, she ensures our team thrives.
        </p>
      </div>

      <div className="team-member col-12 col-sm-6 col-md-2 mb-4">
        <img src="https://etimg.etb2bimg.com/photo/112106757.cms" alt="Michael Brown" className="team-image img-fluid" />
        <h3>Michael Brown</h3>
        <p className="role">Lead Instructor</p>
        <p className="description">
          Michael is our lead instructor. His expertise in full-stack development helps students gain the knowledge needed to excel in the tech industry.
        </p>
      </div>
    </div>
  </div>
</div>

    <div id="clients" className="clients-section">
  <div className="container text-center">
    <h2 className="display-4">Our Clients</h2>
    <p className="lead text-muted">We are proud to work with these amazing companies.</p>
    <div className="client-container">
      <div className="row justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg" alt="Client 1" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg" alt="Client 2" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://daisyuk.tech/wp-content/uploads/2024/01/microsoft-partner-logo-jpg.webp" alt="Client 3" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://www.shareicon.net/download/2015/09/19/103425_video.svg" alt="Client 4" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://www.varindia.com/storage/news/2024/07/l7W02q4GIHlh7aNNc353whLZT3zzxRZdroFqyZFu.jpg" alt="Client 5" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://static.vecteezy.com/system/resources/previews/020/336/733/non_2x/tata-logo-tata-icon-free-free-vector.jpg" alt="Client 6" className="client-logo img-fluid" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMha4iBfMF-P54i0rxc5aSqqWuktU3_Ed0vA&s" alt="Client 1" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://www.freepnglogos.com/uploads/hyundai-logo-14.jpeg" alt="Client 2" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://www.varindia.com/storage/news/uploads/2018/02/651be3a779df8.jpg" alt="Client 3" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKXnWPCDt6u1uUhtjgNH7SJQq-sjLDpWsSw&s" alt="Client 4" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Meesho_logo.png/768px-Meesho_logo.png" alt="Client 5" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://i.pinimg.com/564x/95/93/98/959398621dfd224798a80c237a974e13.jpg" alt="Client 6" className="client-logo img-fluid" />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://design-language-website.netlify.app/design/language/f46d88805a0d157e5516270d667001c4/logo_dont_shadow.svg" alt="Client 1" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://cognizant.scene7.com/is/image/cognizant/cog-logo-500x500x?fmt=png-alpha" alt="Client 2" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDzlgYsOMUxG8ejMtf11DfUObotAU7h-UvA&s" alt="Client 3" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsiIPPH7ADmFnaTN_BIYrZ75bssytUOSfFg&s" alt="Client 4" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://www.varindia.com/storage/news/uploads/2018/02/5fabd46375dd1.jpg" alt="Client 5" className="client-logo img-fluid" />
        </div>
        <div className="col-2 col-sm-2 col-md-2 col-lg-2 mb-4">
          <img src="https://cna.ca/wp-content/uploads/2024/10/Accenture-Inc._Logo_Square-500x500.png" alt="Client 6" className="client-logo img-fluid" />
        </div>
      </div>
    </div>
  </div>
</div>


    <div id="events" className="events-section">
      <div className="content">
        <h2>Upcoming Events</h2>
        <p>Stay updated with our latest events, workshops, and conferences.</p>
        <div className="events-cards">
          <div className="event-card">
            <div className="event-card-content">
              <h3>Web Development Bootcamp</h3>
              <p className="date">March 20, 2024</p>
              <p className="location">San Francisco, CA</p>
              <p className="description">
                Join us for an intensive bootcamp designed to take you from beginner to full-stack developer in just 2 weeks.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-card-content">
              <h3>AI & Machine Learning Conference</h3>
              <p className="date">April 10, 2024</p>
              <p className="location">New York, NY</p>
              <p className="description">
                A deep dive into the latest trends in AI and Machine Learning with industry leaders sharing their insights.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-card-content">
              <h3>Frontend Frameworks Workshop</h3>
              <p className="date">May 15, 2024</p>
              <p className="location">Chicago, IL</p>
              <p className="description">
                Hands-on workshop focused on building modern, responsive websites using the latest frontend frameworks.
              </p>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="pricing" className="pricing-section">
      <div className="content">
        <h2>Our Pricing Plans</h2>
        <p>Choose the perfect plan for your needs. Transparent pricing, no hidden fees.</p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card-inner">
              <div className="pricing-card-front">
                <h3>Basic</h3>
                <p className="price">$19 <span>/ month</span></p>
                <ul>
                  <li><i className="fas fa-cloud-upload-alt"></i> 10 GB Storage</li>
                  <li><i className="fas fa-headphones-alt"></i> Email Support</li>
                  <li><i className="fas fa-cogs"></i> Access to Basic Courses</li>
                </ul>
                <button className="btn">Get Started</button>
              </div>
              <div className="pricing-card-back">
                <h3>Perfect for beginners</h3>
                <p>Ideal for those who are just starting. A simple plan to get you up and running.</p>
              </div>
            </div>
          </div>

          <div className="pricing-card highlighted">
            <div className="pricing-card-inner">
              <div className="pricing-card-front">
                <h3>Standard</h3>
                <p className="price">$49 <span>/ month</span></p>
                <ul>
                  <li><i className="fas fa-cloud-upload-alt"></i> 50 GB Storage</li>
                  <li><i className="fas fa-headphones-alt"></i> Priority Support</li>
                  <li><i className="fas fa-book"></i> Access to Premium Courses</li>
                  <li><i className="fas fa-chart-line"></i> Advanced Analytics</li>
                </ul>
                <button className="btn">Get Started</button>
              </div>
              <div className="pricing-card-back">
                <h3>Great for growth</h3>
                <p>Designed for those looking to take their learning and business to the next level.</p>
              </div>
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-inner">
              <div className="pricing-card-front">
                <h3>Premium</h3>
                <p className="price">$99 <span>/ month</span></p>
                <ul>
                  <li><i className="fas fa-cloud-upload-alt"></i> 200 GB Storage</li>
                  <li><i className="fas fa-headphones-alt"></i> 24/7 Support</li>
                  <li><i className="fas fa-book-open"></i> Access to All Courses</li>
                  <li><i className="fas fa-users"></i> One-on-One Coaching</li>
                  <li><i className="fas fa-shield-alt"></i> Enhanced Security</li>
                </ul>
                <button className="btn">Get Started</button>
              </div>
              <div className="pricing-card-back">
                <h3>For professionals</h3>
                <p>All-in-one package for those who need it all—premium support, full access, and dedicated coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="faqs" className="faqs-section">
      <div className="content">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of the common questions we get. If you need more information, feel free to reach out.</p>
        <div className="faq-items">
          <div className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(0)}
            >
              <h3>What courses do you offer?</h3>
              <span className={`arrow ${activeIndex === 0 ? 'active' : ''}`}>▼</span>
            </div>
            {activeIndex === 0 && (
              <div className="faq-answer">
                <p>We offer a variety of courses in software development, including full-stack web development, data science, and mobile app development. Check out our courses page for more details.</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(1)}
            >
              <h3>How long does a course last?</h3>
              <span className={`arrow ${activeIndex === 1 ? 'active' : ''}`}>▼</span>
            </div>
            {activeIndex === 1 && (
              <div className="faq-answer">
                <p>Our courses vary in duration, with most full-time courses taking 8-12 weeks. Part-time options are also available for flexible learning.</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(2)}
            >
              <h3>Do you provide job assistance after completing a course?</h3>
              <span className={`arrow ${activeIndex === 2 ? 'active' : ''}`}>▼</span>
            </div>
            {activeIndex === 2 && (
              <div className="faq-answer">
                <p>Yes, we offer job assistance services, including resume building, interview preparation, and job placement support through our network of partner companies.</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(3)}
            >
              <h3>What are the prerequisites for joining a course?</h3>
              <span className={`arrow ${activeIndex === 3 ? 'active' : ''}`}>▼</span>
            </div>
            {activeIndex === 3 && (
              <div className="faq-answer">
                <p>Each course has its own prerequisites. For most of our courses, a basic understanding of programming concepts is required. Check the course details for specific requirements.</p>
              </div>
            )}
          </div>

          <div className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(4)}
            >
              <h3>Can I access the course materials after the course ends?</h3>
              <span className={`arrow ${activeIndex === 4 ? 'active' : ''}`}>▼</span>
            </div>
            {activeIndex === 4 && (
              <div className="faq-answer">
                <p>Yes, you will have lifetime access to the course materials, including videos, notes, and resources, so you can refer back whenever needed.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="contact-page">
  <div className="contact-section">
    <div className="video-container">
    <video autoplay muted loop controls>
  <source src="https://videos.pexels.com/video-files/3249940/3249940-uhd_2560_1440_25fps.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>

    <div className="form-container">
      <h2>Contact Us</h2>
    

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          required
        />
        <input 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          rows="5"
          required
        ></input>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>



    <footer id="footer"className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We are a leading institution in software development education. Our mission is to provide
            high-quality training to empower the next generation of developers and tech professionals.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Software St, Tech City, 12345</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
        </>
    );
}

export default Navbar;
