// Resume data - single source of truth

export const profile = {
  name: "Abhiram Hirde",
  initials: "AH",
  role: "Full-Stack Engineer",
  subRole: "// MERN · Machine Learning · Building things on the web",
  location: "Pune, India",
  email: "abhiramhirde2004@gmail.com",
  phone: "+91 9284871666",
  linkedin: "https://linkedin.com/in/abhiram-hirde-1b96162ba/",
  github: "https://github.com/abhiramhirde",
  resumeUrl: "/assets/Abhiram_Hirde_Resume.pdf",
  status: "Open to opportunities · 2026 grad",
  bio: "Engineering student at PICT, Pune — currently obsessed with shipping clean, fast, full-stack interfaces and exploring the edge where ML meets product. I write code that feels intentional, not generated.",
};

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript", "Python", "C++", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    group: "Databases & APIs",
    items: ["MongoDB", "SQL", "REST APIs", "Postman"],
  },
  {
    group: "Machine Learning",
    items: [
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
  {
    group: "Tools & Cloud",
    items: ["Git", "GitHub", "VS Code", "AWS", "Vercel"],
  },
  {
    group: "Core CS",
    items: [
      "DBMS",
      "Operating Systems",
      "OOP",
      "Computer Networks",
      "SDLC",
    ],
  },
];

export const projects = [
  {
    id: "01",
    name: "CureConnect",
    tag: "Healthcare · Full-Stack",
    summary:
      "Doctor appointment booking platform with onboarding, scheduling, availability management and integrated payments.",
    details: [
      "Implemented doctor onboarding, authentication and appointment scheduling flows",
      "Integrated Razorpay for payments and automated notifications",
      "Designed RESTful APIs and optimized MongoDB queries for low-latency reads",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Razorpay"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwYXBwb2ludG1lbnQlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzgyODA2OTY2fDA&ixlib=rb-4.1.0&q=85",
    year: "2024",
    span: "lg:col-span-8",
  },
  {
    id: "02",
    name: "StaySmart",
    tag: "Travel · MERN",
    summary:
      "Full-stack hotel booking app with secure auth, room availability and Stripe-powered checkout.",
    details: [
      "Built listings, room availability and user dashboard modules",
      "Integrated Clerk authentication and Stripe webhooks for booking confirmation",
      "Implemented secure user-lifecycle webhooks and RESTful APIs",
    ],
    stack: ["MongoDB", "Express", "React", "Node", "Clerk", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1729860646477-c0f603c0300b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmclMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXJrfGVufDB8fHx8MTc4MjgwNjk2Nnww&ixlib=rb-4.1.0&q=85",
    year: "2024",
    span: "lg:col-span-4",
  },
  {
    id: "03",
    name: "Dynamic Asset Modeling",
    tag: "Machine Learning · Finance",
    summary:
      "ML pipelines to predict financial asset price trends with feature engineering and ensemble models.",
    details: [
      "Performed data preprocessing, EDA and feature importance analysis",
      "Built ML pipelines using Lasso, Random Forest and XGBoost regressors",
      "Tuned hyperparameters via GridSearchCV for best validation performance",
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFic3RyYWN0fGVufDB8fHx8MTc4MjgwNjk2Nnww&ixlib=rb-4.1.0&q=85",
    year: "2024",
    span: "lg:col-span-12",
  },
];

export const experience = [
  {
    role: "Frontend Development Intern",
    company: "Innovative Staffing Solutions",
    location: "Remote",
    period: "Mar 2025 — May 2025",
    bullets: [
      "Designed and shipped multiple responsive web pages using React.js and Tailwind CSS",
      "Built reusable, interactive UI components ensuring consistent design across devices",
      "Optimized performance and ensured cross-browser compatibility for production builds",
    ],
    stack: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
];

export const education = [
  {
    school: "Pune Institute Of Computer Technology",
    degree: "B.E. in Electronics & Telecommunication",
    period: "Jun 2022 — Jun 2026",
    note: "Result Awaited",
  },
  {
    school: "Dr Kalmadi Shamrao Junior College",
    degree: "Higher Secondary Education (HSC)",
    period: "Jun 2020 — Jun 2022",
    note: "Pune, India",
  },
];

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];