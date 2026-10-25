import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * ThemeToggle Component
 * Consumes ThemeContext to toggle between Dark (Royal Slate) and Light Mode.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <FiSun className="theme-icon sun" size={17} />
          <span className="theme-label">Light</span>
        </>
      ) : (
        <>
          <FiMoon className="theme-icon moon" size={17} />
          <span className="theme-label">Dark</span>
        </>
      )}
    </button>
  );
}
