import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, User, Briefcase, BookOpen, Mail, Settings, X, 
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { direction, toggleDirection } = useTheme();
  
  // Mock profile data - in a real app, this would come from a data file or API
  const profile = {
    name: 'Reda Gaber',
    title: 'Backend Developer',
    image: '/img/me.jpg',
    tagline: 'Junior backend developer passionate about building APIs, working with databases, and learning modern backend tools.'
  };

  const navItems = [
    { to: '/', icon: <Home size={20} />, label: 'Home' },
    { to: '/about', icon: <User size={20} />, label: 'About' },
    { to: '/portfolio', icon: <Briefcase size={20} />, label: 'Portfolio' },
    { to: '/blog', icon: <BookOpen size={20} />, label: 'Blog' },
    { to: '/services', icon: <Settings size={20} />, label: 'Services' },
    { to: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: { 
      x: direction === 'ltr' ? '-100%' : '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && window.innerWidth < 768 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>
    
      {/* Sidebar */}
      <motion.aside
        className={`fixed md:sticky top-0 ${direction === 'ltr' ? 'left-0' : 'right-0'} h-screen w-72 bg-white dark:bg-gray-800 shadow-lg z-30 flex flex-col`}
        variants={sidebarVariants}
        initial={window.innerWidth < 768 ? 'closed' : 'open'}
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center space-x-3">
          </div>
          <button 
            onClick={toggleSidebar} 
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 text-center border-b dark:border-gray-700">
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
            <img 
              src={profile.image} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{profile.title}</p>
          <p className="mt-2 text-sm">{profile.tagline}</p>
        </div>
        
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink 
                  to={item.to}
                  className={({ isActive }) => 
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t dark:border-gray-700">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            © 2025 Reda Gaber. All rights reserved.
          </p>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;