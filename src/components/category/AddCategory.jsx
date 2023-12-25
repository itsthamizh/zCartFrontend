import React, { useState } from 'react';
import axios from '../../api/axios';
import '../../css/category/addCategory.css';


function AddCategory () {
  
    const [formData, setFormData] = useState({
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
      alert('Category Added successfully');

      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="form-container">
      <div>
        <h2>Add Category</h2> 
      </div>

      <form onSubmit={handleSubmit}>
        <label className='addcategory-label'>
          CategoryName:
          <br></br>
          <br></br>
      
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
          />
        </label>
      
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;