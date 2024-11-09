import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/register";
import Verification from "../pages/verification";
import Name from "../pages/name";
import Ride from "../pages/ride";
import Booked from "../pages/ride/booked";
import RideCars from "../pages/ride/cars";
import RideCarSelection from "../pages/ride-car-selection";
import RideDetail from "../pages/ride/rent-details";
import MeetDriverScreen from "../pages/meet-the-driver";
import StartRideScreen from "../pages/start-ride";
import StartDestinationScreen from "../pages/towards-destination";
import CompletedScreen from "../pages/ride/completed";
import ReviewScreen from "../pages/ride/review";
import ThankYouScreen from "../pages/ride/thankyou";
import DriverBooking from "../pages/driver-booking";
import DriverConfirmation from "../pages/driver-confirmation";
import StartJourney from "../pages/start-journey";
import CarDetail from "../pages/ride/car-details";
import ConfirmCar from "../pages/ride/confirm-car";
import HomePage from "../pages/static/Home";
import Wallet from "../pages/Wallet";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/name" element={<Name />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/ride/cars" element={<RideCars />} />
          <Route path="/ride/booked" element={<Booked />} />
          <Route path="/ride/cars/details" element={<CarDetail />} />
          <Route path="/ride/cars/confirm" element={<ConfirmCar />} />
          <Route path="/ride-car" element={<RideCarSelection />} />
          <Route path="/ride-car/detail" element={<RideDetail />} />
          <Route path="/ride-car/driver" element={<MeetDriverScreen />} />
          <Route path="/ride-car/start-ride" element={<StartRideScreen />} />
          <Route
            path="/ride-car/towards-destination"
            element={<StartDestinationScreen />}
          />
          <Route path="/ride-car/completed" element={<CompletedScreen />} />
          <Route path="/ride-car/review" element={<ReviewScreen />} />
          <Route path="/ride-car/thank-you" element={<ThankYouScreen />} />
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
