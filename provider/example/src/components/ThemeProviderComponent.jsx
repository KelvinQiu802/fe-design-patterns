import React from 'react';
import { ThemeProvider } from '../App';

export default function ThemeProviderComponent({ children }) {
  const [theme, setTheme] = React.useState('light');

  const themes = {
    light: {
      color: 'black',
      backgroundColor: 'white',
    },
    dark: {
      color: 'white',
      backgroundColor: 'black',
    },
  };

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <>
      <ThemeProvider.Provider
        value={{
          currentTheme: themes[theme],
          toggleTheme,
          name: 'Kelvin',
        }}
      >
        {children}
      </ThemeProvider.Provider>
    </>
  );
}
