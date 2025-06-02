import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

export type ThemeName = 
  | 'dark'
  | 'light';
  // | 'blue'
  // | 'green'
  // | 'purple'
  // | 'orange'
  // | 'monochrome'
  // | 'retro';

export type Direction = 'ltr' | 'rtl';

interface ThemeContextType {
  theme: ThemeName;
  direction: Direction;
  setTheme: (theme: ThemeName) => void;
  toggleDirection: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const themes: Record<ThemeName, { 
//   primary: string;
//   secondary: string;
//   accent: string;
//   background: string;
//   card: string;
//   text: string;
//   mutedText: string;
//   border: string;
// }> = {
//   dark: {
//     primary: '#4361ea',
//     secondary: '#2f88ca',
//     accent: '#ec4c41',
//     background: '#111827',
//     card: '#1f2937',
//     text: '#f3f4f6',
//     mutedText: '#9ca3af',
//     border: '#374151',
//   },
//   light: {
//     primary: '#4361ea',
//     secondary: '#2f88ca',
//     accent: '#ec4c41',
//     background: '#f9fafb',
//     card: '#ffffff',
//     text: '#111827',
//     mutedText: '#6b7280',
//     border: '#e5e7eb',
//   },
//   blue: {
//     primary: '#3b82f6',
//     secondary: '#06b6d4',
//     accent: '#f97316',
//     background: '#eff6ff',
//     card: '#ffffff',
//     text: '#1e3a8a',
//     mutedText: '#64748b',
//     border: '#bfdbfe',
//   },
//   green: {
//     primary: '#10b981',
//     secondary: '#059669',
//     accent: '#8b5cf6',
//     background: '#ecfdf5',
//     card: '#ffffff',
//     text: '#064e3b',
//     mutedText: '#64748b',
//     border: '#a7f3d0',
//   },
//   purple: {
//     primary: '#8b5cf6',
//     secondary: '#6d28d9',
//     accent: '#ec4899',
//     background: '#f5f3ff',
//     card: '#ffffff',
//     text: '#4c1d95',
//     mutedText: '#64748b',
//     border: '#ddd6fe',
//   },
//   orange: {
//     primary: '#f97316',
//     secondary: '#ea580c',
//     accent: '#3b82f6',
//     background: '#fff7ed',
//     card: '#ffffff',
//     text: '#7c2d12',
//     mutedText: '#64748b',
//     border: '#fed7aa',
//   },
//   monochrome: {
//     primary: '#525252',
//     secondary: '#737373',
//     accent: '#262626',
//     background: '#fafafa',
//     card: '#ffffff',
//     text: '#171717',
//     mutedText: '#737373',
//     border: '#e5e5e5',
//   },
//   retro: {
//     primary: '#f59e0b',
//     secondary: '#10b981',
//     accent: '#ef4444',
//     background: '#fffbeb',
//     card: '#fef3c7',
//     text: '#92400e',
//     mutedText: '#78716c',
//     border: '#fde68a',
//   }
// };

interface ThemeProviderProps {
  children: ReactNode;
}
import { themes } from "../data/themes";
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>('dark');
  const [direction, setDirection] = useState<Direction>('ltr');

  useEffect(() => {
    // Load theme from localStorage on initial mount
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    const savedDirection = localStorage.getItem('direction') as Direction;
    
    if (savedTheme && Object.keys(themes).includes(savedTheme)) {
      setThemeState(savedTheme);
    }
    
    if (savedDirection === 'rtl') {
      setDirection('rtl');
    }
  }, []);

  useEffect(() => {
    // Apply theme changes
    document.documentElement.classList.remove(...Object.keys(themes));
    document.documentElement.classList.add(theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Apply custom CSS variables for the selected theme
    const themeColors = themes[theme];
    Object.entries(themeColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Apply direction changes
    if (direction === 'rtl') {
      document.documentElement.dir = 'rtl';
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.classList.remove('rtl');
    }

    // Save to localStorage
    localStorage.setItem('direction', direction);
  }, [direction]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  const toggleDirection = () => {
    setDirection(prev => prev === 'ltr' ? 'rtl' : 'ltr');
  };

  return (
    <ThemeContext.Provider value={{ theme, direction, setTheme, toggleDirection }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};