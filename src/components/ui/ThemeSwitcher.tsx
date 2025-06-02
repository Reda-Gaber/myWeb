import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { ThemeName, useTheme } from '../../contexts/ThemeContext';
import { themes } from '../../data/themes'; // أو المسار الصحيح لمكان themes.ts
import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  // Format theme name for display
  const formatThemeName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 dark:bg-black/20 hover:bg-white/20 dark:hover:bg-black/30 transition-colors duration-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: themes[theme].primary }} />
        <span>{formatThemeName(theme)}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {Object.keys(themes).map((themeName) => (
                <button
                  key={themeName}
                  onClick={() => handleThemeChange(themeName as ThemeName)}
                  className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm ${
                    theme === themeName
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  role="menuitem"
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: themes[themeName as ThemeName].primary }} />
                  <span>{formatThemeName(themeName)}</span>
                  {theme === themeName && <Check size={16} className="ml-auto" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;