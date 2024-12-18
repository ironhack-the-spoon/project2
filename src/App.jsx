import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import BookTable from "./pages/BookTable";

import Restaurants from "./components/Restaurants";
import DetailsPage from "./pages/DetailsPage";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import AddRestaurantPage from "./pages/AddRestaurantPage";

import "./style/index.css";
import "./style/RestaurantsCards.css";

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/book-a-table" element={<BookTable />}></Route>
        <Route path="/restaurants" element={<Restaurants />}></Route>
        <Route path="/details/:restaurantID" element={<DetailsPage />} />
        <Route path="/add-restaurant" element={<AddRestaurantPage />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
