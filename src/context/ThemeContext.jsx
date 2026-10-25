import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * ThemeContext
 * Global theme state management adhering to React Context API syllabus.
 * Manages 'dark' and 'light' theme state, sets data-theme attribute on <html>,
 * and synchronizes user preference with localStorage.
 */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Read from localStorage on initial render; default to 'dark' for royal restaurant theme
    const savedTheme = localStorage.getItem('qk_theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    // Apply data-theme attribute to <html> root for CSS variable cascading
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qk_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
