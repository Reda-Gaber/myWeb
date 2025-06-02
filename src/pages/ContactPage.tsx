import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submission state after a few seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
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
        <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? Fill out the form below or use any of the provided contact methods.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="md:col-span-2">
          <Card>
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-md mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <p className="font-medium">Thank you for your message!</p>
                <p>I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.name ? 'border-error-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${errors.email ? 'border-error-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full rounded-md border ${errors.message ? 'border-error-500' : 'border-gray-300 dark:border-gray-700'} bg-white dark:bg-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-primary-500" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:redagaber.enginner@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                    redagaber.enginner@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-primary-500" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+201201371335" className="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                    01201371335
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-primary-500" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Victoria - Alexandria
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h2 className="text-xl font-semibold mb-4">Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Reda-Gaber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/reda-gaber-3875b6325/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;