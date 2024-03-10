import { Button } from "@mui/material";
import "../css/global.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("token");

    return token;
  };

  if (!isAuthenticated) {
    navigate("/login", { replace: true });
    return null;
  }
  return (
    <div className="mainContainer">
      <div className="form-container" style={{ width: "20%" }}>
        <h1 style={{ color: "#00d5ff" }}>Home Page</h1>
        <Button
          type="submit"
          variant="contained"
          className="animated-button"
          onClick={handleLogout}
          color="primary"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
