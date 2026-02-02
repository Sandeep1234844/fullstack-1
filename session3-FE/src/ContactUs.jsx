// ContactUs Component - React Forms Activity
// Demonstrates: Controlled inputs, useState, onChange, form submission

import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  // useState for all form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');

  // Form submission handler
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create a new object for the contact information
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    // Log the form data to console
    console.log(contactUsInformation);

    // Reset the form state after submission
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Phone Field with Phone Type Select */}
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            name='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>

        {/* Comments Textarea */}
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

