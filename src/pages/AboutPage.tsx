import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ProgressBar from '../components/ui/ProgressBar';

const AboutPage = () => {
  const skills = [
    { name: 'JavaScript', percentage: 75 },
    { name: 'Node.js', percentage: 70 },
    { name: 'TypeScript', percentage: 70 },
    { name: 'MongoDB', percentage: 65 },
    { name: 'Express.js', percentage: 60 },
    { name: 'REST APIs', percentage: 70 },
    { name: 'Git & GitHub', percentage: 80 },
    { name: 'SQL', percentage: 60 },
    { name: 'Backend Architecture', percentage: 55 },
  ];

  const experiences = [
    {
      company: 'Personal Projects',
      position: 'Backend Developer (Learning)',
      period: '2024 - Present',
      description: 'Building REST APIs and database integrations using Node.js, Express, and MongoDB as part of my learning journey.'
    },
    {
      company: 'Online Courses & Bootcamps',
      position: 'Student Developer',
      period: '2023 - 2024',
      description: 'Completed various backend development courses, focusing on Node.js, MongoDB, and API development.'
    },
  ];

  const educations = [
    {
      institution: 'Your University/Institute',
      degree: 'Studying Computer Science (or related field)',
      period: '202X - Present',
      description: 'Learning core computer science concepts with a focus on backend development and database management.'
    },
    {
      institution: 'Online Learning Platform (e.g., Coursera, Udemy)',
      degree: 'Backend Development Courses',
      period: '2023 - 2024',
      description: 'Completed certifications in Node.js, MongoDB, and Express.js to build backend skills.'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        
        <Card className="mb-8">
          <div className="md:flex gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img 
                src="/img/me.jpg" 
                alt="Reda Gaber" 
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 flex justify-center gap-4">
                <a 
                  href="https://github.com/Reda-Gaber" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/reda-gaber-3875b6325/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:redagaber.enginner@gmail.com" 
                  className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Reda Gaber</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">Backend Developer (In Training)</p>
              <div className="mb-6">
                <p className="mb-4">
                  I'm a backend development student passionate about learning to build robust server-side applications using Node.js, MongoDB, and Express.js.
                </p>
                <p className="mb-4">
                  My focus is on mastering APIs, database management, and backend architecture. I'm dedicated to writing clean, efficient code and continuously improving my skills through projects and online courses.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, reading about software architecture, and working on personal projects. I'm based in [Your City], and eager to grow as a backend developer.
                </p>
              </div>
              <Button variant="primary" className="inline-flex items-center gap-2">
                <Download size={18} /> Download Resume
              </Button>
            </div>
          </div>
        </Card>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <Card>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <ProgressBar 
                  key={index} 
                  label={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <Card>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className={index !== experiences.length - 1 ? "pb-6 border-b dark:border-gray-700" : ""}>
                  <h3 className="text-lg font-semibold">{exp.position}</h3>
                  <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <Card>
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <div key={index} className={index !== educations.length - 1 ? "pb-6 border-b dark:border-gray-700" : ""}>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-primary-600 dark:text-primary-400">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.section>
    </div>
  );
};

export default AboutPage;