import React from "react";
import CourseComponent from "../CourseComponent/CourseComponent.jsx";
import CoursesDB from "../../assets/CoursesDb/CoursesDB";
import "./CourseSection.scss";
import { useGetProducts } from "../../Utils/Hooks/useGetData"; 


const CourseSection = () => {

  const { data , isLoading, isError, error } = useGetProducts();

  if (isLoading) {
    return <p>loading ....!</p>;
  }

  if (isError) {
    return <p> error: {error.message} </p>;
  }

  console.log(data);

  return (
    <section className="course-section">
      <div className="container">
        <h2>A broad selection of courses</h2>
        <div className="courses-container">
          {data.map((course) => (
            
            <CourseComponent
              key={course['_id']}
              id={course['_id']}
              title={course.description}
              instructor={course.instructor}
              price={course.price}
              originalPrice={course.originalPrice}
              rating={course.rating}
              reviews={course.reviews}
              imageUrl={course.imageUrl}
              bestseller={course.bestseller}
            />
          )
          
          )
          }
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
