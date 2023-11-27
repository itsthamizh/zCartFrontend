import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

import '../../css/product/listAllProducts.css'

const ListAllProducts = () => {
  const [product, setOrderDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/list-all-products');

        console.log(response.data);
        setOrderDetails(response.data);
      } 
      catch (error) 
      {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (productId) => {
    console.log('Update category with ID:', productId);
  };

  const handleDelete = (productId) => {
    console.log('Delete category with ID:', productId);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);
 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  return (

    <div className="container">
      <h1>Product List</h1>
      <div>
        <label>
          Items per page:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
        {currentItems.map((product, index) => (
          <div key={index} className="category-item">
            <p><h3>Product ID: </h3>{product.product_id}</p>
            <p><h3>Product Category : </h3>{product.category_id}</p>
            <p><h3>Product Name : </h3>{product.productName}</p>
            <p><h3>Discount: </h3>{product.discount}</p>
            <p><h3>Price: </h3>{product.price}</p>
            <p><h3>Added Date Time: </h3>{product.addedDate}</p>
            <p><h3>Updated Date Time: </h3>{product.updatedDate}</p>
            <button className="button" onClick={() => handleUpdate(product.categoryID)}>
              Update
            </button>
            <button className="button" onClick={() => handleDelete(product.categoryID)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(product.length / itemsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListAllProducts;