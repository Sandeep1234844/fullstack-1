// App Component - Session 3
// Shows both Activity 1 (Counter) and Activity 2 (ContactUs)

import { useState } from 'react';
import Counter from './Counter';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('contact'); // 'counter' or 'contact'

  return (
    <div className="app-container">
      <nav className="activity-nav">
        <button 
          onClick={() => setCurrentView('counter')}
          className={currentView === 'counter' ? 'active' : ''}
        >
          Activity 1: Counter with Theme
        </button>
        <button 
          onClick={() => setCurrentView('contact')}
          className={currentView === 'contact' ? 'active' : ''}
        >
          Activity 2: Contact Us Form
        </button>
      </nav>

      {currentView === 'counter' && <Counter />}
      {currentView === 'contact' && <ContactUs />}
    </div>
  );
}

export default App;
