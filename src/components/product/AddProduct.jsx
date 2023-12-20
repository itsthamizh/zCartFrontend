import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import '../../css/product/addProduct.css';


function AddProduct () {
    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        category_id : '',
        productName: '',
        price : '',
        discount : ''
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
            console.log(formData)
            const response = await axios.post('/add-product', formData);
            alert('Product Added successfully');
            console.log(response.data);
        } 
        catch (error) {
            console.error('Error submitting form : ', error);
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const response = await axios.get('/list-all-category');
            setCategories(response.data);
            console.log(response.data)
        }
        catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
  
    fetchCategories();
  }, []);

  return (
    <div className="form-container">
      <div>
        <h2>Add Products</h2> 
      </div>

      <form onSubmit={handleSubmit}>
        
      <label className='addcategory-label'>
            Select Category:
            <br />
            <br />
            <select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
            >
                <option value="">Select a category</option>
                {categories.map(category => (
                    <option key={category.category_id} value={category.categoryID}>
                        {category.categoryName}
                    </option>
                ))}
            </select>
        </label>

        <label className='addcategory-label'>
          Product Name :
          <br></br>
          <br></br>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </label>

        <label className='addcategory-label'>
          Price :
          <br></br>
          <br></br>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>

        <label className='addcategory-label'>
          Discount % :
          <br></br>
          <br></br>          
          <input
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </label>
      
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;