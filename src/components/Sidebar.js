import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button className="sidebar-button" onClick={() => navigate("/home")}>
        Home
      </button>
      <button className="sidebar-button" onClick={() => navigate("/invoice")}>
        Invoice
      </button>
      <button className="sidebar-button" onClick={() => navigate("/customer")}>
        Customers
      </button>
      <button className="sidebar-button" onClick={() => navigate("/product")}>
        Product
      </button>
    </div>
  );
};

export default Sidebar;
