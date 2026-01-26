// Main App Component - Session 2
// Demonstrates: Using all components together

import ColorPicker from './components/ColorPicker';
import Counter from './components/Counter';
import FormInput from './components/FormInput';
import SpreadOperatorDemo from './components/SpreadOperatorDemo';
import DestructuringDemo from './components/DestructuringDemo';
import './App.css';

// Import all component CSS
import './components/ColorPicker.css';
import './components/Counter.css';
import './components/FormInput.css';
import './components/SpreadOperatorDemo.css';
import './components/DestructuringDemo.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Sandeep's React Session 2 - useState & Events</h1>
        <p className="subtitle">
          Demonstrating: useState hook, onClick events, onChange events, 
          updater functions, Spread Operator, and Destructuring
        </p>
      </header>

      {/* Color Picker - Main App Requirement */}
      <ColorPicker />

      {/* Counter - useState and onClick with updater functions */}
      <Counter />

      {/* Form Input - onChange and useState */}
      <FormInput />

      {/* Spread Operator Demo */}
      <SpreadOperatorDemo />

      {/* Destructuring Demo */}
      <DestructuringDemo />

      <footer className="app-footer">
        <p>Created by: Sandeep1234844</p>
        <p>Session 2 Frontend Homework - React useState & Events</p>
      </footer>
    </div>
  );
}

export default App;

