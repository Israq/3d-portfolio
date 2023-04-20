import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    //typescript,
    python,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    //docker,
    django,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
   
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
    // {
    //   id: "Resume",
    //   title: "Download Resume",
      
    // },
    
  ];


  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Django Developer",
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
      name: "Python",
      icon: python,
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
      name: "django",
      icon: django,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Engineer(Full time)",
      company_name: "Bizstring.tech",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Januay 2021 - October 2022",
      points: [
        "Developed dynamic web applications using Django(Python) as a Backend Engineer for different business organizations. Orchestrated in multiple projects as project lead which reduced project completion duration.Coordinated with the designing team and clients to make applications workflow more efficient for business growth.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Created dashboards and dynamic features that helped business organizations evaluate their expansion.",
        "experienced in building full-stack web applications as a sole developer. Coordinated with the front-endteam for efficient execution.Deployed applications on the server. Run different tests after production. Reviewing and restructuring code to improve user experience.",
      ],
    },
    {
      title: "Full Stack Developer(Contract)",
      company_name: "Healthtech Startup",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Ferbruary 2017 - March 2020",
      points: [
        "Developed Full Stack Web Application(ecommerce). Designed the workflow of the application.Created user interface according to client's requirement.",
        "Collaborating with product managers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback on the App workflow to achieve more great user experience.",
        "Debugging and reconstruct the app according feedback."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      name: "Tim Berners-Lee",
      designation: "Inventor",
      company: "World Wide Web ",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.",
      name: "Stewart Brand",
      designation: "Writer",
      company: "USCO and Merry Pranksters",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Technology is best when it brings people together.",
      name: "Matt Mullenweg",
      designation: " Social Media Entrepreneur",
      company: " WordPress",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      live_project_link: "https://face-recognition-frontend-cio2.onrender.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  