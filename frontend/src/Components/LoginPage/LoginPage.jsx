import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { signInSchema } from "../../Utils/Zod/schema.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useGetUsers } from "../../Utils/Hooks/GetUsersData.jsx";
import { useEnrollment } from "../../context/EnrollmentContext"; // Import the Enrollment context
import "./_SignIn.scss";
// import "./LoginPage.scss";


export default function SignIn() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setCurrentUser } = useEnrollment(); // Access the context
  const [e, setError] = useState("");

  const { data: users, isLoading, isError, error } = useGetUsers();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Validate the input data using the schema
      const res = signInSchema.parse(data);

      // Find the matching user from the fetched users data
      const matchedUser = users.find(
        (user) => user.email === res.email && user.password === res.password
      );
      console.log(matchedUser)
      if (matchedUser) {
        // No need for localStorage, we set the context directly
        setIsLoggedIn(true);
        setCurrentUser(matchedUser); // Update the context with the matched user

        toast.success("Sign In successful");

        // Navigate to profile after successful login
        navigate("/");

      } else {
        toast.error("Invalid email or password");
        setError("Invalid email or password");
      }

    } catch (error) {
      if (error.errors) {
        // Handle validation errors
        error.errors.forEach((err) => toast.error(err.message));
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <section className="SignIn">
      <h2>Sign in</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form  onSubmit={handleSubmit}>
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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          <p
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/SignUp")}
          >
            Do not have an account?
          </p>
        </form>
      )}
      <Toaster />
    </section>
  );
}













































// import { useState } from "react";
// import { signInSchema } from "../../Utils/Zod/schema.jsx";
// import toast, { Toaster } from "react-hot-toast";
// import { Link } from "react-router-dom";
// import "./LoginPage.scss";
// import { useGetUsers } from "../../Utils/Hooks/GetUsersData.jsx";

// export default function SignIn() {
//   const { data: users, isLoading, isError, error } = useGetUsers();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       const res = signInSchema.parse(data);

//       const matchedUser = users.find(
//         (user) => user.email === res.email && user.password === res.password
//       );

//       if (matchedUser) {
//         toast.success("Sign In successful");

//         setTimeout(() => {
//           window.location.href = "/about";
//         }, 2000);
//       } else {
//         toast.error("Invalid email or password");
//       }
//     } catch (error) {
//       if (error.errors) {
//         error.errors.forEach((err) => toast.error(err.message));
//       } else {
//         toast.error("An unexpected error occurred");
//       }
//     }
//   };

//   return (
//     <>
//       <h2>Sign in</h2>
//       {isLoading ? (
//         <p></p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input type="email" name="email" placeholder="Email..." required />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password..."
//               required
//             />
//           </div>

//           {/* <Link to={'/signup'}>Do not have account ?</Link> */}

//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Signing in..." : "Sign In"}
//           </button>

//           <p
//             style={{ cursor: "pointer" }}
//             onClick={() => {
//               window.location = "/SignUp";
//             }}
//           >
//             Do not have account
//           </p>
//         </form>
//       )}
//       <Toaster />
//     </>
//   );
// }






















// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInSchema } from "../../Utils/Zod/schema.jsx";
// import { useGetUsers } from "../../Utils/Hooks/GetUsersData.jsx"; // Ensure this is imported
// import toast, { Toaster } from "react-hot-toast";
// import { useEnrollment } from "../../context/EnrollmentContext";
// import "./LoginPage.scss";

// const LoginPage = () => {
//   const { data: users, isLoading, isError } = useGetUsers(); // Fetch users
//   console.log(users)
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   const navigate = useNavigate();
//   const { setIsLoggedIn, setCurrentUser } = useEnrollment();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       // Validate form data against the schema
//       const validatedData = signInSchema.parse(data);

//       // Check if the user exists in the fetched users
//       const matchedUser = users?.find(
//         (user) => user.email === validatedData.email && user.password === validatedData.password
//       );

//       if (matchedUser) {
//         // Show success message
//         toast.success("Sign In successful");

//         // Store user data in localStorage
//         localStorage.setItem("currentUser", JSON.stringify(matchedUser));

//         // Update context
//         setIsLoggedIn(true);
//         setCurrentUser(matchedUser); // Set the current user in context

//         // Navigate to the profile page
//         navigate("/profile", { state: { user: matchedUser } });
//       } else {
//         // Show error message if no match found
//         toast.error("Invalid email or password");
//       }
//     } catch (err) {
//       if (err.errors) {
//         // Show validation error messages
//         err.errors.forEach((error) => toast.error(error.message));
//       } else {
//         // Handle unexpected errors
//         toast.error("An unexpected error occurred");
//       }
//     }
//   };

//   return (
//     <div className="login-page">
//       <h2>Login</h2>
//       {isLoading ? (
//         <p>Loading users...</p>
//       ) : isError ? (
//         <p>Error loading users: {error.message}</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="password" placeholder="Password" required />
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Signing in..." : "Login"}
//           </button>
//         </form>
//       )}
//       <p>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//       <Toaster />
//     </div>
//   );
// };

// export default LoginPage;
