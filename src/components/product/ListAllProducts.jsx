import React, { useState, useEffect } from 'react';
import BoxComponent from '../product/BoxComponent';
import axios from '../../api/axios';

const ListAllProducts = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('/list');
        const result = await response.json();
        setData(result);
      } 
      catch (error) 
      {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderBoxes = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    return (
      <div className="grid">
        {currentPageData.map((item) => (
          <BoxComponent key={item.id} data={item} />
        ))}
      </div>
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      {renderBoxes()}
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default ListAllProducts;