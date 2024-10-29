// import React, { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   AiOutlineHeart,
//   AiOutlineShoppingCart,
//   AiOutlineBell,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { EnrollmentContext } from "../../context/EnrollmentContext";
// import "./Header.scss";

// const Header = () => {
//   const { currentUser, isLoggedIn, logout } = useContext(EnrollmentContext);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const navigate = useNavigate();

//   // Handle search submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?query=${searchQuery}`);
//     }
//   };

//   // Get the first letter of the username
//   const getFirstLetter = (name) => (name ? name.charAt(0).toUpperCase() : "");

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-top">
//           <div className="header-left">
//             <div className="logo">
//               <Link to="/">
//                 <img src="../../../public/imgs/pngwing.com.png" alt="Logo" />
//               </Link>
//             </div>
//             <nav className="nav-links">
//               <div
//                 className="categories logo"
//                 onClick={() => setDropdownVisible(!dropdownVisible)}
//               >
//                 <Link to="#">Categories</Link>
//                 {dropdownVisible && (
//                   <div className="categories-dropdown">
//                     <ul>
//                       <li>
//                         <Link to="/development">Development</Link>
//                       </li>
//                       <li>
//                         <Link to="/business">Business</Link>
//                       </li>
//                       <li>
//                         <Link to="/finance-accounting">
//                           Finance & Accounting
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/it-software">IT & Software</Link>
//                       </li>
//                       <li>
//                         <Link to="/personal-development">
//                           Personal Development
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/design">Design</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </nav>
//           </div>

//           <div className="header-center">
//             <form onSubmit={handleSearch}>
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="Search for anything"
//                 className="search-input"
//               />
//             </form>
//           </div>

//           <div className="header-right">
//             <div className="icon">
//               <Link to="/favorites">
//                 <AiOutlineHeart className="heart-icon" />
//               </Link>
//             </div>
//             <div className="icon">
//               <Link to="/card">
//                 <AiOutlineShoppingCart className="card-icon" />
//               </Link>
//             </div>
//             <div className="icon">
//               <Link to="/notifications">
//                 <AiOutlineBell className="bell-icon" />
//               </Link>
//             </div>
//             <div className="profile icon">
//               {isLoggedIn ? (
//                 <>
//                   <Link to="/profile" className="user-profile">
//                     <div className="profile-icon">
//                       {getFirstLetter(currentUser?.username)}
//                     </div>
//                   </Link>
//                   <button onClick={logout} className="logout-button icon">
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link to="/login">
//                   <AiOutlineUser className="user-icon" />
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="header-bottom">
//           <nav className="sub-nav-links">
//             <Link to="/my-learning" className="my-learningBtn">
//               My Learning
//             </Link>
//             <Link to="/courses">Courses</Link>
//             <Link to="/profile">My Profile</Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.js
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import LogoutButton from "../LogoutButton/LogoutButton ";
import "./Header.scss";

const Header = () => {
  const { currentUser, isLoggedIn } = useContext(EnrollmentContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const getFirstLetter = (name) => (name ? name.charAt(0).toUpperCase() : "");

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <img src="../../../public/imgs/pngwing.com.png" alt="Logo" />
              </Link>
            </div>
            <nav className="nav-links">
              <div
                className="categories logo"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <Link to="#">Categories</Link>
                {dropdownVisible && (
                  <div className="categories-dropdown">
                    <ul>
                      <li>
                        <Link to="/development">Development</Link>
                      </li>
                      <li>
                        <Link to="/business">Business</Link>
                      </li>
                      <li>
                        <Link to="/finance-accounting">
                          Finance & Accounting
                        </Link>
                      </li>
                      <li>
                        <Link to="/it-software">IT & Software</Link>
                      </li>
                      <li>
                        <Link to="/personal-development">
                          Personal Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/design">Design</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="header-center">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for anything"
                className="search-input"
              />
            </form>
          </div>

          <div className="header-right">
            <div className="icon">
              <Link to="/my-favorites">
                <AiOutlineHeart className="heart-icon" />
              </Link>
            </div>
            <div className="icon" onClick={() => navigate("/card")}>
              <AiOutlineShoppingCart className="card-icon" />
            </div>
            <div className="profile icon">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="user-profile icon">
                    <div className="profile-icon">
                      {getFirstLetter(currentUser?.username)}
                    </div>
                  </Link>
                  <LogoutButton />
                </>
              ) : (
                <Link to="/login">
                  <AiOutlineUser className="user-icon" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="header-bottom">
          <nav className="sub-nav-links">
            <Link to="/my-learning" className="my-learningBtn">
              My Learning
            </Link>
            <Link to="/courses">Courses</Link>
            <Link to="/profile">My Profile</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
