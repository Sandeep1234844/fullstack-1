// Counter Component
// Demonstrates: useState, onClick events, updater functions

import { useState } from 'react';
import './Counter.css';

function Counter() {
  // useState hook - managing counter state
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // onClick event handlers with updater functions
  // Using updater function: setCount(prev => prev + step)
  const handleIncrement = () => {
    setCount(prevCount => prevCount + step);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - step);
  };

  // onClick with updater function - reset counter
  const handleReset = () => {
    setCount(0);
  };

  // onChange event handler for step input
  const handleStepChange = (e) => {
    setStep(parseInt(e.target.value) || 1);
  };

  // onClick with updater function - multiply
  const handleMultiply = () => {
    setCount(prevCount => prevCount * 2);
  };

  // onClick with updater function - divide
  const handleDivide = () => {
    setCount(prevCount => Math.floor(prevCount / 2));
  };

  return (
    <div className="counter-container">
      <h2 className="component-title">🔢 Counter with useState & Updater Functions</h2>
      <p className="component-description">
        Demonstrates: useState hook, onClick events, and updater function pattern
      </p>

      <div className="counter-display">
        <div className="count-value">{count}</div>
        <p className="count-label">Current Count</p>
      </div>

      <div className="counter-controls">
        <div className="step-control">
          <label htmlFor="step-input">Step Size:</label>
          <input
            id="step-input"
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
            className="step-input"
          />
        </div>

        <div className="button-row">
          <button onClick={handleDecrement} className="counter-button decrement">
            ➖ Decrement (-{step})
          </button>
          <button onClick={handleIncrement} className="counter-button increment">
            ➕ Increment (+{step})
          </button>
        </div>

        <div className="button-row">
          <button onClick={handleMultiply} className="counter-button multiply">
            ✖️ Multiply by 2
          </button>
          <button onClick={handleDivide} className="counter-button divide">
            ➗ Divide by 2
          </button>
        </div>

        <button onClick={handleReset} className="counter-button reset">
          🔄 Reset to 0
        </button>
      </div>

      <div className="counter-info">
        <p><strong>Updater Function Pattern:</strong></p>
        <code>setCount(prevCount =&gt; prevCount + step)</code>
        <p className="info-note">
          Using updater functions ensures we always use the latest state value,
          even if multiple updates happen quickly.
        </p>
      </div>
    </div>
  );
}

export default Counter;

