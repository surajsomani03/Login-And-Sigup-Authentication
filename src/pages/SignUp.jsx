import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/global.css";
import { useState } from "react";

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

  const loginPage = () => {
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
      const path = `/login`;
      navigate(path);
    }
  };
  return (
    <div className="form-container">
      <Typography
        className="animated-text"
        variant="h3"
        sx={{ marginBottom: "20px" }}
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
            helperText={country}
            required
          />
        </Grid>
        <Grid
          sx={{
            width: "98%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender">
              <Grid sx={{ display: "flex" }}>
                <FormControlLabel
                  value="male"
                  control={<Radio className="animated-radio" />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio className="animated-radio" />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio className="animated-radio" />}
                  label="Other"
                />
              </Grid>
              <FormControlLabel
                control={
                  <Checkbox color="primary" className="animated-checkbox" />
                }
                label="I agreed to the terms"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "40%" }}
          onClick={loginPage}
          className="animated-button"
        >
          Sign Up
        </Button>
      </Grid>
    </div>
  );
};

export default SignUp;
