// Counter Component - Final Implementation
// Demonstrates: useState, onClick events, functional updates, theme toggle

import './Counter.css';
import { useState } from 'react';

const Counter = () => {
  // useState for theme management
  const [theme, setTheme] = useState('light');
  
  // useState for counter management
  const [count, setCount] = useState(0);

  // Theme handlers - direct update form
  const setDarkThemeHandler = () => {
    setTheme('dark');
  };

  const setLightThemeHandler = () => {
    setTheme('light');
  };

  // Toggle theme handler - direct update form
  const toggleThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Counter handlers - functional update form (callback)
  // Using callback form ensures we always use the latest state value
  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className={`content ${theme}`}>
      <h1>UseState Component</h1>
      
      {/* Theme Control Buttons */}
      <button onClick={setDarkThemeHandler}>Dark</button>
      <button onClick={setLightThemeHandler}>Light</button>
      <button onClick={toggleThemeHandler}>Toggle Theme</button>
      
      {/* Counter Display */}
      <h2>{count}</h2>
      
      {/* Counter Control Buttons */}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;

