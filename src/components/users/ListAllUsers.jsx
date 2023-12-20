import React, { useState, useEffect } from 'react';
import api from '../../api/axios';

import '../../css/user/listAllUsers.css';

function ListAllUsers() {
  const [users, setUsers] = useState([]);

  console.log(api);

  useEffect(() => {
    api.get('/list-all-users')
      .then(response => {

        console.log(JSON.stringify(response));

        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);



  const updateUser = (id, updatedData) => {
    api.put(`/update-user/${id}`)
    .then(response => response.json())
    .then(data => {
      // Handle response data if needed
    })
    .catch(error => 
      console.error('Error:', error));
  };
  


  const deleteUser = id => {
    api.delete(`/delete-user/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Handle response data if needed
      console.log(data)
    })
    .catch(error => console.error('Error:', error));
  };

  return (

    <div className='table-container'>
      <br></br>
      <br></br>
      <div>
        <h1>All Users List </h1>
      </div>
      <br></br>

      <table className='table-header'>
        <thead>
          <tr>
            <th>Name</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Mobile</th>
            <th>Credit</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className='tbody-header'>
          {users.map(row => (
             <tr key={row.userId}>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>{row.password}</td>
                <td>{row.mobile}</td>
                <td>{row.credit}</td>
                <td>
                  <button onClick={() => updateUser(row.userId, { name: 'New Name' })}>
                    Update
                  </button>
                </td>
                <td>  
                  <button onClick={() => deleteUser(row.userId)}>Delete</button>
                </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAllUsers;