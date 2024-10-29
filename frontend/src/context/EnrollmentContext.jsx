// import React, { createContext, useState, useEffect, useContext } from "react";

// // Create the context
// export const EnrollmentContext = createContext(); // Export the context

// // Create a provider component
// export const EnrollmentProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   // Load the user from localStorage on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     if (storedUser) {
//       setCurrentUser(JSON.parse(storedUser));
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Clear user data on logout
//   const logout = () => {
//     localStorage.removeItem("currentUser");
//     setCurrentUser(null);
//     setIsLoggedIn(false);
//   };

//   return (
//     <EnrollmentContext.Provider
//       value={{
//         isLoggedIn,
//         setIsLoggedIn,
//         currentUser,
//         setCurrentUser,
//         enrolledCourses,
//         setEnrolledCourses,
//         logout, // Provide a logout function
//       }}
//     >
//       {children}
//     </EnrollmentContext.Provider>
//   );
// };

// // Custom hook for using the EnrollmentContext
// export const useEnrollment = () => {
//   return useContext(EnrollmentContext);
// };

// src/context/EnrollmentContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
export const EnrollmentContext = createContext();

// Create a provider component
export const EnrollmentProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // Use `cart` instead of `card`

  // Load the user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  // Clear user data on logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const toggleFavorite = (course) => {
    if (!isLoggedIn) {
      alert("You must be logged in to add or remove favorites.");
      return;
    }

    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(
        (fav) => fav.title === course.title
      );
      if (isFavorite) {
        const updatedFavorites = prevFavorites.filter(
          (fav) => fav.title !== course.title
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      } else {
        const updatedFavorites = [...prevFavorites, course];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        return updatedFavorites;
      }
    });
  };

  const addToCart = (course) => {
    setCart((prevCart) => {
      const isInCart = prevCart.some((item) => item.title === course.title);
      if (isInCart) {
        return prevCart; // Do not add if it's already in the cart
      } else {
        const updatedCart = [...prevCart, course];
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to local storage
        return updatedCart;
      }
    });
  };

  const removeFromCart = (courseTitle) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.title !== courseTitle);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to local storage
      return updatedCart;
    });
  };

  return (
    <EnrollmentContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currentUser,
        setCurrentUser,
        enrolledCourses,
        setEnrolledCourses,
        favorites,
        cart,
        toggleFavorite,
        logout,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

// Custom hook for using the EnrollmentContext
export const useEnrollment = () => {
  return useContext(EnrollmentContext);
};
