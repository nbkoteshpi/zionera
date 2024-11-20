import React, { useState } from "react";
import "./userStyles2.css";
const Login = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend for authentication)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {/* <!-- Left Blank Side --> */}
          <div className="col-lg-6">{""}</div>

          {/* <!-- Right Side Form --> */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
            <div className="form-2-wrapper">
              <div className="logo text-center">
                <h1>ZionEra</h1>
              </div>
              <h4 className="text-center mb-4">Sign In to come Together</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 form-box">
                  {/* <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                  /> */}
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  {/* <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Your Password"
                    required
                  /> */}
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    name="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                    <a
                      href="forget-3.html"
                      className="text-decoration-none float-end"
                    >
                      Forget Password
                    </a>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-secondary login-btn w-100 mb-3"
                >
                  Login
                </button>
                <div className="social-login mb-3 type--A">
                  <h5 className="text-center mb-3">Social Login</h5>
                  <button className="btn btn-outline-secondary  mb-3">
                    <i className="fa-brands fa-google text-danger"></i> Sign
                    With Google
                  </button>
                  <button className="btn btn-outline-secondary mb-3">
                    <i className="fa-brands fa-facebook-f text-primary"></i>{" "}
                    Sign With Facebook
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
        </div>
      </div>
    </>
  );
};

export default Login;
