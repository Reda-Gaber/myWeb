import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import servicesData from '../data/servicesData.tsx';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="space-y-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">Services</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I specialize in backend development services to create scalable and efficient server-side solutions, tailored to your project needs.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map(service => (
          <motion.div key={service.id} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full w-fit mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
          <div className="md:flex justify-between items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-3">Ready to build your backend?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Let's work together to develop robust APIs and database solutions for your application. Contact me to kickstart your backend project.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-success-500" />
                  <span>Free consultation to discuss your backend requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-success-500" />
                  <span>Tailored backend solutions for your application</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-success-500" />
                  <span>Ongoing support for your backend development needs</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ServicesPage;