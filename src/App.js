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
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import NotMatchPage from "./pages/NoMatchPage";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import CoursePage from "./pages/CoursePage";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/learning-roadmap" element={<LearningRoadmapPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:productId" element={<CoursePage />} />
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
              <Route index element={<DashboardPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="users/:userId" element={<UserPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/add" element={<ProductPage />} />
              <Route path="products/:productId" element={<ProductPage />} />
              <Route path="orders" element={<OrdersPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
