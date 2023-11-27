import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import '../../css/category/listAllCategory.css';


function ListAllCategory() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);


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

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <h1>Category List</h1>
      <div>
        <label>
          Items per page:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
        {currentItems.map((category, index) => (
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
      <div className="pagination">
        {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>


      <div className="add-category-button">
      <Link to="/add-category">
        <button className="button">Add Category</button>
      </Link>
      </div>
      
    </div>
  );
}

export default ListAllCategory;