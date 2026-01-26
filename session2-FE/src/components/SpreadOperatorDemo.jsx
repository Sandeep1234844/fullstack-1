// SpreadOperatorDemo Component
// Demonstrates: JavaScript Spread Operator

import { useState } from 'react';
import './SpreadOperatorDemo.css';

function SpreadOperatorDemo() {
  const [array1, setArray1] = useState([1, 2, 3]);
  const [array2, setArray2] = useState([4, 5, 6]);
  const [mergedArray, setMergedArray] = useState([]);
  const [object1, setObject1] = useState({ name: 'Sandeep', age: 25 });
  const [object2, setObject2] = useState({ city: 'Mumbai', country: 'India' });
  const [mergedObject, setMergedObject] = useState({});

  // Spread operator with arrays - merging arrays
  const handleMergeArrays = () => {
    // Using spread operator: [...array1, ...array2]
    const merged = [...array1, ...array2];
    setMergedArray(merged);
  };

  // Spread operator - adding element to array
  const handleAddToArray = () => {
    // Using spread operator: [...array1, newElement]
    const newElement = Math.floor(Math.random() * 100);
    setArray1([...array1, newElement]);
  };

  // Spread operator - copying array
  const handleCopyArray = () => {
    // Using spread operator: [...array1]
    const copied = [...array1];
    alert(`Copied array: [${copied.join(', ')}]`);
  };

  // Spread operator with objects - merging objects
  const handleMergeObjects = () => {
    // Using spread operator: {...object1, ...object2}
    const merged = { ...object1, ...object2 };
    setMergedObject(merged);
  };

  // Spread operator - updating object property
  const handleUpdateObject = () => {
    // Using spread operator: {...object1, age: newAge}
    const newAge = object1.age + 1;
    setObject1({ ...object1, age: newAge });
  };

  return (
    <div className="spread-demo-container">
      <h2 className="component-title">📦 Spread Operator Demo</h2>
      <p className="component-description">
        Demonstrates: JavaScript Spread Operator with arrays and objects
      </p>

      <div className="demo-sections">
        {/* Array Spread Examples */}
        <div className="demo-section">
          <h3>Array Spread Operator</h3>
          
          <div className="example-box">
            <div className="code-example">
              <p><strong>Array 1:</strong> [{array1.join(', ')}]</p>
              <p><strong>Array 2:</strong> [{array2.join(', ')}]</p>
            </div>

            <div className="button-group">
              <button onClick={handleMergeArrays} className="demo-button">
                Merge Arrays: [...array1, ...array2]
              </button>
              <button onClick={handleAddToArray} className="demo-button">
                Add Element: [...array1, newElement]
              </button>
              <button onClick={handleCopyArray} className="demo-button">
                Copy Array: [...array1]
              </button>
            </div>

            {mergedArray.length > 0 && (
              <div className="result-box">
                <strong>Merged Result:</strong> [{mergedArray.join(', ')}]
              </div>
            )}
          </div>
        </div>

        {/* Object Spread Examples */}
        <div className="demo-section">
          <h3>Object Spread Operator</h3>
          
          <div className="example-box">
            <div className="code-example">
              <p><strong>Object 1:</strong> {JSON.stringify(object1, null, 2)}</p>
              <p><strong>Object 2:</strong> {JSON.stringify(object2, null, 2)}</p>
            </div>

            <div className="button-group">
              <button onClick={handleMergeObjects} className="demo-button">
                Merge Objects: {...object1, ...object2}
              </button>
              <button onClick={handleUpdateObject} className="demo-button">
                Update Property: {...object1, age: newAge}
              </button>
            </div>

            {Object.keys(mergedObject).length > 0 && (
              <div className="result-box">
                <strong>Merged Result:</strong>
                <pre>{JSON.stringify(mergedObject, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="spread-info">
        <h4>Key Points:</h4>
        <ul>
          <li><code>[...array]</code> - Creates a shallow copy of an array</li>
          <li><code>[...array1, ...array2]</code> - Merges two arrays</li>
          <li><code>{`{...object}`}</code> - Creates a shallow copy of an object</li>
          <li><code>{`{...obj1, ...obj2}`}</code> - Merges two objects</li>
          <li>Spread operator is essential for React state updates!</li>
        </ul>
      </div>
    </div>
  );
}

export default SpreadOperatorDemo;

