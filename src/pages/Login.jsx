import { Button, Grid, TextField, Typography } from "@mui/material";
import "../css/global.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // async function getData() {
  //   try {
  //     let data = (
  //       await fetch("https://jsonplaceholder.typicode.com/posts")
  //     ).json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  let getData = async () => {
    try {
      // let data1 = (
      //   await fetch("https://jsonplaceholder.typicode.com/posts")
      // ).json();
      // console.log(data1);

      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      data = await data.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  getData();

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

  const homePage = () => {
    if (validateEmail() || validatePassword()) {
      alert("Login Success!");
    }
  };

  return (
    <div className="form-container">
      <Typography
        variant="h3"
        className="animated-text"
        sx={{ marginBottom: "20px" }}
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
          Sign Up
        </Button>
      </Grid>
    </div>
  );
};

export default Login;
