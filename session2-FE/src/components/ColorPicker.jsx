// ColorPicker Component - Main App
// Demonstrates: useState, onClick, onChange, updater functions

import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  // useState hook - managing color state
  const [selectedColor, setSelectedColor] = useState('#667eea');
  const [redValue, setRedValue] = useState(102);
  const [greenValue, setGreenValue] = useState(126);
  const [blueValue, setBlueValue] = useState(234);
  const [colorHistory, setColorHistory] = useState([]);

  // onChange event handler - updates color when sliders change
  const handleColorChange = (colorType, value) => {
    const numValue = parseInt(value);
    
    // Using updater function pattern
    if (colorType === 'red') {
      setRedValue(numValue);
    } else if (colorType === 'green') {
      setGreenValue(numValue);
    } else if (colorType === 'blue') {
      setBlueValue(numValue);
    }

    // Update selected color using RGB values
    const newColor = `rgb(${colorType === 'red' ? numValue : redValue}, ${colorType === 'green' ? numValue : greenValue}, ${colorType === 'blue' ? numValue : blueValue})`;
    setSelectedColor(newColor);
  };

  // onClick event handler - saves color to history
  const handleSaveColor = () => {
    // Using updater function with previous state (spread operator)
    setColorHistory(prevHistory => [...prevHistory, selectedColor]);
  };

  // onClick event handler - clears history
  const handleClearHistory = () => {
    setColorHistory([]);
  };

  // onClick event handler - selects a color from history
  const handleSelectFromHistory = (color) => {
    setSelectedColor(color);
    // Extract RGB values from the color string
    const rgbMatch = color.match(/\d+/g);
    if (rgbMatch) {
      setRedValue(parseInt(rgbMatch[0]));
      setGreenValue(parseInt(rgbMatch[1]));
      setBlueValue(parseInt(rgbMatch[2]));
    }
  };

  // Convert RGB to hex
  const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  return (
    <div className="color-picker-container">
      <h2 className="component-title">🎨 Color Picker App</h2>
      <p className="component-description">
        Demonstrates: useState hook, onClick events, onChange events, and updater functions
      </p>

      <div className="color-picker-content">
        {/* Color Display Area */}
        <div className="color-display-section">
          <div 
            className="color-preview" 
            style={{ backgroundColor: selectedColor }}
          >
            <div className="color-info">
              <p className="color-rgb">{selectedColor}</p>
              <p className="color-hex">{rgbToHex(redValue, greenValue, blueValue)}</p>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="controls-section">
          {/* Red Slider */}
          <div className="slider-group">
            <label htmlFor="red-slider">
              Red: <span className="slider-value">{redValue}</span>
            </label>
            <input
              id="red-slider"
              type="range"
              min="0"
              max="255"
              value={redValue}
              onChange={(e) => handleColorChange('red', e.target.value)}
              className="color-slider red-slider"
            />
          </div>

          {/* Green Slider */}
          <div className="slider-group">
            <label htmlFor="green-slider">
              Green: <span className="slider-value">{greenValue}</span>
            </label>
            <input
              id="green-slider"
              type="range"
              min="0"
              max="255"
              value={greenValue}
              onChange={(e) => handleColorChange('green', e.target.value)}
              className="color-slider green-slider"
            />
          </div>

          {/* Blue Slider */}
          <div className="slider-group">
            <label htmlFor="blue-slider">
              Blue: <span className="slider-value">{blueValue}</span>
            </label>
            <input
              id="blue-slider"
              type="range"
              min="0"
              max="255"
              value={blueValue}
              onChange={(e) => handleColorChange('blue', e.target.value)}
              className="color-slider blue-slider"
            />
          </div>

          {/* Action Buttons - onClick events */}
          <div className="button-group">
            <button 
              onClick={handleSaveColor}
              className="action-button save-button"
            >
              💾 Save Color
            </button>
            <button 
              onClick={handleClearHistory}
              className="action-button clear-button"
            >
              🗑️ Clear History
            </button>
          </div>
        </div>

        {/* Color History */}
        {colorHistory.length > 0 && (
          <div className="color-history">
            <h3>Saved Colors:</h3>
            <div className="history-colors">
              {colorHistory.map((color, index) => (
                <div
                  key={index}
                  className="history-color-item"
                  style={{ backgroundColor: color }}
                  onClick={() => handleSelectFromHistory(color)}
                  title="Click to select this color"
                >
                  <span className="history-index">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPicker;

