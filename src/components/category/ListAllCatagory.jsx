
import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import '../../css/category/listAllCategory.css';

function ListAllCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/list-all-category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (categoryId) => {
    
    console.log('Update category with ID:', categoryId);
  };

  const handleDelete = (categoryId) => {
    

    console.log('Delete category with ID:', categoryId);
  };

  return (
    <div className="container">
      <h1>Category List</h1>
      <div>
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <h3>{category.categoryName}</h3>
            <p>{category.description}</p>
            <p>Added Date Time: {category.addedDateTime}</p>
            <p>Updated Date Time: {category.updatedDateTime}</p>
            <button className="button" onClick={() => handleUpdate(category.categoryID)}>
              Update
            </button>
            <button className="button" onClick={() => handleDelete(category.categoryID)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListAllCategory;