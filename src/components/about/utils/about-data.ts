import { MindtreeLogo2, SCLogo, YaraLogo } from "../../../assets";

export const statsData = [
  { id: 1, icon: "🚀", number: "10+", label: "Projects Completed" },
  { id: 2, icon: "💼", number: "7+", label: "Years Experience" },
  { id: 3, icon: "⭐", number: "100%", label: "Client Satisfaction" },
  { id: 4, icon: "🔧", number: "15+", label: "Technologies" },
  { id: 5, icon: "🏆", number: "10+", label: "Awards & Certifications" },
  { id: 6, icon: "🌍", number: "5+", label: "Countries Served" },
];
export   const experiences = [
    {
      id: "I",
      title: "Software Developer",
      company: "Yara International",
      duration: "Jul 2021 - Present",
      location: "Bengaluru, Karnataka, India",
      description:
        "Developing enterprise-level software solutions for agricultural technology.",
      achievements: [
        "Led the migration of a web application, improving performance and enhancing the user experience.",
        "Built a farmer-facing web app that automated growth stage calendars, boosting crop yields by 20%.",
        "Created reusable Storybook UI components, streamlining the development process and maintaining design consistency.",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      image: YaraLogo,
    },
    {
      id: "II",
      title: "Senior Software Engineer",
      company: "Mindtree · Full-time",
      duration: "Jun 2019 - Jun 2021",
      location: "Bengaluru, India",
      description:
        "Led frontend development for multiple client projects and implemented CI/CD pipelines.",
      achievements: [
        "Built reusable UI components that are used across the project.",
        "Architected scalable React typescript applications for 100k+ users.",
        "Developed search module with autosuggestion and recent searches is being used across 45+ countries by 100k+ users.",
      ],
      technologies: ["React", "TypeScript", "Jenkins", "Redux", "MongoDB"],
      image: MindtreeLogo2,
    },
    {
      id: "III",
      title: "Frontend Developer",
      company: "Startups Club Services",
      duration: "Apr 2018 - May 2019",
      location: "Bengaluru, India",
      description:
        "Built responsive user interfaces for startup products using React.js.",
      achievements: [
        "Engineered React migration from jQuery, boosting performance 50% and productivity 65%.",
        "Designed routing architecture for 50+ enterprise pages with conditional layouts and auth.",
        "Developed social platform with real-time interactions and nested comments for 10K+ users.",
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
      image: SCLogo,
    },
  ];