import React, { useState } from "react";
import "../user/userStyles.css";
const Register = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend for authentication)
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Password: ", confirmPassword);
  };
  return (
    <>
      <div className="container">
        <div className="form-2-wrapper">
          <div className="logo text-center">
            <h1>ZionEra</h1>
          </div>
          <h4 className="text-center mb-4">Register to connect</h4>
          <form onSubmit={handleSubmit} className="bg-transparent">
            <input
              autoComplete="off"
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="confirm password"
              className="form-control"
              id="confirm password"
              value={confirmPassword}
              name="confirm password"
              placeholder="Enter Your confirm password"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <div className="form-check w-100 d-flex align-items-center justify-content-between my-3">
              <div className="w-25">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <div>
                <a href="forget-3.html" className="text-decoration-none">
                  Forget Password
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-outline-secondary login-btn w-100 mb-3"
            >
              Register
            </button>
            <h5 className="text-center mb-3">Social Login</h5>
            <div className="social-login mb-3 type--A column-gap-3 d-flex">
              <button className="btn btn-outline-secondary  mb-3">
                <i className="fa-brands fa-google text-danger"></i> SignUp With
                Google
              </button>
              <button className="btn btn-outline-secondary mb-3">
                <i className="fa-brands fa-facebook-f text-primary"></i> Sign
                With Facebook
              </button>
            </div>
          </form>

          {/* <!-- Register Link --> */}
          <p className="text-center register-test mt-3">
            Don't have an account?{" "}
            <a href="register-3.html" className="text-decoration-none">
              Register here
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
