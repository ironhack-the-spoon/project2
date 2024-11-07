import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

import AddRestaurantForm from "../components/AddRestaurantForm";

function AddRestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects.json`)
      .then((response) => {
        const allRestaurants = Object.keys(response.data).map((key) => ({
          ...response.data[key],
          id: key,
        }));
        setRestaurants(allRestaurants);
        setLoading(false);
      })
      .catch((e) => {
        console.error("Error getting projects from the API...", e);
        setError(e);
        setLoading(false);
      });
  }, []);

  const handleNewRestaurant = (newRestaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data...</div>;

  return (
    <div className="max-w-md mx-auto mt-12 mb-12 p-6 bg-green-700 shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-beige-light mb-6 text-center">
        Spill the beans about your restaurant:
      </h1>
      <AddRestaurantForm onNewRestaurant={handleNewRestaurant} />
    </div>
  );
}

export default AddRestaurantPage;
