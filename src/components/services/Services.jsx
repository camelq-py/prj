import React from 'react';
import './services.css';

const Services = () => {
    return (
        <>
            <div className="services-container">
                <h1>SERVICES OFFERED</h1>
                <p> Campus Recruitment Training | Corporate Training | Classroom Training | Online Training | Test Center | Placements </p>
                <div className="services-grid">
                    <div className="service-item">
                        <img src="https://img.freepik.com/free-photo/low-angle-shot-speaker-talking-looking-colleagues_74855-4326.jpg" alt="Corporate Training" />
                        <div className="hover-box">
                            <h3>CORPORATE TRAINING</h3>
                            <p>Our corporate training programs equip employees with the latest skills and knowledge, ensuring top-notch professional growth</p>
                        </div>
                        <div className="service-title">CORPORATE TRAINING</div>
                    </div>

                    <div className="service-item">
                        <img src="https://img.freepik.com/premium-photo/education-high-school-technology-people-concept-smiling-teacher-with-notepad-laptop-computer-standing-front-students-showing-something-white-board-classroom_380164-89661.jpg" alt="Classroom Training" />
                        <div className="hover-box">
                            <h3>CLASSROOM TRAINING</h3>
                            <p> Our classroom training offers an in-depth learning experience with expert mentors. It includes theoretical and practical knowledge</p>
                        </div>
                        <div className="service-title">CLASSROOM TRAINING</div>
                    </div>

                    <div className="service-item">
                        <img src="https://cdn.elearningindustry.com/wp-content/uploads/2021/01/elearning-advantages-and-trends.png" alt="Online Training" />
                        <div className="hover-box">
                            <h3>ONLINE TRAINING</h3>
                            <p>Our flexible online programs are tailored to meet individual learning needs, taught by experienced instructors</p>
                        </div>
                        <div className="service-title">ONLINE TRAINING</div>
                    </div>

                    <div className="service-item">
                        <img src="https://media.istockphoto.com/id/1371201058/photo/business-team-working-on-laptop-computer-document-management-system.jpg?s=612x612&w=0&k=20&c=gWV9ggUH6zUmzaSeAg88aKWoqug976BGqqnivjzDq5E=" alt="Online Test Center" />
                        <div className="hover-box">
                            <h3>ONLINE TEST CENTER</h3>
                            <p> We have a convenient and reliable platform for conducting online tests, assessments, and certifications</p>
                        </div>
                        <div className="service-title">ONLINE TEST CENTER</div>
                    </div>

                    <div className="service-item">
                        <img src="https://media.licdn.com/dms/image/v2/D4D12AQHruqSjoUpZew/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1661410508957?e=2147483647&v=beta&t=Z6E8R1Ls0a-UmPBBlmU6-QM9CyY55yqA1UKqdz1FkTE" alt="Campus Recruitment Training" />
                        <div className="hover-box">
                            <h3>CAMPUS RECRUITMENT TRAINING</h3>
                            <p> We provide comprehensive training to prepare students for campus placements with mock interviews and aptitude sessions</p>
                        </div>
                        <div className="service-title">CAMPUS RECRUITMENT TRAINING</div>
                    </div>

                    <div className="service-item">
                        <img src="https://img.freepik.com/free-photo/close-up-young-business-person-doing-internship_23-2149305361.jpg?semt=ais_hybrid" alt="Placements & Internship" />
                        <div className="hover-box">
                            <h3>PLACEMENTS & INTERNSHIP</h3>
                            <p> We provide dedicated support for internships and placements, bridging the gap between students and employers</p>
                        </div>
                        <div className="service-title">PLACEMENTS & INTERNSHIP</div>
                    </div>
                </div>
            </div>

            <div className="clients">
                <div className='head1'>
                    <h1>Our Esteemed Clients</h1>
                </div>
                <div className="clients-container">
                    <img src="https://s32519.pcdn.co/wp-content/uploads/2023/10/partner-wipro-512px.png" alt="Wipro logo" className="client-logo" />
                    <img src="https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png" alt="Capgemini logo" className="client-logo" />
                    <img src="https://www.apogeeresults.com/wp-content/uploads/2018/10/ibm-logo-png-transparent-background.png" alt="IBM logo" className="client-logo" />
                    <img src="https://brandeps.com/logo-download/H/HP-logo-vector-01.svg" alt="HP logo" className="client-logo" />
                    <img src="https://static.cdnlogo.com/logos/a/5/amazon.png" alt="Amazon logo" className="client-logo" />
                    <img src="https://www.rozgarle.com/storage/rleimages/companies/concentrix.png" alt="concentrix logo" className="client-logo" />
                    <img src="https://brandeps.com/logo-download/M/Microsoft-logo-vector-01.svg" alt="microsoft logo" className="client-logo" />
                    <img src="https://brandeps.com/logo-download/T/TATA-Consultancy-Services-logo-vector-01.svg" alt="TCS logo" className="client-logo" />
                </div>
            </div>
        </>
    );
};

export default Services;