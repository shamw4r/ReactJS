
import React from 'react';

const UserItem = ({ user }) => {
  const handleEdit = () => {
    // Implement edit functionality
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <li>
      <span>{user.name}</span>
      <span>{user.username}</span>
      <span>{user.email}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default UserItem;
