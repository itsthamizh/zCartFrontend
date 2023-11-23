import React from 'react';

const BoxComponent = ({ data }) => (
  <div className="box">
    <p>{data.name}</p>
    <p>{data.description}</p>
  </div>
);

export default BoxComponent;