import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import { signUpSchema } from "../../Utils/Zod/schema.jsx";
import toast, { Toaster } from "react-hot-toast";
import "./SignupPage.scss";

export default function SignUp() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setCurrentUser } = useContext(EnrollmentContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Validate form data using Zod
      signUpSchema.parse(data);

      // Check if email already exists
      const emailCheckResponse = await fetch(
        `http://localhost:8080/api/users/email/${data.email}`
      );

      if (!emailCheckResponse.ok) {
        throw new Error("Failed to check email existence."); // Handle fetch error
      }

      const emailExists = await emailCheckResponse.json();

      if (emailExists) {
        toast.error("Email already exists. Please use another one.");
        return; // Stop execution if the email already exists
      }

      // Proceed with sign-up
      const response = await fetch("http://localhost:8080/api/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const newUser = await response.json(); // Get the created user data
        toast.success("Sign up successful!"); // Display success toast

        setIsLoggedIn(true);
        setCurrentUser(newUser); // Set current user in context
        navigate("/"); // Redirect to the profile page
      } else {
        const errorData = await response.json(); // Get the error message from the server
        toast.error(errorData.error || "Failed to sign up. Please try again.");
      }
    } catch (error) {
      if (error.errors) {
        error.errors.forEach((err) => toast.error(err.message)); // Display Zod validation errors
      } else {
        console.error("Error during signup:", error); // Log unexpected errors
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name..."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            required
          />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email..." required />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password..."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number..."
            required
          />
        </div>
        <div className="form-group">
          <input type="number" name="age" placeholder="Age..." required />
        </div>
        <div className="form-group">
          <input type="text" name="country" placeholder="Country..." required />
        </div>
        <div className="form-group">
          <input type="text" name="imageUrl" placeholder="Your Image URL..." />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <Toaster />
    </>
  );
}
