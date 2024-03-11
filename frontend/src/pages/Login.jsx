import { Button, Grid, TextField, Typography } from "@mui/material";
import "../css/global.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required.");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const homePage = (event) => {
    if (validateEmail() || validatePassword()) {
      event.preventDefault();

      axios
        .post("http://localhost:3001/login", { email, password })
        .then((result) => {
          if (result.data === "success") {
            alert("Login Successful");

            localStorage.setItem("token", result.headers["set-cookie"]);
            navigate("/home");
          } else {
            alert("wrong Credentials");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="mainContainer">
      <div className="form-container">
        <Typography
          variant="h3"
          className="animated-text"
          sx={{ marginBottom: "20px", color: "#00d5ff" }}
        >
          Login
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              type="email"
              className="animated-input-left"
              sx={{ width: "100%" }}
              label="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
              required
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              type="password"
              className="animated-input-right"
              sx={{ width: "100%" }}
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              error={!!passwordError}
              helperText={passwordError}
              required
            />
          </Grid>

          <Button
            type="submit"
            variant="contained"
            className="animated-button"
            color="primary"
            sx={{ width: "40%", marginTop: "20px" }}
            onClick={homePage}
          >
            Login
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
