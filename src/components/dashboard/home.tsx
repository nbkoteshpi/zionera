import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./home1";
import AppComponent1 from "../../AppComponent1";
import Login2 from "../common/user/login2";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login2 />} />
        <Route path="/Home" element={<Home1 />} />
        <Route path="/Test" element={<AppComponent1 />} />
      </Routes>
    </Router>
  );
};
export default Home;
