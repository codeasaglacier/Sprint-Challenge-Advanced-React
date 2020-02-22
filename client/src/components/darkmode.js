import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const DarkMode = () => {
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const [darkMode, setDarkMode] = useDarkMode( toggleMode );
  return (
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
  );
};

export default DarkMode;