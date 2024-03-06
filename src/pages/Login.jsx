import { Button, Grid, TextField, Typography } from "@mui/material";
import "../css/global.css";

const Login = () => {
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
            required
          />
        </Grid>
        <Grid item sx={{ width: "50%" }} sm={6} xs={12}>
          <TextField
            type="password"
            className="animated-input-right"
            sx={{ width: "100%" }}
            label="Password"
            required
          />
        </Grid>

        <Button
          type="submit"
          variant="contained"
          className="animated-button"
          color="primary"
          sx={{ width: "40%", marginTop: "20px" }}
        >
          Sign Up
        </Button>
      </Grid>
    </div>
  );
};

export default Login;
