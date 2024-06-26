import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  buttonColor: '#ddd',
  buttonTextColor: '#000',
};

const darkTheme = {
  backgroundColor: '#333',
  textColor: '#fff',
  buttonColor: '#555',
  buttonTextColor: '#fff',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
