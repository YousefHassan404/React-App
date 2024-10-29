// src/Components/UpdateProfile/UpdateProfile.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loadUsersDB, saveUsersDB } from "../../assets/UsersBD/UsersDB";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import toast, { Toaster } from "react-hot-toast";
import "./UpdateProfile.scss";

const UpdateProfile = () => {
  const { currentUser, setCurrentUser } = useContext(EnrollmentContext);
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ ...currentUser });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Handle form submission for updating user info
  const handleUpdate = (e) => {
    e.preventDefault();
    const usersDB = loadUsersDB();
    const userIndex = usersDB.findIndex((user) => user.id === currentUser.id);

    if (userIndex > -1) {
      // Check if old password matches
      if (usersDB[userIndex].password !== oldPassword) {
        toast.error("Old password is incorrect.");
        return;
      }

      // Update the user data in the array
      usersDB[userIndex] = {
        ...usersDB[userIndex],
        ...userInfo,
        password: newPassword ? newPassword : usersDB[userIndex].password, // Update to new password if provided
      };
      saveUsersDB(usersDB);

      // Update the local user data in the context and notify the user
      setCurrentUser({
        ...userInfo,
        password: newPassword ? newPassword : usersDB[userIndex].password, // Ensure context has updated password
      });
      toast.success("Profile updated successfully!");
      navigate("/profile"); // Redirect to the profile page after updating
    }
  };

  return (
    <div className="update-profile">
      <h2>Update Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter mobile number"
          value={userInfo.mobileNumber}
          onChange={(e) =>
            setUserInfo({ ...userInfo, mobileNumber: e.target.value })
          }
          required
        />
        <input
          type="password"
          name="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="Enter old password"
          required
        />
        <input
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password (leave empty to keep current)"
        />
        <button type="submit">Update Profile</button>
        <button type="button" onClick={() => navigate("/profile")}>
          Cancel
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateProfile;
