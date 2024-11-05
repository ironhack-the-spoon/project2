import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";

function getArrayFromObject(data) {
  return Object.keys(data).map((key) => {
    return { ...data[key], id: key };
  });
}

function Restaurants({ selectedType }) {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects.json`)
      .then((response) => {
        const data = getArrayFromObject(response.data);
        console.log("Data from API:", data);
        setRestaurantsList(data);
      })
      .catch((e) => console.log("Error getting projects from the API...", e));
  }, []);

  const filteredRestaurants = restaurantsList.filter(
    (restaurant) => restaurant.type.toLowerCase() === selectedType.toLowerCase()
  );

  if (filteredRestaurants.length === 0) {
    return <div>No restaurants found for {selectedType} cuisine.</div>;
  }

  return (
    <div className="restaurants-container">
      {filteredRestaurants.map((restaurantDetails) => (
        <div className="restaurant-card" key={restaurantDetails.id}>
          <img src={restaurantDetails.image_url} alt={restaurantDetails.name} />
          <div className="content">
            <div className="title-rating">
              <h3>{restaurantDetails.name}</h3>
              <span className="rating">{restaurantDetails.rating}</span>
            </div>
            <p className="type">{restaurantDetails.type}</p>
            <p className="price">
              Average Price: {restaurantDetails.average_price}€
            </p>
          </div>
          <Link
            to={`/details/${restaurantDetails.id}`}
            className="details-button"
          >
            More Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Restaurants;
