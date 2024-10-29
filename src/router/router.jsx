import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/register";
import Verification from "../pages/verification";
import Name from "../pages/name";
import Ride from "../pages/ride";
import RideCarSelection from "../pages/ride-car-selection";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/name" element={<Name />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/ride-car" element={<RideCarSelection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
