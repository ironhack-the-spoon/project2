import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import "../style/AddRestaurant.css";


function AddRestaurantForm() {
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [description, setDescription] = useState("");
  const [cuisine, setCuisine] = useState("French"); // set up a default value: french
  const [averagePrice, setAveragePrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      address,
      description,
      cuisine,
      averagePrice,
    };

    axios
      .post(`${API_URL}/projects.json`, newRestaurant)
      .then((response) => {
        console.log("Restaurant added:", response.data);
        // reset the form
        setName("");
        setaddress("");
        setDescription("");
        setCuisine("French");
        setAveragePrice("");
      })
      .catch((error) => {
        console.error("There was an error adding the restaurant!", error);
      });
  };

  return (
    <div className="add-restaurant-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cuisine:</label>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            required
          >
            <option value="French">French</option>
            <option value="Asian">Asian</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
        <div>
          <label>Average Price (€):</label>
          <input
            type="number"
            value={averagePrice}
            onChange={(e) => setAveragePrice(e.target.value)}
            required
            min="0"
            step="1"
          />
        </div>
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurantForm;
