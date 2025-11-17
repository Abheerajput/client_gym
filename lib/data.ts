export const personalInfo = {
  name: "Abhishek Rajput",
  tagline: "Full Stack Developer | MERN & Next.js Specialist",
  email: "abhishektanwer013@gmail.com",
  phone: "8278224150",
  location: "Hisar,Haryana",
  bio: "Passionate Full Stack Developer with 1+ years of experience building scalable web applications. I specialize in the MERN stack and Next.js, creating seamless user experiences and robust backend systems. I'm committed to writing clean, maintainable code and staying current with the latest web technologies.",
  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  resume: "/resume.pdf"
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/abhishek-rajput-248b29283/",
  github: "https://github.com/Abheerajput", 
  // twitter: "https://twitter.com/johnsmith",
  instagram: "https://www.instagram.com/abhee_tanwar/"
};

export const skills = [
  { name: "React", level: 95, icon: "⚛️" },
  { name: "Next.js", level: 90, icon: "▲" },
  { name: "Node.js", level: 88, icon: "🟢" },
  { name: "MongoDB", level: 85, icon: "🍃" },
  { name: "Tailwind CSS", level: 92, icon: "🎨" },
  { name: "TypeScript", level: 87, icon: "📘" },
  { name: "Nest.js", level: 82, icon: "🔺" },
  { name: "JS", level: 80, icon: "" }
];

export const timeline = [
  {
    year: "2024 - Present",
    title: "Full Stack Developer",
    company: "Delaine",
    description: "Leading development of scalable web applications using MERN stack and Next.js. Mentoring  developers and architecting complex systems."
  },
  // {
  //   year: "2021 - 2023", 
  //   title: "Full Stack Developer",
  //   company: "Digital Solutions Co.",
  //   description: "Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality software solutions."
  // },
  // {
  //   year: "2019 - 2021",
  //   title: "Frontend Developer",
  //   company: "Creative Web Studio",
  //   description: "Built interactive user interfaces using React and modern CSS frameworks. Focused on performance optimization and responsive design."
  // },
  // {
  //   year: "2015 - 2019",
  //   title: "Computer Science Degree",
  //   company: "University of California",
  //   description: "Bachelor's degree in Computer Science with focus on software engineering and web technologies."
  // }
];

export const projects = [
  {
    id: 1,
    title: "Health & Wellness",
    description: " Repxx Is your all-in-one fitness and wellness platform built for athletes, bodybuilders, and fitness enthusiasts. We combine science and strength through expert-backed workout programs, nutrition plans, and supplement education.",
    image: "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg",
    technologies: ["React", "Node.js", "MongoDB","Tailwind css"],
    category: "MERN",
    liveDemo: "https://repxx.in/",
    // github: "https://github.com/johnsmith/ecommerce-platform"
  },
  {
    id: 2,
    title: "Regency Wills",
    description: "a UK-based online platform that makes creating legal Wills, Lasting Powers of Attorney (LPAs), and Trusts simple and accessible. The platform guides users through a clear, step-by-step process to ensure everything is done properly and in line with the law.",
    image: "https://media.istockphoto.com/id/1673747864/photo/client-was-listening-to-a-lawyer-advising-explaining-the-details-of-the-proceeding.jpg?s=612x612&w=0&k=20&c=ZC5EKe6Ce9MLnN4ryjBYPpC8gA36_iD_5fNu4egq3Q0=",
    technologies: ["Next.js", "TypeScript", "Tailwind css", "Mongo Db"],
    category: "Next.js",
    liveDemo: "https://regencywills.co.uk/ ",
    // github: "https://github.com/johnsmith/task-manager"
  },
  {
    id: 3,
    title: "Loan Management & Role-Based Platform",
    description: " Developed a loan management web application that connects borrowers and lenders through a role-based onboarding system. Users can register as Borrower, Lender, Lawyer, or Key Partner, each with customized dashboards and features.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9E_BgXZ-ycqMyPOJ9ZBDSf8sN8pk_1L5vrg&s",
    technologies: ["React", "node.js", "Express", "MongoDB"],
    category: "Web Development",
    liveDemo: "https://borrowweb.vercel.app/",
    // github: "https://github.com/johnsmith/social-dashboard"
  },
  {
    id: 4,
    title: "Ride Booking & Matching Backend (Uber-like System)",
    description: "Developed a ride-booking backend system inspired by Uber, enabling real-time ride creation, driver assignment, and trip management. Implemented user and driver authentication, ride request matching, and live status updates using RESTful APIs. The system handles ride lifecycle events — from ride request, driver acceptance, to completion — ensuring smooth communication between drivers and passengers.",
    image: "https://www.sapphiresolutions.net/blog/wp-content/uploads/2022/07/Top-10-taxi-booking-apps.png",
    technologies: ["node.js", "Express", "mongodb", "Autorize.net"],
    category: "Next.js",
    liveDemo: "https://play.google.com/store/apps/details?id=com.ubah_user&hl=en_IN",
    github: "https://github.com/johnsmith/real-estate-portal"
  },
  {
    id: 5,
    title: "RKL Law and Fincen – Legal & Compliance Website",
    description: "Designed and developed a professional web platform for RKL Law and Fincen, a law firm specializing in Business Law, BOIR Compliance, and Immigration Law. The website highlights the firm’s expertise and provides clients with an intuitive way to connect for consultations, submit inquiries, and explore key practice areas.",
    image: "https://img.freepik.com/free-photo/gavel-scales-justice-law-books_23-2151998158.jpg?semt=ais_hybrid&w=740&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "MERN",
    // liveDemo: "https://lms-demo.example.com",
    github: "https://github.com/johnsmith/learning-management"
  },
  {
    id: 6,
    title: "Admin Panel Development",
    description: "Designed and developed 5–8 scalable admin panels for various web applications, enabling efficient data management, analytics visualization, and user control. Implemented role-based authentication, CRUD operations, and API integration for real-time updates.",
    image: "https://adminlte.io/uploads/images/blog/05/027-Gentelella-Alela-colorlib.com_.png",
    technologies: ["Next.js", "TypeScript", "Chart.js", "React.js"],
    category: "Web Development",
    // liveDemo: "https://weather-app-demo.example.com",
    // github: "https://github.com/johnsmith/weather-analytics"
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.",
    icon: "🌐"
  },
  {
    id: 2,
    title: "Full Stack Projects",
    description: "End-to-end development solutions including frontend, backend, database design, and deployment for complete web applications.",
    icon: "⚡"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Modern, responsive user interfaces with focus on usability, accessibility, and conversion optimization using design systems.",
    icon: "🎨"
  },
  {
    id: 4,
    title: "Custom Solutions",
    description: "Tailored software solutions to meet specific business requirements, from MVP development to enterprise applications.",
    icon: "🔧"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "John delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Startup Founder",
    content: "Working with John was a game-changer for our startup. He built our entire platform from scratch and provided valuable insights throughout the development process. Highly recommended!",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Director",
    content: "John's ability to translate complex designs into functional, responsive websites is impressive. He's reliable, communicative, and delivers high-quality code every time.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  }
];