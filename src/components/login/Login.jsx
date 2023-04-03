import React, { useState } from "react";
import "./Login.css";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo"></div>

      <div className="login_container">
        <StoreRoundedIcon className="login_logoImage" fontSize="large" />
        <h1>Welcome to eShop</h1>

        <form>
          <h5>
            <EmailIcon fontSize="small" />
            Email
          </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />

          <h5>
            <PasswordIcon fontSize="small" /> Password
          </h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />

          <button type="submit" className="login_signInbutton" onClick={logIn}>
            Login
          </button>
        </form>

        <p>
          By continuing you agree to our Terms and Conditions, our Privacy
          Policy, and the eShop® Program Terms.
        </p>

        <button className="login_registerButton" onClick={signUp}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
