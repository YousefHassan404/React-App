import React, { useContext } from "react";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import CourseComponent from "../CourseComponent/CourseComponent";
import "./FavoritesPage.scss";

const FavoritesPage = () => {
  const { favorites } = useContext(EnrollmentContext);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Courses</h2>
      <div className="favorites-container">
        {favorites.length === 0 ? (
          <p>No favorite courses yet!</p>
        ) : (
          favorites.map((course) => (
            <CourseComponent key={course.title} {...course} />
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
