import {
  mobile,
  backend,
  creator,
  web,
  event,
  javascript,
  java,
  C,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mysql,
  oasisIcon,
  prodigyIcon,
  zunoIcon,
  mockInterviewImage,
  chatAppImage,
  busTicketBookingImage,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Event Management",
    icon: event,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Machine Learning Developer",
    company_name: "Prodigy InfoTech",
    icon: prodigyIcon, 
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
        "Developed machine learning models and algorithms to analyze data and provide insights.",
        "Collaborated with cross-functional teams including data scientists, product managers, and developers to integrate machine learning solutions.",
        "Assisted in data preprocessing and feature engineering to improve model accuracy and performance.",
        "Participated in code reviews, providing constructive feedback on Python and machine learning code implementations.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "OASIS Infobyte",
    icon: oasisIcon, 
    iconBg: "#383E56",
    date: "April 2024 - May 2024",
    points: [
        "Developed and maintained backend applications using Java and related frameworks.",
        "Collaborated with cross-functional teams including designers and product managers to create high-quality products.",
        "Assisted in designing and implementing RESTful APIs to improve data flow and integration with front-end applications.",
        "Participated in code reviews, providing feedback on Java code and improving team development practices.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Zuno by foundit",
    icon: zunoIcon, 
    iconBg: "#E6DEDD",
    date: "May 2024 - November 2024",
    points: [
        "Promoted company initiatives and represented Zuno by foundit within the university community.",
        "Collaborated with the marketing team to create awareness campaigns and increase student engagement.",
        "Organized events and sessions to inform students about Zuno’s platform and opportunities.",
        "Provided feedback on student interests and suggestions to enhance campus presence and outreach strategies.",
    ],
},
];

const testimonials = [
  {
    testimonial:
      "Dipak demonstrated exceptional dedication and understanding in his projects. His ability to grasp complex concepts is truly impressive.",
    name: "Prof. Rajesh Kumar",
    designation: "Professor of Computer Science",
    college: "Punyashlok Ahilyadevi Holkar Solapur University",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have seen Dipak tackle challenging problems with creativity and tenacity. He is a promising talent in the field of computer science.",
    name: "Dr. Meera Patil",
    designation: "Head of Department",
    college: "Punyashlok Ahilyadevi Holkar Solapur University",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Dipak's collaborative spirit and enthusiasm for learning make him stand out. He is well-prepared for any challenges ahead.",
    name: "Prof. Aarti Deshmukh",
    designation: "Associate Professor",
    college: "Punyashlok Ahilyadevi Holkar Solapur University",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bus Ticket Booking System",
    description:
      "A web-based application that allows users to search for buses, view available seats, and book tickets online. The system includes user registration, login, and payment gateway integration, with an admin panel to manage bus schedules and seat availability.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: busTicketBookingImage, 
    source_code_link: "https://github.com/dipak-pawar-356/bus_ticket_booking", // Update with your actual GitHub link if available
  },
  {
    name: "Real-Time Chat Application (ConnectCraze)",
    description:
      "A real-time chat application supporting one-on-one and group messaging. The app features user authentication, live presence indicators, and multimedia messaging, making it a comprehensive solution for real-time communication.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: chatAppImage, 
    source_code_link: "https://github.com/dipak-pawar-356/connect_craze", // Update with your actual GitHub link if available
  },
  {
    name: "AI-Powered Mock Interview Taker",
    description:
      "A web-based platform that simulates real interview scenarios by providing dynamic, AI-driven questions and feedback. The platform helps users practice and improve their interview responses with real-time feedback.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: mockInterviewImage, 
    source_code_link: "https://github.com/dipak-pawar-356/ai_mock_interview", // Update with your actual GitHub link if available
  },
  {
    name: "Uber Clone",
    description:
      "A feature-rich web application inspired by Uber, built to demonstrate ride-booking functionality. The platform includes dynamic user interfaces, real-time location tracking, and backend integration for managing rides, user authentication, and live location.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "purple-text-gradient",
      },
      {
        name: "mongoDB",
        color: "orange-text-gradient",
      },
    ],
    //image: uberCloneImage, // Replace with an actual image variable or path
    source_code_link: "https://github.com/dipak-pawar-356/uber_clone", // Update with the actual GitHub link if available
  },
  
];


export { services, technologies, experiences, testimonials, projects };
