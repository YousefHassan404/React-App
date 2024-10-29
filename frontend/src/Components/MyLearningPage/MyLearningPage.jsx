import React, { useContext } from "react";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import "./MyLearningPage.scss"; 

const MyLearningPage = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);

  return (
    <div className="my-learning-container">
      <h2>My Learning</h2>
      {enrolledCourses.length > 0 ? (
        <ul className="course-list">
          {enrolledCourses.map((course, index) => (
            <li key={index} className="course-item">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="course-image"
              />
              <h3>{course.title}</h3>
              <p>Instructor: {course.instructor}</p>
              <p>Price: {course.price}</p>
              {course.originalPrice && (
                <p className="original-price">
                  Original Price: {course.originalPrice}
                </p>
              )}
              <p>
                Rating: {course.rating} ({course.reviews} reviews)
              </p>
              {course.bestseller && (
                <span className="bestseller-badge">Bestseller</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-courses-message">
          You haven't enrolled in any courses yet. Start exploring courses and
          enroll today!
        </p>
      )}
    </div>
  );
};

export default MyLearningPage;
