import { CircleDollarSign, Code, Cpu, Database, Layout, LineChart, PenTool, Smartphone } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites built with modern technologies like React, Vue, or Angular. Focus on performance, accessibility, and responsive design.",
    icon: <Code size={24} />
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered design process creating intuitive and engaging interfaces. Includes wireframing, prototyping, and usability testing.",
    icon: <PenTool size={24} />
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with React Native or Flutter. Native-like performance with a single codebase.",
    icon: <Smartphone size={24} />
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    description: "Full-featured online stores with secure payment processing, inventory management, and order fulfillment integration.",
    icon: <CircleDollarSign size={24} />
  },
  {
    id: 5,
    title: "Backend Development",
    description: "Robust server-side applications using Node.js, Python, or Ruby. RESTful APIs, database design, and cloud deployment.",
    icon: <Database size={24} />
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Speed up your existing web applications. Includes code splitting, lazy loading, and infrastructure improvements.",
    icon: <LineChart size={24} />
  },
  {
    id: 7,
    title: "Frontend Architecture",
    description: "Design scalable component systems and state management solutions for large applications. Code quality and maintainability focus.",
    icon: <Layout size={24} />
  },
  {
    id: 8,
    title: "AI Integration",
    description: "Incorporate machine learning and AI capabilities into your applications. From recommendation engines to natural language processing.",
    icon: <Cpu size={24} />
  }
];

export default servicesData;