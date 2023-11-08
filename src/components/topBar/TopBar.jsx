import React from 'react';
import userLogo from '../../images/user-logo.png';
import '../../css/topBar/topBar.css';

const TopBar = ({ onUserLogoClick }) => {
    return (
      <div className="top-bar">
        <img
          src={userLogo}
          alt="User Logo"
          className="user-logo"
          onClick={onUserLogoClick}
        />
      </div>
    );
  };
  
  export default TopBar;