// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import { EnrollmentContext } from "../../context/EnrollmentContext";
// import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
// import "./CourseComponent.scss";

// const CourseComponent = ({
//   title,
//   instructor,
//   price,
//   originalPrice,
//   rating,
//   reviews,
//   imageUrl,
//   bestseller,
// }) => {
//   const {
//     isLoggedIn,
//     enrolledCourses,
//     setEnrolledCourses,
//     toggleFavorite,
//     favorites,
//   } = useContext(EnrollmentContext);
//   const navigate = useNavigate();
//   const isFavorite = favorites.some((fav) => fav.title === title);

//   const handleEnroll = () => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }

//     if (enrolledCourses.some((course) => course.title === title)) {
//       toast.error("You are already enrolled in this course."); // Use toast for error
//       return;
//     }

//     const course = {
//       title,
//       instructor,
//       price,
//       originalPrice,
//       rating,
//       reviews,
//       imageUrl,
//       bestseller,
//     };
//     setEnrolledCourses((prevCourses) => [...prevCourses, course]);
//     toast.success(`Successfully enrolled in ${title}!`); // Success toast
//   };

//   const handleFavoriteToggle = () => {
//     if (!isLoggedIn) {
//       toast.error("You must be logged in to add or remove favorites."); // Use toast for error
//       return;
//     }

//     toggleFavorite({
//       title,
//       instructor,
//       price,
//       originalPrice,
//       rating,
//       reviews,
//       imageUrl,
//       bestseller,
//     });
//   };

//   return (
//     <div className="course-card">
//       <img src={imageUrl} alt={title} className="course-image" />
//       <h3 className="course-title">
//         <h3>{title}</h3>
//       </h3>
//       <p className="course-instructor">{instructor}</p>
//       <p className="course-price">
//         <span className="current-price">${price}</span>
//         {originalPrice && (
//           <span className="original-price">${originalPrice}</span>
//         )}
//       </p>
//       <div className="course-rating">
//         <span>
//           Rating: {rating} ({reviews} reviews)
//         </span>
//         {bestseller && <span className="bestseller-badge">Bestseller</span>}
//       </div>
//       <button className="course-button" onClick={handleEnroll}>
//         {isLoggedIn ? "Enroll Now" : "Log in to Enroll"}
//       </button>
//       <button onClick={() => addToCard(course)} className="course-button">
//         Add to card
//       </button>
//       <button
//         className={`favorite-button ${isFavorite ? "active" : ""}`}
//         onClick={handleFavoriteToggle}
//       >
//         {isFavorite ? (
//           <AiFillHeart className="heart-icon" />
//         ) : (
//           <AiOutlineHeart className="heart-icon" />
//         )}
//       </button>
//       <Toaster />
//     </div>
//   );
// };

// export default CourseComponent;
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import toast, { Toaster } from "react-hot-toast";
import "./CourseComponent.scss";

const CourseComponent = ({
  id,
  title,
  instructor,
  price,
  originalPrice,
  rating,
  reviews,
  imageUrl,
  bestseller,
}) => {

  console.log('course Componenmt==>',id)




  const {
    isLoggedIn,
    enrolledCourses,
    setEnrolledCourses,
    toggleFavorite,
    favorites,
    addToCart,
  } = useContext(EnrollmentContext); // Ensure addToCart is destructured
  const navigate = useNavigate();
  const isFavorite = favorites.some((fav) => fav.title === title);

  const handleEnroll = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (enrolledCourses.some((course) => course.title === title)) {
      toast.error("You are already enrolled in this course.");
      return;
    }

    const course = {
      title,
      instructor,
      price,
      originalPrice,
      rating,
      reviews,
      imageUrl,
      bestseller,
    };
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
    toast.success(`Successfully enrolled in ${title}!`);
  };

  const handleFavoriteToggle = () => {
    if (!isLoggedIn) {
      toast.error("You must be logged in to add or remove favorites.");
      return;
    }

    toggleFavorite({
      title,
      instructor,
      price,
      originalPrice,
      rating,
      reviews,
      imageUrl,
      bestseller,
    });
  };

  const handleViewDetails = () => {
    navigate(`/course/${id}`);
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      toast.error("You must be logged in to add items to the cart.");
      return;
    }

    const course = {
      title,
      instructor,
      price,
      originalPrice,
      rating,
      reviews,
      imageUrl,
      bestseller,
    };
    addToCart(course); // Call addToCart with the course object
    toast.success(`Added ${title} to your cart!`); // Success toast
  };


  


  return (
    <div className="course-card">
      <img src={imageUrl} alt={title} className="course-image" />
      <h3 className="course-title">{title}</h3>
      <p className="course-instructor">{instructor}</p>
      <p className="course-price">
        <span className="current-price">${price}</span>
        {originalPrice && (
          <span className="original-price">${originalPrice}</span>
        )}
      </p>
      <div className="course-rating">
        <span>
          Rating: {rating} ({reviews} reviews)
        </span>
        {bestseller && <span className="bestseller-badge">Bestseller</span>}
      </div>
      <button className="course-button" onClick={handleEnroll}>
        {isLoggedIn ? "Enroll Now" : "Log in to Enroll"}
      </button>
      <button onClick={handleAddToCart} className="course-button">
        Add to Cart
      </button>
      <button className="course-button" onClick={handleViewDetails}>
        View Details
      </button>
      <button
        className={`favorite-button ${isFavorite ? "active" : ""}`}
        onClick={handleFavoriteToggle}
      >
        {isFavorite ? (
          <AiFillHeart className="heart-icon" />
        ) : (
          <AiOutlineHeart className="heart-icon" />
        )}
      </button>
      <Toaster />
    </div>
  );
};

export default CourseComponent;
