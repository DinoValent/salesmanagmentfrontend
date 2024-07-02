  import { useLocation } from "react-router-dom";
  import Sidebar from "./components/Sidebar";
  import AppRoutes from "./routes/AppRoutes";

  const App = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    return (
      <div style={{ display: "flex" }}>
        {!isLoginPage && <Sidebar />}
        <div style={{ marginLeft: "200px", padding: "20px", width: "100%" }}>
          <AppRoutes />
        </div>
      </div>
    );
  };

  export default App;
