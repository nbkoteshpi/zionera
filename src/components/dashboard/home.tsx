import React from "react";
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Home1 from "./home1";
import AppComponent1 from "../../AppComponent1";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/Test' element={<AppComponent1 />} />
      </Routes>
    </Router>
  );
};
export default Home;
