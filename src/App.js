import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
import AuthLayout from "./Layouts/AuthLayout";
import AdminLayout from "./Layouts/AdminLayout";
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
import AdminPanelPage from "./pages/AdminPanelPage";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Orders";
import NotMatchPage from "./pages/NoMatchPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/learning-roadmap" element={<LearningRoadmapPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotMatchPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/reset-pass" element={<ResetPassPage />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin-panel" element={<AdminPanelPage />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
