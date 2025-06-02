export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Web",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      demo: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Uses React for the frontend and Firebase for authentication and database.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Web",
    tags: ["React", "Firebase", "Tailwind CSS"],
    links: {
      demo: "https://example.com/taskmanager",
      github: "https://github.com/username/taskmanager"
    }
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A weather application that provides real-time forecasts using the OpenWeatherMap API. Features include location detection, 5-day forecasts, and weather alerts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Web",
    tags: ["JavaScript", "API Integration", "CSS3"],
    links: {
      demo: "https://example.com/weather",
      github: "https://github.com/username/weather"
    }
  },
  {
    id: 4,
    title: "Fitness Tracker Mobile App",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and fitness progress. Built with React Native and integrates with health APIs.",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Mobile",
    tags: ["React Native", "Expo", "Firebase"],
    links: {
      github: "https://github.com/username/fitness-tracker"
    }
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A responsive portfolio website designed to showcase projects and skills. Features a dark/light mode toggle and contact form.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Web",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    links: {
      demo: "https://example.com/portfolio",
      github: "https://github.com/username/portfolio"
    }
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "A dashboard for analyzing social media metrics across multiple platforms. Features data visualization and export functionality.",
    image: "https://images.pexels.com/photos/7011423/pexels-photo-7011423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Web",
    tags: ["React", "D3.js", "API Integration"],
    links: {
      demo: "https://example.com/social-dashboard",
      github: "https://github.com/username/social-dashboard"
    }
  }
];

export default projectsData;