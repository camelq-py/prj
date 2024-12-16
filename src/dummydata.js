import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Links, NavLink, useHref } from 'react-router-dom';
export const homeAbout =[
    {
        id:1,
        
        title: "Vision and Mission",
        desc: " To enrich the knowledge & skill sets of young software engineers by providing value added training in the areas of Software Development & Testing."
    },
    {
        id:2,
        
        title: "Infrastructure",
        desc: " Having modern classroom equipped with latest teaching aids.Full fledged Software Lab with PCs connected in network & Open Source/Development software."
    },
    {
        id:3,
        
        title: "Management Team",
        desc: "Management have more than 15 years of experience in IT Industry in various domains.With a motto of empowering youth in IT education to IT Careers."
    },
    {
        id:4,
        cover: "https://camelq.in/wp-content/uploads/2024/07/data-analytics.png",
        title: "Branches",
        desc: "We have 2 branches. With all the required facilities."
    },

]
export const awrapper = [
    {
      cover: "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
      data: "3,000",
      title: "SUCCESS STORIES",
    },
  
    {
      cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
      data: "320",
      title: "TRUSTED TUTORS",
    },
    {
      cover: "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
      data: "1,000",
      title: "SCHEDULES",
    },
    {
      cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
      data: "587",
      title: "COURSES",
    },
    
  ]
  export const coursesCard = [
    {
      id: 1,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c1.png?raw=true",
      coursesName: "Introducing to Software Engineering",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-4.44.33-PM.jpeg",
          name: "by John Smith",
          totalTime: "50 lectures (190 hrs)",
        },
      ],
      priceAll: "1000/- All Course",
      pricePer: "150/- per month",
    },
    {
      id: 2,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c2.png?raw=true",
      coursesName: "Enhancing Adobe Photoshop CC 2020 Skills",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/elementor/thumbs/Untitled-design-3-qwbow3cos29dnspiqm290roeflozisbdkjmcebvqro.png",
          name: "by Ram Gurung",
          totalTime: "30 lectures (125 hrs)",
        },
      ],
      priceAll: "2000/- All Course",
      pricePer: "250/- per month",
    },
    {
      id: 3,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c3.png?raw=true",
      coursesName: "HTML, CSS, and Javascript for Web Developers",
      courTeacher: [
        {
          dcover: "https://media.istockphoto.com/id/1316748261/photo/perfect-smiling-business-woman-in-white-suit-standing-with-crossed-arms-on-white.jpg?s=612x612&w=0&k=20&c=w5b4cEjZncVABNbv18_qCYUNJvF0DfCbpy5Mefp8Il4=",
          name: "by Sarojini Nepal",
          totalTime: "50 lectures (50 hrs)",
        },
      ],
      priceAll: "500/- All Course",
      pricePer: "50/- per month",
    },
    {
      id: 4,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c4.png?raw=true",
      coursesName: "Introducing to Programming with WordPress",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/2024/11/Untitled-design-4.png",
          name: "by Prabin Thapa Mager",
          totalTime: "20 lectures (20 hrs)",
        },
      ],
      priceAll: "3000/- All Course",
      pricePer: "300/- per month",
    },
    {
      id: 5,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c5.png?raw=true",
      coursesName: "Introducing to Programming with ReactJS",
      courTeacher: [
        {
          dcover: "https://media.istockphoto.com/id/1316748261/photo/perfect-smiling-business-woman-in-white-suit-standing-with-crossed-arms-on-white.jpg?s=612x612&w=0&k=20&c=w5b4cEjZncVABNbv18_qCYUNJvF0DfCbpy5Mefp8Il4=",
          name: "by Sunitha Bishowkaram",
          totalTime: "100 lectures (150 hrs)",
        },
      ],
      priceAll: "3000/- All Course",
      pricePer: "300/- per month",
    },
    {
      id: 6,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c6.png?raw=true",
      coursesName: "Learn Frontend Programming Language",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/2024/07/aru-e1721910445138.png",
          name: "by Sunil Bishowkaram",
          totalTime: "200 lectures (300 hrs)",
        },
      ],
      priceAll: "5000/- All Course",
      pricePer: "800/- per month",
    },
    {
      id: 7,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c7.png?raw=true",
      coursesName: "Introducing to with HTML / CSS",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/2024/10/Untitled-design-1-450x537.png",
          name: "by Price",
          totalTime: "20 lectures (50 hrs)",
        },
      ],
      priceAll: "200/- All Course",
      pricePer: "20/- per month",
    },
    {
      id: 8,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c8.png?raw=true",
      coursesName: "Introducing to with JAVA",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.14.44-PM-e1721894090779-600x547.jpeg",
          name: "by Petter",
          totalTime: "80 lectures (200 hrs)",
        },
      ],
      priceAll: "2000/- All Course",
      pricePer: "400/- per month",
    },
    {
      id: 9,
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/c9.png?raw=true",
      coursesName: "Introducing to with HTML / CSS / JAVASCRIPT",
      courTeacher: [
        {
          dcover: "https://camelq.in/wp-content/uploads/2024/07/vj-e1721910407881-600x525.png",
          name: "by Petter",
          totalTime: "50 lectures (50 hrs)",
        },
      ],
      priceAll: "200/- All Course",
      pricePer: "30/- per month",
    },
  ]
  export const online = [
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o1.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o1.1.png?raw=true",
      courseName: "UI/UX Design Courses",
      course: "25 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o2.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o2.1.png?raw=true",
      courseName: "Art & Design",
      course: "25 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o3.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o3.1.png?raw=true",
      courseName: "Computer Science",
      course: "10 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o4.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o4.1.png?raw=true",
      courseName: "History & Archeologic",
      course: "15 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o5.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o5.1.png?raw=true",
      courseName: "Software Engineering",
      course: "30 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o6.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o6.1.png?raw=true",
      courseName: "Information Software",
      course: "60 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o7.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o7.1.png?raw=true",
      courseName: "Health & Fitness",
      course: "10 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o8.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o8.1.png?raw=true",
      courseName: "Marketing",
      course: "30 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o9.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o9.1.png?raw=true",
      courseName: "Graphic Design",
      course: "80 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o10.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o10.1.png?raw=true",
      courseName: "Music",
      course: "120 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o11.png?raw=true",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o11.1.png?raw=true",
      courseName: "Business Administration",
      course: "17 Courses",
    },
    {
      cover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o12.png?raw=trueg",
      hoverCover: "https://github.com/sunil9813/Education-Website-Using-ReactJS/blob/master/public/images/courses/online/o12.1.png?raw=true",
      courseName: "Web Management",
      course: "17 Courses",
    },
  ]
  export const team = [
    {
      cover: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-22-at-4.44.33-PM.jpeg",
      name: "Mr. Mahesh Erukulla",
      work: "FOUNDER",
    },
    {
      cover: "https://camelq.in/wp-content/uploads/elementor/thumbs/Untitled-design-3-qwbow3cos29dnspiqm290roeflozisbdkjmcebvqro.png",
      name: "Jashwanth",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: "https://camelq.in/wp-content/uploads/2024/11/Untitled-design-4.png",
      name: "Nagulmeera",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: "https://camelq.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.14.44-PM-e1721894090779-600x547.jpeg",
      name: "Shaharaz",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: "https://camelq.in/wp-content/uploads/2024/07/vj-e1721910407881-600x525.png",
      name: "Vijay Kumar",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: "https://media.istockphoto.com/id/1316748261/photo/perfect-smiling-business-woman-in-white-suit-standing-with-crossed-arms-on-white.jpg?s=612x612&w=0&k=20&c=w5b4cEjZncVABNbv18_qCYUNJvF0DfCbpy5Mefp8Il4=",
      name: "Sruthi",
      work: "PROJECT MANAGER",
    },
    {
      cover: "https://camelq.in/wp-content/uploads/2024/10/Untitled-design-1-450x537.png",
      name: "Praveen",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: "https://camelq.in/wp-content/uploads/2024/07/aru-e1721910445138.png",
      name: "Arun Kumar",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
    {
      cover: "https://media.istockphoto.com/id/1316748261/photo/perfect-smiling-business-woman-in-white-suit-standing-with-crossed-arms-on-white.jpg?s=612x612&w=0&k=20&c=w5b4cEjZncVABNbv18_qCYUNJvF0DfCbpy5Mefp8Il4=",
      name: "Harika",
      work: "DEVELOPER AND LEAD INSTRUCTOR",
    },
  ]
  export const homeInterview =[
    {
        id:1,
        
        title: "DevOps Interview Questions",
        useHref: 'https://www.geeksforgeeks.org/devops-interview-questions/?ref=ml_lbp',
    },
    {
        id:2,
        
        title: "AngularJS Interview Questions",
        desc: " Having modern classroom equipped with latest teaching aids.Full fledged Software Lab with PCs connected in network & Open Source/Development software."
    },
    {
        id:3,
        
        title: "Java Interview Questions",
        desc: "Management have more than 15 years of experience in IT Industry in various domains.With a motto of empowering youth in IT education to IT Careers."
    },
    {
        id:4,
        cover: "https://camelq.in/wp-content/uploads/2024/07/data-analytics.png",
        title: "HTML Interview Questions",
        desc: "We have 2 branches. With all the required facilities."
    },
    {
    id:5,
        
    title: "JavaScript Interview Questions",
    },
    {
      id:6,
          
      title: "Advanced Java Interview Questionss",
    },


]
  