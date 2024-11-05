import axios from "axios";
import { API_URL } from "../config/api";

export const deleteRestaurant = (id, restaurantsList, setRestaurantsList) => {
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
