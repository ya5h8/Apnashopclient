import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./Login";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Categories from "./Categories";
import Banners from "./Banners";

export default function AdminRoutes() {
  const token = localStorage.getItem("adminToken");

  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/admin" />}
      />
      <Route
        path="/products"
        element={token ? <Products /> : <Navigate to="/admin" />}
      />
      <Route
        path="/categories"
        element={token ? <Categories /> : <Navigate to="/admin" />}
      />
      <Route
        path="/banners"
        element={token ? <Banners /> : <Navigate to="/admin" />}
      />
    </Routes>
  );
}
