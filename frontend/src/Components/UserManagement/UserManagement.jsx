import React, { useState, useEffect } from "react";
import { addUser, getAllUsers } from "./userService";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    imageUrl: "",
    email: "",
    password: "",
    mobileNumber: "",
    age: "",
    country: "",
    gender: "",
  });

  const fetchUsers = async () => {
    const fetchedUsers = await getAllUsers();
    setUsers(fetchedUsers);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(userData);
    fetchUsers(); // Refresh the user list
    setUserData({
      firstName: "",
      lastName: "",
      imageUrl: "",
      email: "",
      password: "",
      mobileNumber: "",
      age: "",
      country: "",
      gender: "",
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>

      <h3>All Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
