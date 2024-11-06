import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function AddRestaurantForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [cuisine, setCuisine] = useState("French");
  const [averagePrice, setAveragePrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      address,
      description,
      cuisine,
      averagePrice,
      image_url: imageUrl,
      rating,
    };

    axios
      .post(`${API_URL}/projects.json`, newRestaurant)
      .then((response) => {
        console.log("Restaurant added:", response.data);

        // Reset the form
        setName("");
        setAddress("");
        setDescription("");
        setCuisine("French");
        setAveragePrice("");
        setImageUrl("");
        setRating("");

        // Show confetti
        setShowConfetti(true);

        // Hide confetti after a few seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("There was an error adding the restaurant!", error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      {showConfetti && <Confetti width={width} height={height} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Address:
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Description:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Cuisine:
          </label>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="French">French</option>
            <option value="Asian">Asian</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Average Price (€):
          </label>
          <input
            type="number"
            value={averagePrice}
            onChange={(e) => setAveragePrice(e.target.value)}
            required
            min="0"
            step="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Image URL:
          </label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-customGreen">
            Rating:
          </label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="0"
            max="5"
            step="0.5"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300"
        >
          Add Restaurant
        </button>
      </form>
      {showConfetti && (
        <div className="mt-4 text-center text-lg font-semibold text-customGreen">
          Congrats! You added your restaurant!
        </div>
      )}
    </div>
  );
}

export default AddRestaurantForm;
