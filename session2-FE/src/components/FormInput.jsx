// FormInput Component
// Demonstrates: useState, onChange event handler

import { useState } from 'react';
import './FormInput.css';

function FormInput() {
  // useState hooks for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    age: ''
  });

  // onChange event handler - updates form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Using updater function with spread operator
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // onClick event handler - form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\n\nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}\nMessage: ${formData.message}`);
  };

  // onClick event handler - reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      age: ''
    });
  };

  return (
    <div className="form-input-container">
      <h2 className="component-title">📝 Form with onChange & useState</h2>
      <p className="component-description">
        Demonstrates: useState hook, onChange event handlers, and controlled inputs
      </p>

      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-group">
          <label htmlFor="name-input">Name:</label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="form-input"
          />
          {formData.name && (
            <p className="input-feedback">✓ You entered: {formData.name}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email-input">Email:</label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="form-input"
          />
          {formData.email && (
            <p className="input-feedback">✓ Email: {formData.email}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age-input">Age:</label>
          <input
            id="age-input"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            min="0"
            max="120"
            className="form-input"
          />
          {formData.age && (
            <p className="input-feedback">✓ Age: {formData.age} years old</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message-input">Message:</label>
          <textarea
            id="message-input"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            rows="4"
            className="form-textarea"
          />
          <p className="char-count">
            Characters: {formData.message.length}
          </p>
        </div>

        <div className="form-actions">
          <button type="submit" className="form-button submit-button">
            📤 Submit Form
          </button>
          <button 
            type="button" 
            onClick={handleReset}
            className="form-button reset-button"
          >
            🔄 Reset
          </button>
        </div>
      </form>

      {/* Live Preview */}
      <div className="form-preview">
        <h3>Live Form Data Preview:</h3>
        <pre className="preview-content">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default FormInput;

