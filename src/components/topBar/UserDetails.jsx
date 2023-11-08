import React from 'react';
import '../../css/topBar/userDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserDetails;