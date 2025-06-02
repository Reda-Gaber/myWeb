import React from 'react';
import { Menu } from 'lucide-react';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import { motion } from 'framer-motion';

interface HeaderProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <motion.header 
      className="bg-white dark:bg-gray-800 shadow-sm z-10"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <Menu size={20} />
          </button>
          
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Personal Dashboard</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <ThemeSwitcher />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;