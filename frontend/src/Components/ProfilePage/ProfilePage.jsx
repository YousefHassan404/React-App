// src/Components/ProfilePage/ProfilePage.jsx
import React, { useContext } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import "./ProfilePage.scss";
import LogoutButton from "../LogoutButton/LogoutButton ";

const ProfilePage = () => {
  const { currentUser } = useContext(EnrollmentContext);
  const navigate = useNavigate();
  console.log(currentUser)

  return (
    <div className="profile-page">
      <h2>Profile Page</h2>
      <div className="user-info">
        <div className="prfile-icon">
          <Link to="/profile" className="user-profile">
            <div className="prfile icon">
              {currentUser.firstName.charAt(0).toUpperCase()}
            </div>
          </Link>
        </div>
        <p>
          <strong>Username:</strong> {currentUser.firstName}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <strong>Mobile Number:</strong> {currentUser.mobileNumber}
        </p>
        <button onClick={() => navigate("/")}>
          Edit Profile
        </button>
        <LogoutButton />
      </div>
    </div>
  );
};

export default ProfilePage;

















// import React, { useContext } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { EnrollmentContext } from "../../context/EnrollmentContext";
// import "./ProfilePage.scss";
// import LogoutButton from "../LogoutButton/LogoutButton.jsx";



// const ProfilePage = () => {
//   const { currentUser } = useContext(EnrollmentContext);
//   const navigate = useNavigate();

//   // Check if currentUser is available
//   if (!currentUser) {
//     return <p>Loading user data...</p>;
//   }

//   return (
//     <div className="profile-page">
//       <h2>Profile Page</h2>
//       <div className="user-info">
//         <div className="profile-icon">
//           <Link to="/profile" className="user-profile">
//             <div className="profile-icon">
//               {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : <AiOutlineUser />}
//             </div>
//           </Link>
//         </div>
//         <p>
//           <strong>Username:</strong> {currentUser.username || "N/A"}
//         </p>
//         <p>
//           <strong>Email:</strong> {currentUser.email || "N/A"}
//         </p>
//         <p>
//           <strong>Mobile Number:</strong> {currentUser.mobileNumber || "N/A"}
//         </p>
//         <button onClick={() => navigate("/update-profile")}>
//           Edit Profile
//         </button>
//         <LogoutButton />
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;












// // src/Components/ProfilePage/ProfilePage.jsx
// import React, { useContext } from "react";
// import { AiOutlineUser } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { EnrollmentContext } from "../../context/EnrollmentContext";
// import "./ProfilePage.scss";
// // import LogoutButton from "../LogoutButton/LogoutButton";
// import LogoutButton from "../LogoutButton/LogoutButton.jsx";


// const ProfilePage = () => {
//   const { currentUser } = useContext(EnrollmentContext);
//   const navigate = useNavigate();

//   // Debugging: Check if currentUser is defined
//   console.log('Current User:', currentUser);

//   // Handle loading state or case where currentUser might be undefined
//   if (!currentUser) {
//     return <p>Loading user data...</p>;
//   }

//   // Safely accessing user properties with fallback values
//   const username = currentUser.username || 'Guest';
//   const email = currentUser.email || 'No email provided';
//   const mobileNumber = currentUser.mobileNumber || 'No mobile number provided';

//   return (
//     <div className="profile-page">
//       <h2>Profile Page</h2>
//       <div className="user-info">
//         <div className="profile-icon">
//           <Link to="/profile" className="user-profile">
//             <div className="profile icon">
//               {username.charAt(0).toUpperCase()}
//             </div>
//           </Link>
//         </div>
//         <p>
//           <strong>Username:</strong> {username}
//         </p>
//         <p>
//           <strong>Email:</strong> {email}
//         </p>
//         <p>
//           <strong>Mobile Number:</strong> {mobileNumber}
//         </p>
//         <button onClick={() => navigate("/update-profile")}>
//           Edit Profile
//         </button>
//         <LogoutButton />
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
