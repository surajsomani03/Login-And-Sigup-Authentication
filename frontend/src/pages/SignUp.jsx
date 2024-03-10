import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import { useState } from "react";
import  axios  from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");

  const validateFirstName = () => {
    if (!firstName.trim()) {
      setFirstNameError("First Name is required");
      return false;
    }
    setFirstNameError("");
    return true;
  };

  const validateLastName = () => {
    if (!lastName.trim()) {
      setLastNameError("First Name is required");
      return false;
    }
    setLastNameError("");
    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required");
      return false;
    } else if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const validateDob = () => {
    if (!dob.trim()) {
      setDobError("Date of Birth is required");
      return false;
    }

    setDobError("");
    return true;
  };

  const validateAddress = () => {
    if (!address.trim()) {
      setAddressError("Address is required");
      return false;
    }
    setAddressError("");
    return true;
  };

  const validateCity = () => {
    if (!city.trim()) {
      setCityError("City is required");
      return false;
    }

    setCityError("");
    return true;
  };

  const validateCountry = () => {
    if (!country.trim()) {
      setCountryError("Country is required");
      return false;
    }

    setCountryError("");
    return true;
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const loginPage = (event) => {
    if (
      validateFirstName() ||
      validateLastName() ||
      validateEmail() ||
      validatePassword() ||
      validateDob() ||
      validateAddress() ||
      validateCity() ||
      validateCountry()
    ) {
      event.preventDefault();

      axios
        .post("http://localhost:3001/register", {
          firstName,
          lastName,
          email,
          password,
          dob,
          address,
          city,
          country,
        })
        .then((result) => {
          if (result.data === "Already registered") {
            alert("Already registered! Please login to proceed");
            navigate("/login");
          } else {
            alert("regisetration successful");
            navigate("/login");
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
          className="animated-text"
          variant="h3"
          sx={{ marginBottom: "20px", color: "#00d5ff" }}
        >
          Sign Up
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
              className="animated-input-left"
              sx={{ width: "100%" }}
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              onBlur={validateFirstName}
              error={!!firstNameError}
              helperText={firstNameError}
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-right"
              sx={{ width: "100%" }}
              label="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              onBlur={validateLastName}
              error={!!lastNameError}
              helperText={lastNameError}
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-left"
              type="email"
              sx={{ width: "100%" }}
              label="Email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-right"
              type="password"
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
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-left"
              type="date"
              sx={{ width: "100%" }}
              InputLabelProps={{ shrink: true }}
              label="Date Of Birth"
              value={dob}
              onChange={handleDobChange}
              onBlur={validateDob}
              error={!!dobError}
              helperText={dobError}
              required
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-right"
              sx={{ width: "100%" }}
              label="Address"
              value={address}
              onChange={handleAddressChange}
              onBlur={validateAddress}
              error={!!addressError}
              helperText={addressError}
              required
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-left"
              sx={{ width: "100%" }}
              label="City"
              value={city}
              onChange={handleCityChange}
              onBlur={validateCity}
              error={!!cityError}
              helperText={cityError}
              required
            />
          </Grid>
          <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
            <TextField
              className="animated-input-right"
              sx={{ width: "100%" }}
              label="Country"
              value={country}
              onChange={handleCountryChange}
              onBlur={validateCountry}
              error={!!countryError}
              helperText={countryError}
              required
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "40%", marginTop: "10px" }}
            onClick={loginPage}
            className="animated-button"
          >
            Sign Up
          </Button>
        </Grid>
        <p className="container my-2">Already have an account ?</p>
        <a href="/login">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "40%" }}
            className="animated-button"
          >
            Login
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SignUp;
