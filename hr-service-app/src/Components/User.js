import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/get');
        const result = await response.json();
        setUsers(result.data);  // Access the correct property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchUsers();
  }, []);
  return (
    <div>
    
    <table border="1" cellPadding="5" cellSpacing="0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id}>
              
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contactNumber}</td>
              <td>{user.message}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  );
};

export default User;
