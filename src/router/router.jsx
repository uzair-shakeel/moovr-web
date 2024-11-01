import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/register";
import Verification from "../pages/verification";
import Name from "../pages/name";
import Ride from "../pages/ride";
import RideCarSelection from "../pages/ride-car-selection";
import MeetDriverScreen from "../pages/meet-the-driver";
import StartRideScreen from "../pages/start-ride";
import StartDestinationScreen from "../pages/towards-destination";
import CompletedScreen from "../pages/ride/completed";
import DriverBooking from "../pages/driver-booking";
import DriverConfirmation from "../pages/driver-confirmation";
import StartJourney from "../pages/start-journey";

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
          <Route path="/ride-car/driver" element={<MeetDriverScreen />} />
          <Route path="/ride-car/start-ride" element={<StartRideScreen />} />
          <Route
            path="/ride-car/towards-destination"
            element={<StartDestinationScreen />}
          />
          <Route path="/ride-car/completed" element={<CompletedScreen />} />
          <Route path="/ride-car/drivers" element={<DriverBooking />} />
          <Route path="/ride-car/start-journey" element={<StartJourney />} />
          <Route
            path="/ride-car/drivers/confirmation"
            element={<DriverConfirmation />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
