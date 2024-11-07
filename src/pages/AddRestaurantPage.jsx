// import AddRestaurantForm from "../components/AddRestaurantForm";

// function AddRestaurantPage() {
//   return (
//     <div className="max-w-md mx-auto mt-12 mb-12 p-6 bg-green-700 shadow-md rounded-lg">
//       <h1 className="text-4xl font-bold text-beige-light mb-6 text-center">
//         Spill the beans about your restaurant:
//       </h1>
//       <AddRestaurantForm />
//     </div>
//   );
// }

// export default AddRestaurantPage;

import { useState, useEffect } from "react";
import AddRestaurantForm from "../components/AddRestaurantForm";
import RestaurantsCarousel from "../pages/RestaurantsCarousel";
import axios from "axios";
import { API_URL } from "../config/api";

function AddRestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedType, setSelectedType] = useState("French");
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
      <RestaurantsCarousel
        restaurants={restaurants.filter(
          (restaurant) => restaurant.type === selectedType
        )}
        selectedType={selectedType}
      />
    </div>
  );
}

export default AddRestaurantPage;
