import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Card from '../components/ui/Card';
import projectsData, { Project } from '../data/projectsData';

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="space-y-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of my recent projects, demonstrating my skills in web development, 
          design, and problem-solving. Each project represents a unique challenge and solution.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === category 
                ? 'bg-primary-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex gap-3 mt-auto">
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
          
          {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PortfolioPage;