import React from 'react';
import useTheme from '../Hooks/useTheme';

export default function A() {
  const { currentTheme, toggleTheme } = useTheme();
  return (
    <div style={currentTheme} onClick={toggleTheme}>
      A
    </div>
  );
}
