import React, { useState } from 'react';
import axios from 'axios';

import '../../css/user/userRegistration.css';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    mobileNumber : '',
    roles : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await axios.post('/api/users/register', formData);
  
        if (response.status === 200) {
          alert('User registered successfully');
        } else {
          throw new Error('Error registering user');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error registering user');
      }
  };

  return (
    <div className="registration-form">
      <h2>User Registeration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
        />
        {/* <small className="text-muted">must be in @ </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="roles">Roles</label>
          <input
            type="text"
            name="roles"
            value={formData.roles}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;