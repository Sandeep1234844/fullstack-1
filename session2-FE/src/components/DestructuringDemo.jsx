// DestructuringDemo Component
// Demonstrates: JavaScript Destructuring (Arrays and Objects)

import { useState } from 'react';
import './DestructuringDemo.css';

function DestructuringDemo() {
  const [arrayData] = useState(['Apple', 'Banana', 'Cherry', 'Date']);
  const [objectData] = useState({
    firstName: 'Sandeep',
    lastName: 'Kaur',
    age: 25,
    city: 'Mumbai',
    country: 'India'
  });

  // Array Destructuring Examples
  const [first, second, ...rest] = arrayData;
  const [lastItem] = arrayData.slice(-1);
  const [firstItem, , thirdItem] = arrayData; // Skipping second element

  // Object Destructuring Examples
  const { firstName, lastName, age } = objectData;
  const { city, country, ...otherInfo } = objectData;
  const { firstName: fName, lastName: lName } = objectData; // Renaming

  return (
    <div className="destructuring-demo-container">
      <h2 className="component-title">🎯 Destructuring Demo</h2>
      <p className="component-description">
        Demonstrates: JavaScript Destructuring with arrays and objects
      </p>

      <div className="demo-sections">
        {/* Array Destructuring */}
        <div className="demo-section">
          <h3>Array Destructuring</h3>
          
          <div className="example-box">
            <div className="code-example">
              <p><strong>Original Array:</strong> [{arrayData.map((item, i) => `"${item}"`).join(', ')}]</p>
            </div>

            <div className="destructuring-examples">
              <div className="example-item">
                <code>const [first, second, ...rest] = arrayData</code>
                <div className="result">
                  <p><strong>first:</strong> "{first}"</p>
                  <p><strong>second:</strong> "{second}"</p>
                  <p><strong>rest:</strong> [{rest.map((item, i) => `"${item}"`).join(', ')}]</p>
                </div>
              </div>

              <div className="example-item">
                <code>const [firstItem, , thirdItem] = arrayData</code>
                <div className="result">
                  <p><strong>firstItem:</strong> "{firstItem}"</p>
                  <p><strong>thirdItem:</strong> "{thirdItem}" (skipped second)</p>
                </div>
              </div>

              <div className="example-item">
                <code>const [lastItem] = arrayData.slice(-1)</code>
                <div className="result">
                  <p><strong>lastItem:</strong> "{lastItem}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Object Destructuring */}
        <div className="demo-section">
          <h3>Object Destructuring</h3>
          
          <div className="example-box">
            <div className="code-example">
              <p><strong>Original Object:</strong></p>
              <pre>{JSON.stringify(objectData, null, 2)}</pre>
            </div>

            <div className="destructuring-examples">
              <div className="example-item">
                <code>const {'{'} firstName, lastName, age {'}'} = objectData</code>
                <div className="result">
                  <p><strong>firstName:</strong> "{firstName}"</p>
                  <p><strong>lastName:</strong> "{lastName}"</p>
                  <p><strong>age:</strong> {age}</p>
                </div>
              </div>

              <div className="example-item">
                <code>const {'{'} city, country, ...otherInfo {'}'} = objectData</code>
                <div className="result">
                  <p><strong>city:</strong> "{city}"</p>
                  <p><strong>country:</strong> "{country}"</p>
                  <p><strong>otherInfo:</strong> {JSON.stringify(otherInfo)}</p>
                </div>
              </div>

              <div className="example-item">
                <code>const {'{'} firstName: fName, lastName: lName {'}'} = objectData</code>
                <div className="result">
                  <p><strong>fName:</strong> "{fName}" (renamed from firstName)</p>
                  <p><strong>lName:</strong> "{lName}" (renamed from lastName)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="destructuring-info">
        <h4>Key Points:</h4>
        <ul>
          <li><code>const [first, second] = array</code> - Extract first two elements</li>
          <li><code>const [first, , third] = array</code> - Skip elements</li>
          <li><code>const [...rest] = array</code> - Rest operator collects remaining</li>
          <li><code>const {'{'} name, age {'}'} = object</code> - Extract object properties</li>
          <li><code>const {'{'} name: newName {'}'} = object</code> - Rename while destructuring</li>
          <li>Commonly used in React: <code>const {'{'} value, onChange {'}'} = props</code></li>
        </ul>
      </div>
    </div>
  );
}

export default DestructuringDemo;

