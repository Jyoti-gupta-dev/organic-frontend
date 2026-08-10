
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Admin from "./pages/AdminPanel/Admin";
import AdminLogin from "./pages/AdminPanel/AdminLogin";
import AdminDetails from "./pages/AdminPanel/AdminDetails";
import CreateAdmin from "./pages/AdminPanel/CreateAdmin";
import Dashboard from "./pages/AdminPanel/Dashboard";
import CreateProduct from "./pages/AdminPanel/CreateProduct";
import Products from "./pages/AdminPanel/Products";
import ProductDetails from "./pages/AdminPanel/ProductDetails";
import Order from "./pages/AdminPanel/Order";
import Users from "./pages/AdminPanel/Users";
import UserDetails from "./pages/AdminPanel/UserDetails";

import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Admin Login */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="createproduct" element={<CreateProduct />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="orders" element={<Order />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="details" element={<AdminDetails />} />
          <Route path="create" element={<CreateAdmin />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;