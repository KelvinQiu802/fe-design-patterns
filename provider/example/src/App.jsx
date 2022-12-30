import './App.css';
import React from 'react';
import A from './components/A';
import B from './components/B';
import ThemeProviderComponent from './components/ThemeProviderComponent';
import C from './components/C';

export const ThemeProvider = React.createContext();

function App() {
  return (
    <div className='App'>
      <ThemeProviderComponent>
        <A />
        <B />
        <C />
      </ThemeProviderComponent>
    </div>
  );
}

export default App;
