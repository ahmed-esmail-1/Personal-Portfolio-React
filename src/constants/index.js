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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bot,
  mrasim,
  vue,
  laravel,
  expense,
  weather,
  todo,
  jobs,
  wasm,
  landingPage,
  portfolio,
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
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "laravel",
    icon: laravel,
  },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Mrasim",
    icon: mrasim,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Developed a <strong>web platform</strong> named Numo for charities, supporting over 50 institutions live.",
      "Implemented <strong>multi-tenancy</strong> using <strong>Laravel</strong>, incorporating Eloquent ORM, Blade templating, and <strong>RESTful API</strong> design and implementation.",
      "Integrated various payment gateways including <strong>Moyasar</strong>, <strong>Urway</strong>, <strong>MyFatoorah</strong>, <strong>Hyperpay</strong>, and <strong>PayTabs</strong>.",
      "Utilized <strong>Vue.js</strong>  for front-end development and <strong>Tailwind CSS</strong> for styling.",
      "Designed and managed <strong>MySQL</strong> databases, including migrating legacy data and optimizing tables, schemas, and structures.",
      "Employed Git for version control and <strong>Azure DevOps</strong> for deployment, <strong>pipelines, and releases</strong>.",
      "Used <strong>Postman</strong> for API testing and <strong>cPanel</strong> for server management and configuration.",
    ],
  },
  // {
  //   title: ".NET Developer",
  //   company_name: "WasmCSR",
  //   icon: wasm,
  //   iconBg: "#136E85",
  //   date: "Oct 2023 - Jan 2024",
  //   points: [
  //     "Utilized <strong>ASP.NET MVC</strong> to design and develop user-friendly interfaces for web applications, leading to a 40% increase in user engagement and an average session duration of over 5 minutes.",

  //     "Worked with Azure DevOps Server, gaining expertise in its features and optimizing the deployment process to achieve a significant reduction in deployment time.",
  //   ],
  // },
  {
    title: "Software Engineer",
    company_name: "BOT Solutions",
    icon: bot,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Created comprehensive class and use case diagrams for a project proposal, accurately capturing requirements and facilitating effective planning, resulting in a 20% reduction in development time.",
      "Conducted rigorous testing of a web-based system using industry best practices, resulting in a 15% decrease in system bugs and improved overall system quality.",
      "Implemented cutting-edge ERP and CRM systems to streamline internal processes and enhance customer relationship management, resulting in a 25% boost in operational efficiency and a 12% increase in customer retention rates.",
      "Collaborated with cross-functional teams to design detailed Software Requirements Documents (SRS) and actively participated in client meetings to ensure clear project scope and requirements, leading to a 10% increase in project success rate and client satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Job Listing Platform",
    description:
      "A robust web application built with Laravel and PHP, connecting job seekers and employers efficiently. Features include job posting, advanced search filters, and user-friendly dashboards for seamless job management and application processes.",
    tags: [
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Blade",
        color: "pink-text-gradient",
      },
    ],
    image: jobs,
    source_code_link:
      "https://github.com/ahmed-esmail-1/Job-Listing-App-Laravel",
  },
  {
    name: "First Personal Portfolio",
    description:
      "A React-based portfolio showcasing my skills, projects, and experience as a Full-Stack Developer. Highlights include a user-friendly interface with sections for home, skills, projects, and contact information.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ahmed-esmail-1/personal-portfolio",
  },
  {
    name: "Expense Tracker",
    description: "Expense-Tracker in ASP .NET Core MVC",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "blue-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/ahmed-esmail-1/Expense-Tracker",
  },
  {
    name: "Landing Page",
    description: "Just HTML and Tailwind.",
    tags: [
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: landingPage,
    source_code_link: "https://github.com/ahmed-esmail-1/Landing-Page-Tailwind",
  },
  {
    name: "Weather App",
    description: "As crazy as it seems.",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ahmed-esmail-1/weather-app",
  },
  {
    name: "To Do App",
    description: "You gotta start somewhere.",
    tags: [
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/ahmed-esmail-1/Todo-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
