import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import InvoiceList from "../components/invoiceList/InvoiceList";
import ProductsList from "../components/productList/ProductList";
import CustomersList from "../components/customerList/CustomerList";

const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Navigate to="/login" />} />
    <Route path="/invoice" element={<InvoiceList />} />
    <Route path="/product" element={<ProductsList />} />
    <Route path="/customer" element={<CustomersList/>} />
  </Routes>
);

const AppRoutes = () => {
  return <PublicRoutes />;
};

export default AppRoutes;
