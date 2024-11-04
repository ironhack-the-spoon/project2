import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/api";
import { Link } from "react-router-dom";

function DetailsPage() {
  const { restaurantID } = useParams();
  const [toggleEdit, setToggleEdit] = useState(false)
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantEdit, setRestaurantEdit] = useState(null);


  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${restaurantID}.json`)
      .then((response) => {
        console.log("API Response:", response.data);
        setRestaurantData(response.data);
        setRestaurantEdit(response.data)
      })
      .catch((e) => console.log("Error getting projects from the API...", e));
  }, [restaurantID]);

  if (restaurantData === null) {
    return "Loading...";
  }
  console.log("Restaurant Edit:", restaurantEdit.name);


  const handleChange = (e) => {
    setRestaurantEdit(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/projects/${restaurantID}.json`, restaurantEdit)
      .then((response) => {
        console.log("Update successful:", response.data);
        setRestaurantData(restaurantEdit);
        setToggleEdit(false);
      })
      .catch((error) => {
        console.error("Error updating restaurant:", error);
        alert("An error occurred while updating the restaurant. Please try again.");
      });
  };


  // restaurantEdit = {...restaurantEdit, name: input value}
  return (
    <div>
      <h2>Restaurant Details</h2>
      <div className="restaurant-detail">
        <h3>{restaurantData.name}</h3>
        <img src={restaurantData.image_url} alt={restaurantData.name} />
        <p>Rating: {restaurantData.rating}</p>
        <p>Description: {restaurantData.description}</p>
        <p>Address: {restaurantData.address}</p>
        <p>Type: {restaurantData.type}</p>
        <p>Average Price: {restaurantData.average_price || "N/A"}</p>
      </div>
      <>
        <button>
          <Link to="/">Back</Link>
        </button>
      </>

      <>
        <button onClick={() => setToggleEdit(!toggleEdit)}>
          Edit
        </button>
        {toggleEdit &&
          // when styling, create modal
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="name" value={restaurantEdit.name} onChange={handleChange} />

            <label htmlFor="rating">Rating</label>
            <input type="number" name="rating" placeholder="rating" min="0" max="5" step="0.5" value={restaurantEdit.rating} onChange={handleChange} />

            <label htmlFor="description">Description</label>
            <input type="text" name="description" placeholder="description" value={restaurantEdit.description} onChange={handleChange} />

            <label htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="address" value={restaurantEdit.address} onChange={handleChange} />

            <label htmlFor="average_price">Average Price</label>
            <input type="number" name="average_price" placeholder="average price" min="0" value={restaurantEdit.average_price} onChange={handleChange} />

            <label htmlFor="type">Type</label>
            <select name="type" value={restaurantEdit.type} onChange={handleChange}>
              <option value="Vegetarian">Vegetarian</option>
              <option value="French">French</option>
              <option value="Asian">Asian</option>
            </select>

            <button onClick={() => setToggleEdit(!toggleEdit)}>Cancel</button>
            <button onClick={(e) => handleSave(e)}>Save</button>
            <button onClick={() => axios.delete(`${API_URL}/projects/${restaurantID}.json`)}>Delete</button>
          </form>
        }
      </>
    </div>
  );
}

export default DetailsPage;
