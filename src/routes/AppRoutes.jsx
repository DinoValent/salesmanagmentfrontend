import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import InvoiceList from "../components/invoiceList/InvoiceList";

const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Navigate to="/login" />} />
    <Route path="/invoice" element={<InvoiceList />} />
  </Routes>
);

const AppRoutes = () => {
  return <PublicRoutes />;
};

export default AppRoutes;
