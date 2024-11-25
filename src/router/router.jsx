import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/register";
import Verification from "../pages/auth/verification";
import Name from "../pages/auth/name";
import Ride from "../pages/ride/ride";
import Booked from "../pages/rent/booked";
import RideCars from "../pages/rent/cars";
import RideCarSelection from "../pages/shared/ride-car-selection";
import RideDetail from "../pages/rent/rent-details";
import MeetDriverScreen from "../pages/shared/meet-the-driver";
import StartRideScreen from "../pages/shared/start-ride";
import StartDestinationScreen from "../pages/towards-destination";
import CompletedScreen from "../pages/shared/completed";
import ReviewScreen from "../pages/shared/review";
import ThankYouScreen from "../pages/shared/thankyou";
import DriverBooking from "../pages/driver/driver-booking";
import DriverConfirmation from "../pages/driver/driver-confirmation";
import StartJourney from "../pages/shared/start-journey";
import CarDetail from "../pages/rent/car-details";
import ConfirmCar from "../pages/rent/confirm-car";
import HomePage from "../pages/static/Home";
import Wallet from "../pages/Wallet";
import PackageDelivery from "../pages/package/package-delivery";
import PackageBooked from "../pages/package/package-booked";
import ConfirmPickup from "../pages/package/confirm-pickup copy.jsx";
import ConfirmDelivery from "../pages/package/confirm-delivery";
import Bill from "../pages/Bill/bill";
import BillDetails from "../pages/bill/bill-details";
import Activity from "../pages/activity/activity";
import PrivacyPolicy from "../pages/static/privacy-policy";
import Languages from "../pages/static/languages";
import Settings from "../pages/static/Settings";
import Details from "../pages/reserve/details";
import Successful from "../pages/reserve/successful";
import Reserve from "../pages/reserve/reserve";
import DriverStart from "../pages/driver/start";
import PackageCarSelection from "../pages/package/selection";
import TrackPackage from "../pages/package/track";

import CarpoolSelection from "../pages/carpool/selection";
import Carpool from "../pages/carpool/carpool.jsx";
import ReserveRide from "../pages/reserve/reserve-ride.jsx";
import ReserveSelection from "../pages/reserve/reserve-selection.jsx";
import Driver from "../pages/reserve/driver.jsx";
// import StartDestinationScreen from "../pages/towards-destination.jsx";

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
          <Route path="/package" element={<PackageDelivery />} />
          <Route path="/package/pickup" element={<ConfirmPickup />} />
          <Route path="/package/delivery" element={<ConfirmDelivery />} />
          <Route path="/package/selection" element={<PackageCarSelection />} />
          <Route path="/package/booked" element={<PackageBooked />} />
          <Route path="/package/track" element={<TrackPackage />} />

          <Route path="/carpool" element={<Carpool />} />
          <Route path="/carpool/selection" element={<CarpoolSelection />} />
          <Route path="/carpool/driver" element={<MeetDriverScreen />} />
          <Route path="/carpool/start" element={<StartRideScreen />} />
          <Route path="/carpool/journey" element={<StartDestinationScreen />} />

          <Route path="/bill" element={<Bill />} />
          <Route path="/bill/details" element={<BillDetails />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/ride/selection" element={<RideCarSelection />} />
          <Route path="/ride/meet" element={<MeetDriverScreen />} />
          <Route path="/ride/start" element={<StartRideScreen />} />
          <Route path="/ride/completed" element={<CompletedScreen />} />
          <Route path="/ride/review" element={<ReviewScreen />} />
          <Route path="/ride/thank-you" element={<ThankYouScreen />} />
          <Route path="/rent/cars" element={<RideCars />} />
          <Route path="/rent/car/details" element={<CarDetail />} />
          <Route path="/rent/car/confirm" element={<ConfirmCar />} />
          <Route path="/rent/car/booked" element={<Booked />} />
          <Route path="/rent/car/detail" element={<RideDetail />} />
          <Route
            path="/ride-car/towards-destination"
            element={<StartDestinationScreen />}
          />
          <Route path="/drivers" element={<DriverBooking />} />
          <Route path="/driver/confirmation" element={<DriverConfirmation />} />
          <Route path="/driver/start" element={<DriverStart />} />
          <Route path="/driver/start-journey" element={<StartJourney />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reserve/ride" element={<ReserveRide />} />
          <Route path="/reserve/selection" element={<ReserveSelection />} />
          <Route path="/reserve/driver" element={<Driver />} />
          <Route path="/reserve/details" element={<Details />} />
          <Route path="/reserve/successful" element={<Successful />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
