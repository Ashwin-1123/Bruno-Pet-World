// Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Import the CSS file

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.status === 'success') {
        alert('Message sent successfully');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('There was an error sending the message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <>
    <div className='form-cont'>
    <form className="form-container active " onSubmit={handleSubmit}>
      <div className='mt-5'>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div>
        <label >Message:</label>
        <textarea type="msg" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button className='btn' type="submit">Send</button>
    </form>
    </div>
    </>
  );
};
