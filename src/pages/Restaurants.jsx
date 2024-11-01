import  { useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";
function Restaurants() {

  const [ restaurantsList, setRestaurantsList] = useState([]);

  console.log(restaurantsList)

    useEffect(() => {
      axios.get(`${API_URL}/projects.json`)
      .then(response => {
        setRestaurantsList(response.data["-OAcoLpdhxVFn7lPXMMf"])
      })
      .catch(e => console.log("Error getting projects from the API...", e));    
    }, []);

    if (restaurantsList === null) {
      return "Load..."
    }

  return (
    <div>Restaurants
      {restaurantsList && restaurantsList.map(restaurantDetails => {
        return (
          <div className="restaurant-card" key={restaurantDetails.id}>
          <Link to={`/details/${restaurantDetails.id}`}>
              <h3>{restaurantDetails.name}</h3>
          </Link>
      </div>
        );
      })}
    </div>
  )
}

export default Restaurants