import { ReactLogo, JSLogo, HTMLLogo, TypeScriptLogo, StyledComponentLogo, NestjsLogo, NodejsLogo, PythonLogo, MongoLogo, PostgresLogo, GitLogo, DockerLogo, AWSLogo, JestLogo, FigmaLogo } from "../assets";

// Contact
export const contactContent = `I'm currently looking for new opportunities and interesting
            projects. Whether you have a question, want to collaborate, or just
            want to say hello, I'll do my best to get back to you!`;
export const copyRightsText = "2025. All rights reserved.";

// Hero
export const heroDescription = `Passionate Frontend Developer focused on crafting fast, scalable,
            and intuitive web applications. I turn ideas into elegant,
            high-performing digital experiences with a strong eye for design and
            performance. Let’s collaborate to build outstanding web experiences.`;

// Projects
export const projectsData = [
  {
    id: 1,
    title: "Medium-MS",
    description:
      "A full-stack blogging platform with real-time features, user authentication, and rich text editing capabilities. Built with modern web technologies for seamless content creation and sharing.",
    technologies: ["React", "Nest.js", "PostgreSQL", "TypeORM", "JWT", "Redis"],
    github: "https://github.com/akhtarvahid/medium-ms",
    demo: "https://github.com/akhtarvahid/medium-ms",
    featured: true,
  },
  {
    id: 2,
    title: "Topics Note App",
    description:
      "A collaborative topic management application with real-time updates, categorization, and search functionality. Enables teams to organize and share knowledge efficiently.",
    technologies: [
      "React",
      "GitHub Pages",
      "React Bootstrap",
      "SWR",
      "Context API",
    ],
    github: "https://github.com/akhtarvahid/topics-note",
    demo: "https://akhtarvahid.github.io/topics-note/",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce API",
    description:
      "A robust backend e-commerce solution with product management, user authentication, order processing, and payment integration. Built with scalable architecture in mind.",
    technologies: [
      "Nest.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe API",
    ],
    github: "https://github.com/akhtarvahid/ecommerce",
    demo: "http://ec2-16-171-32-7.eu-north-1.compute.amazonaws.com/api",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive and modern portfolio website showcasing projects and skills with smooth animations and optimized performance across all devices.",
    technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Vite"],
    github: "https://github.com/akhtarvahid/portfolio",
    demo: "https://your-portfolio-link.com", // Add your actual portfolio link
    featured: true,
  },
];



// Skills
export const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, logoUrl: ReactLogo },
        { name: "JavaScript", level: 85, logoUrl: JSLogo },
        { name: "HTML/CSS", level: 95, logoUrl: HTMLLogo },
        { name: "TypeScript", level: 80, logoUrl: TypeScriptLogo },
        { name: "Styled-components", level: 75, logoUrl: StyledComponentLogo },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Nestjs", level: 85, logoUrl: NestjsLogo },
        { name: "Node.js", level: 85, logoUrl: NodejsLogo },
        { name: "Python", level: 80, logoUrl: PythonLogo },
        { name: "MongoDB", level: 75, logoUrl: MongoLogo },
        { name: "PostgreSQL", level: 70, logoUrl: PostgresLogo },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, logoUrl: GitLogo },
        { name: "Docker", level: 70, logoUrl: DockerLogo },
        { name: "AWS", level: 65, logoUrl: AWSLogo },
        { name: "Jest", level: 75, logoUrl: JestLogo },
        { name: "Figma", level: 80, logoUrl: FigmaLogo },
      ],
    },
  ];