
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './redux/actions/usersActions';
import UserItem from './UserItem';
import SearchBar from './SearchBar';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
