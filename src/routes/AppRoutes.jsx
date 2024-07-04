import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import InvoiceList from "../components/invoiceList/InvoiceList";
import ProductsList from "../components/productList/ProductList";
import CustomersList from "../components/customerList/CustomerList";
import EditCustomer from "../components/editCustomer/EditCustomer";
import EditProduct from "../components/editProduct/EditProduct";
import NewCustomer from "../components/newCustomer/NewCustomer";
import NewProduct from "../components/newProduct/NewProduct";
import NewInvoice from "../components/newInvoice/NewInvoice";

const PublicRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<Navigate to="/login" />} />
    <Route path="/invoice" element={<InvoiceList />} />
    <Route
      path="/newInvoice"
      element={ <NewInvoice />
      }
    />
    <Route path="/product" element={<ProductsList />} />
    <Route path="/newProduct" element={<NewProduct />} />
    <Route path="/products/:id" element={<EditProduct />} />
    <Route path="/customer" element={<CustomersList/>} />
    <Route path="/newCustomer" element={<NewCustomer />} />
    <Route path="/customers/:id" element={<EditCustomer />} />
  </Routes>
);

const AppRoutes = () => {
  return <PublicRoutes />;
};

export default AppRoutes;
