import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";




function DetailsPage() {
  const { restaurantID } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    axios.get(`${API_URL}/projects/${restaurantID}.json`)
      .then(response => setRestaurantData((response.data)))
      .catch(e => console.log("Error getting projects from the API...", e));
  }, [restaurantID]);

  if (restaurantData === null) {
    return "Loading...";
  }



  return (
    <div>
      <h2>Restaurant Details</h2>
      {restaurantData ? (
        <div className="restaurant-detail">
          <h3>{restaurantData.name}</h3>
          <img src={restaurantData.image_url} alt={restaurantData.name} />
          <p>Average Price: {restaurantData.average_price}</p>
          <p>Description: {restaurantData.description}</p>
          <p>Address: {restaurantData.address}</p>
          <p>Rating: {restaurantData.rating}</p>
          <p>Type: {restaurantData.type}</p>
        </div>
      ) : (
        "Loading..."
      )}
      <button>
        <Link to="/">Back</Link>
      </button>
      <button>
        <Link to={`/edit/${restaurantID}`}>Edit</Link>
      </button>
    </div>
  );
}

export default DetailsPage;