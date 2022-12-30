import { ThemeProvider } from '../App';
import React from 'react';

export default function () {
  const { currentTheme, toggleTheme, name } = React.useContext(ThemeProvider);
  return {
    currentTheme,
    toggleTheme,
    name,
  };
}
