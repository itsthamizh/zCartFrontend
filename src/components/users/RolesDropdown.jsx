import React from 'react';

const RolesDropdown = ({ roles, selectedRole, onSelectRole }) => {
  return (
    <select value={selectedRole} onChange={(e) => onSelectRole(e.target.value)}>
      <option value="">Select a role</option>
      
      {roles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
};

export default RolesDropdown;