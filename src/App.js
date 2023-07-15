import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LearningRoadmapPage from "./pages/LearningRoadmap";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/Courses";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learning-roadmap" element={<LearningRoadmapPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
