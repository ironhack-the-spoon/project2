import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/api";
import "../style/RestaurantsCarousel.css";
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";

function RestaurantsCarousel({ selectedType }) {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects.json`);
        const allRestaurants = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        console.log("All Restaurants:", allRestaurants);

        const filteredRestaurants = allRestaurants.filter((restaurant) => {
          const isMatchingType =
            restaurant.type &&
            restaurant.type.toLowerCase() === selectedType.toLowerCase();
          console.log(
            `Restaurant ${restaurant.name} isMatchingType:`,
            isMatchingType
          );
          return isMatchingType;
        });
        console.log("Filtered Restaurants:", filteredRestaurants);

        setRestaurantsList(filteredRestaurants);
        setCurrentIndex(0);
      } catch (e) {
        console.log("Error getting projects from the API...", e);
      }
    };

    fetchRestaurants();
  }, [selectedType]);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % restaurantsList.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 3 + restaurantsList.length) % restaurantsList.length
    );
  };

  if (restaurantsList.length === 0) {
    return <div>No restaurants found for {selectedType} cuisine.</div>;
  }

  return (
    <div className="carousel-container">
      <button onClick={prev} disabled={restaurantsList.length <= 3}>
        <img src={arrowLeft} alt="Previous" className="carousel-arrow" />
      </button>
      <div className="carousel">
        {restaurantsList
          .slice(currentIndex, currentIndex + 3)
          .map((restaurant) => (
            <Link
              to={`/details/${restaurant.id}`}
              key={restaurant.id}
              className="restaurant-link"
            >
              <div className="restaurant-card">
                <img src={restaurant.image_url} alt={restaurant.name} />
                <div className="content">
                  <h3>{restaurant.name}</h3>
                  <p>Type: {restaurant.type}</p>
                  <p>Average Price: {restaurant.average_price}€</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <button onClick={next} disabled={restaurantsList.length <= 3}>
        <img src={arrowRight} alt="Next" className="carousel-arrow" />
      </button>
    </div>
  );
}

export default RestaurantsCarousel;
