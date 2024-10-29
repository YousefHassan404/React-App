import React, { useContext } from "react";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import "./CardPage.scss";

const CardPage = () => {
  const { cart, removeFromCart } = useContext(EnrollmentContext);

  // Check if cart is empty
  if (!cart || cart.length === 0) {
    return <p className="no-card-message">Your cart is empty.</p>;
  }

  return (
    <div className="card-page">
      <h2>Your Cart</h2>
      <div className="card-items">
        {cart.map((course, index) => (
          <div key={index} className="card-item">
            <img src={course.imageUrl} alt={course.title} />
            <div className="card-details">
              <h3>{course.title}</h3>
              <p>{course.instructor}</p>
              <p>Price: ${course.price}</p>
              <button onClick={() => removeFromCart(course.title)}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
