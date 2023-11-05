import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/sidebar/sideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className='ul-class'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list-all-product">Products</Link></li>
        <li><Link to="/list-all-users">Users</Link></li>
        <li><Link to="/registration">User Registration</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;