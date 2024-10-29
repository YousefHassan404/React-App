import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import MyLearningPage from "./Components/MyLearningPage/MyLearningPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CourseSection from "./Components/CourseSection/CourseSection";
import IT from "./Components/IT/IT";
import Finance from "./Components/Finance/Finance";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import FavoritesPage from "./Components/FavoritesPage/FavoritesPage";
import CardPage from "./Components/CardPage/CardPage";

function App() {
  return (
    <EnrollmentProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseSection />} />
            <Route path="/my-learning" element={<MyLearningPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/it-software" element={<IT />} />
            <Route path="/finance-accounting" element={<Finance />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/course-details/:title" element={<CourseDetails />} />
            <Route path="/my-favorites" element={<FavoritesPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/course/:title" element={<CourseDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </EnrollmentProvider>
  );
}

export default App;
