import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearningRoadmapPage from "./pages/LearningRoadmap";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/Courses";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AuthProvider from "./providers/AuthProvider";
import ProfilePage from "./pages/ProfilePage";
import OtpPage from "./pages/OtpPage";
import ResetPassPage from "./pages/ResetPassPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning-roadmap" element={<LearningRoadmapPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/reset-pass" element={<ResetPassPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
