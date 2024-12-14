import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HotelOverview from "./pages/HotelOverview";
import HotelRestaurant from "./pages/HotelRestaurant";
import HotelMeals from "./pages/HotelMeals";
import HotelOrders from "./pages/HotelOrders";
import HotelReviews from "./pages/HotelReviews";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hotel/my_hotel/overview" element={<HotelOverview />} />
        <Route path="/hotel/my_hotel/restaurant" element={<HotelRestaurant />} />
        <Route path="/hotel/my_hotel/meals" element={<HotelMeals />} />
        <Route path="/hotel/my_hotel/orders" element={<HotelOrders />} />
        <Route path="/hotel/my_hotel/user_reviews" element={<HotelReviews />} />
        {/* ניתוב ברירת מחדל */}
        <Route path="/" element={<HotelOverview />} />
      </Routes>
    </Router>
  );
}

export default App;



  


