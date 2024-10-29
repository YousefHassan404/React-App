import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import CoursesDB from "../../assets/CoursesDb/CoursesDB"; // Adjust the import path as necessary
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons
import "./CourseDetails.scss"; // Create styles for this component
import { useGetProducts } from "../../Utils/Hooks/useGetData"; 

const CourseDetails = () => {


  const { data , isLoading, isError, error } = useGetProducts();

  if (isLoading) {
    return <p>loading ....!</p>;
  }

  if (isError) {
    return <p> error: {error.message} </p>;
  }

  console.log("data from detalis==>",data);



  // const { id } = useParams(); // Using title from URL parameters
  const { title } = useParams(); // Using title from URL parameters
  console.log(title)
  // console.log(id)
  const navigate = useNavigate();
  const { isLoggedIn, enrolledCourses, addToCart, favorites, toggleFavorite } =
    useContext(EnrollmentContext);

  // Find the course details based on the title
  const course = data.find((course) => course['_id'] === title);
  console.log("Course ==>",course)
  // Check if the course exists
  if (!course) {
    return <p>Course not found.</p>;
  }

  const {
    instructor,
    price,
    originalPrice,
    description,
    rate,
    students,
    imageUrl,
    bestseller,
  } = course;

  const handleEnroll = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (
      enrolledCourses.some((enrolledCourse) => enrolledCourse.title === title)
    ) {
      toast.error("You are already enrolled in this course.");
      return;
    }

    toast.success(`Successfully enrolled in ${title}!`);
  };

  const handleAddToCart = () => {
    addToCart(course);
    toast.success(`${title} added to cart!`);
  };

  const isFavorite = favorites.some((fav) => fav.title === course.title);

  const handleFavoriteToggle = () => {
    toggleFavorite(course);
  };

  return (
    <div className="course-details">
      <img src={imageUrl} alt={title} className="course-image" />
      <h1 className="course-title">{description}</h1>
      <p className="course-instructor">Instructor: {instructor}</p>
      <p className="course-price">
        Price: <span className="current-price">${price}</span>
        {originalPrice && (
          <span className="original-price"> ${originalPrice}</span>
        )}
      </p>
      <div className="course-rating">
        Rating: {rate} ({students} reviews)
        {bestseller && <span className="bestseller-badge">Bestseller</span>}
      </div>
      <p className="course-description">{description}</p>
      <div className="course-actions">
        <button className="course-button" onClick={handleEnroll}>
          Enroll Now
        </button>
        <button className="course-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="favorite-button" onClick={handleFavoriteToggle}>
          {isFavorite ? (
            <AiFillHeart className="heart-icon active" />
          ) : (
            <AiOutlineHeart className="heart-icon" />
          )}
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default CourseDetails;





// import React, { useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { EnrollmentContext } from "../../context/EnrollmentContext";
// import toast, { Toaster } from "react-hot-toast";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons
// import "./CourseDetails.scss"; // Importing styles
// import { useGetProducts } from "../../Utils/Hooks/useGetData";

// const CourseDetails = () => {
//   const { id } = useParams(); // Extract 'id' from the URL parameters
//   const { data, isLoading, isError, error } = useGetProducts();
//   console.log('main==>',id)
//   const navigate = useNavigate();
//   const { isLoggedIn, enrolledCourses, addToCart, favorites, toggleFavorite } =
//     useContext(EnrollmentContext);

//   // Handle loading state
//   if (isLoading) {
//     return <p>Loading ....!</p>;
//   }

//   // Handle error state
//   if (isError) {
//     return <p>Error: {error.message}</p>;
//   }

//   console.log("data from details =>", data);

//   // Find the course details based on the id from URL
//   const course = data?.find((course) =>{ 
//     console.log(course['_id'])
//     console.log(id)
//     course['_id']?.toString() === id?.toString()});
//   console.log(course)
//   // Check if the course exists
//   if (!course) {
//     return <p>Course not found.</p>;
//   }

//   // Destructure course details
//   const {
//     title,  // Add 'title' if it exists in course
//     instructor,
//     price,
//     originalPrice,
//     description,
//     rate,
//     students,
//     imageUrl,
//     bestseller,
//   } = course;

//   // Handle enrollment
//   const handleEnroll = () => {
//     if (!isLoggedIn) {
//       navigate("/login");
//       return;
//     }

//     // Check if user is already enrolled
//     if (
//       enrolledCourses.some((enrolledCourse) => enrolledCourse.title === title)
//     ) {
//       toast.error("You are already enrolled in this course.");
//       return;
//     }

//     toast.success(`Successfully enrolled in ${title}!`);
//   };

//   // Handle adding to cart
//   const handleAddToCart = () => {
//     addToCart(course);
//     toast.success(`${title} added to cart!`);
//   };

//   // Check if the course is in favorites
//   const isFavorite = favorites.some((fav) => fav.title === course.title);

//   // Handle favorite toggle
//   const handleFavoriteToggle = () => {
//     toggleFavorite(course);
//   };

//   return (
//     <div className="course-details">
//       <img src={imageUrl} alt={title} className="course-image" />
//       <h1 className="course-title">{title}</h1>
//       <p className="course-instructor">Instructor: {instructor}</p>
//       <p className="course-price">
//         Price: <span className="current-price">${price}</span>
//         {originalPrice && (
//           <span className="original-price"> ${originalPrice}</span>
//         )}
//       </p>
//       <div className="course-rating">
//         Rating: {rate} ({students} reviews)
//         {bestseller && <span className="bestseller-badge">Bestseller</span>}
//       </div>
//       <p className="course-description">{description}</p>
//       <div className="course-actions">
//         <button className="course-button" onClick={handleEnroll}>
//           Enroll Now
//         </button>
//         <button className="course-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//         <button className="favorite-button" onClick={handleFavoriteToggle}>
//           {isFavorite ? (
//             <AiFillHeart className="heart-icon active" />
//           ) : (
//             <AiOutlineHeart className="heart-icon" />
//           )}
//         </button>
//         <Toaster />
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;
