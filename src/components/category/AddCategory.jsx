import React, { useState } from 'react';
import axios from '../../api/axios';
import '../../css/category/addCategory.css';

function AddCategory () {
    const [formData, setFormData] = useState({
      // Define fields 
      categoryName: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/add-category', formData);

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          CategoryName:
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;