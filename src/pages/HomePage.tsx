import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="space-y-8">
      <motion.section 
        className="py-12 md:py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-primary-500">Reda Gaber</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          Backend Developer in training, learning to build robust server-side applications with Node.js and MongoDB.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg">
            <Link to="/portfolio" className="flex items-center gap-2">
              View My Work <ArrowRight size={20} />
            </Link>
          </Button>
          <Button variant="secondary" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </motion.section>

      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <h3 className="text-xl font-semibold mb-3">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate backend development student, focusing on mastering Node.js and MongoDB to create efficient APIs and database systems. I love solving technical challenges and learning new technologies.
            </p>
            <Link to="/about" className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-1">
              Learn more <ArrowRight size={16} />
            </Link>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <h3 className="text-xl font-semibold mb-3">Latest Projects</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Check out my learning projects, including simple REST APIs, Node.js applications, and MongoDB database integrations, showcasing my growing backend skills.
            </p>
            <Link to="/portfolio" className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-1">
              See projects <ArrowRight size={16} />
            </Link>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="h-full">
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I offer beginner-level backend development services, including building simple APIs, setting up databases with MongoDB, and assisting with Node.js projects.
            </p>
            <Link to="/services" className="text-primary-500 hover:text-primary-600 inline-flex items-center gap-1">
              View services <ArrowRight size={16} />
            </Link>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section 
        className="py-8 text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/Reda-Gaber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/reda-gaber-3875b6325/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;