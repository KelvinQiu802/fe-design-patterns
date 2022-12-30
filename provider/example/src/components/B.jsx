import React from 'react';
import useTheme from '../Hooks/useTheme';

export default function B() {
  const { currentTheme } = useTheme();
  return <div style={currentTheme}>B</div>;
}
