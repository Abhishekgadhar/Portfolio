import {
  
   mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
   Quiz,
   Diabetes,   
   book,     
   Expressjs , 
   model,           

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
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Express js",
    icon: Expressjs ,
  },
];

const experiences = [
  {
    title: "BOOK MERN STACK",
    company_name: "TCE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with my teammates and developed a full stack Application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "QUIZ APP",
    company_name: "Coding Key LLP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2023",
    points: [
      "Developing and maintaining quiz applications using Java and Firebase.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Disease Detection Application",
    company_name: "Mini Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2023 - Oct 2023",
    points: [
      "Developed a web application using Support Vector Machine (SVM) and Streamlit to predict the likelihood of diabetes, Parkinson's disease, and heart disease",
      "Based on the provided data, it generates diagnostic insights and estimates potential health risks.",
      "The intuitive interface allows users to input data and receive disease predictions within 5 seconds, with an accuracy rate of over 85%, ensuring a smooth and efficient user experience.",
      
    ],
  },
  {
    title: "Airport Mangemnet System",
    company_name: "DBMS Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Designed and developed a comprehensive airport management system to streamline airport operations and enhance efficiency.",
      "Implemented features for flight scheduling, ticketing, and passenger management to improve operational workflows.",
      "Developed user-friendly interfaces for both passengers and airport staff to facilitate seamless interactions..",
      "Optimized the system for scalability and reliability, handling high volumes of transactions and data efficiently.",
    ],
  },
  {
    title: "Virtual Try-On ",
    company_name: "Final Year Project",
    icon: model,
    iconBg: "#E6DEDD",
    date: "July 2024 - Ongoing",
    points: [
      "Developed the CloTH-VTON model to improve virtual try-on by accurately fitting clothes on users.",
      "Used advanced techniques to make virtual try-ons look more realistic and natural.",
      "Implemented features for better cloth transformation and fitting on different body types.",
      "Enhanced the model to provide real-time, high-quality virtual try-on experiences.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "The quiz application created was user-friendly and engaging. It made the learning process enjoyable and efficient for everyone in the class",
    name: "Harish",
    designation: "Associate Professor",
    company: "CSE Department",
    image: "img/Harish.jpg",
  },
 
];

const projects = [
  {
    name: "Book Website",
    description:
      "Developed a comprehensive book management website using the MERN stack (MongoDB, Express, React, Node.js) to facilitate easy addition, removal, and management of books.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/Abhishekgadhar/BookMernStack",
  },
  {
    name: "Disease Detection Website",
    description:
      "Developed a web application using Support Vector Machine (SVM) and Streamlit to predict the likelihood of diabetes, Parkinson's disease, and heart disease",
    tags: [
      {
        name: "Steamlit",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "SVM",
        color: "pink-text-gradient",
      },
    ],
    image: Diabetes,
    source_code_link: "https://github.com/Abhishekgadhar/Disease-Diagnosis-and-Recommendation-System.git",
  },
  {
    name: "Quiz App",
    description:
      "Developed a quiz application that allows users to take quizzes on various topics, track their scores, and review their performance. The application includes features such as user authentication, quiz creation, and detailed result.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Development",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: Quiz,
    source_code_link: "https://github.com/Abhishekgadhar/Quiz_Android_App",
  },
];

export { services, technologies,  testimonials ,experiences,  projects };
