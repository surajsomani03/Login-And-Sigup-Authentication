const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./models/formData");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect("mongodb://0.0.0.0:27017/loginAndSignup");

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, "suraj", {
    expiresIn: "1h",
  });
};

app.post("/register", (req, res) => {
  const { email } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        const token = createToken(user);

        res.cookie("token", token, {
          httpOnly: true,
          maxAge: 3600000,
        });
        
        res.json("success");
      } else {
        res.json("wrong password");
      }
    } else {
      res.json("no record found");
    }
  });
});

app.listen(3001, () => {
  console.log("Server listining on http://127.0.0.1:3001");
});
