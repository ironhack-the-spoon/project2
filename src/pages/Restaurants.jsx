import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";

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

  // Function to handle delete action
  const handleDelete = (id) => {
    axios
      .delete(`${API_URL}/projects/${id}.json`)
      .then((response) => {
        console.log("Restaurant deleted", response);

        const updatedList = restaurantsList.filter(
          (restaurant) => restaurant.id !== id
        );
        setRestaurantsList(updatedList);
      })
      .catch((e) => console.log("Error deleting restaurant", e));
  };

  if (restaurantsList.length === 0) {
    return "Load...";
  }

  return (
    <div>
      Restaurants
      {restaurantsList.map((restaurantDetails) => {
        return (
          <div className="restaurant-card" key={restaurantDetails.id}>
            <Link to={`/details/${restaurantDetails.id}`}>
              <h3>{restaurantDetails.name}</h3>
            </Link>
            <button onClick={() => handleDelete(restaurantDetails.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Restaurants;
