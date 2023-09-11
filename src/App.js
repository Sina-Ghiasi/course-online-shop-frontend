import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
import AuthLayout from "./Layouts/AuthLayout";
import AdminLayout from "./Layouts/AdminLayout";
import HomePage from "./pages/HomePage";
import LearningRoadmapPage from "./pages/LearningRoadmapPage";
import AboutUsPage from "./pages/AboutUsPage";
import CoursesPage from "./pages/CoursesPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import OtpPage from "./pages/OtpPage";
import ResetPassPage from "./pages/ResetPassPage";
import AdminPanelPage from "./pages/AdminPanelPage";
import Dashboard from "./pages/DashboardPage";
import Users from "./pages/UsersPage";
import Products from "./pages/ProductsPage";
import Orders from "./pages/OrdersPage";
import NotMatchPage from "./pages/NoMatchPage";
import User from "./pages/UserPage";
import Product from "./pages/ProductPage";

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
            <Route path="users/:userId" element={<User />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<Product />} />
            <Route path="products/:productId" element={<Product />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
