import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home1 from "./home1";
import AppComponent1 from "../../AppComponent1";
import Login2 from "../common/user/login2";
import Register from "../common/user/register";
import Register1 from "../common/user/register1";
import BranchTest from "../branches/Branch.tsx";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Test" element={<AppComponent1 />} />
        <Route path="/Branch" element={<BranchTest />} />

        {/* <Route path='/' element={<Home1 />} />
        <Route path='/Home' element={<Home1 />} />
        <Route path='/Test' element={<AppComponent1 />} /> */}


      </Routes>
    </Router>
  );
};
export default Home;