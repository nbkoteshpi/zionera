import React, { useEffect, useState } from "react";
import "../user/userStyles.css";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "abhi",
    email: "abhi@gamil.com",
    password: "123",
    confirmpassword: "123",
  });

  useEffect(() => {
    console.log("Form Data Updated: ", formData);
  }, [formData]);
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    console.log("1 " + formData);

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
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
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>ConfirmPassword:</label>
              <input
                type="text"
                name="confirmPassword"
                value={formData.confirmpassword}
                onChange={handleChange}
              />
            </div>
            <button onSubmit={handleSubmit}>Submit Data</button>
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
