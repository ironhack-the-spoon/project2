import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";
import { deleteRestaurant } from "./DeleteRestaurant";

function getArrayFromObject(data) {
  return Object.keys(data).map((key) => {
    return { ...data[key], id: key };
  });
}
function Restaurants() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/projects.json`)
      .then((response) => {
        setRestaurantsList(getArrayFromObject(response.data));
      })
      .catch((e) => console.log("Error getting projects from the API...", e));
  }, []);

  if (restaurantsList.length === 0) {
    return "Load...";
  }
  return (
    <div className="grid grid-cols-3">
      {restaurantsList.map((restaurantDetails) => {
        return (
          <div className="restaurant-card" key={restaurantDetails.id}>
            <Link to={`/details/${restaurantDetails.id}`}>
              <h3>{restaurantDetails.name}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Restaurants;