import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import ConfettiCelebration from "./ConfettiCelebration";
import FormField from "./FormField";

function AddRestaurantForm({ onNewRestaurant }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("French");
  const [average_price, setAverage_price] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [rating, setRating] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      name,
      address,
      description,
      type,
      average_price,
      image_url: imageUrl,
      rating,
    };

    axios
      .post(`${API_URL}/projects.json`, newRestaurant)
      .then((response) => {
        console.log("Restaurant added:", response.data);
        onNewRestaurant(response.data);

        // Reset the form
        setName("");
        setAddress("");
        setDescription("");
        setType("French");
        setAverage_price("");
        setImageUrl("");
        setRating("");

        // Show confetti
        setShowConfetti(true);

        // Hide confetti after a few seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("There was an error adding the restaurant!", error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-beige-light shadow-md rounded-lg">
      <ConfettiCelebration show={showConfetti} />
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormField
          label="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <FormField
          label="Description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <FormField
          label="Type"
          type="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
          options={[
            { value: "French", label: "French" },
            { value: "Asian", label: "Asian" },
            { value: "Vegetarian", label: "Vegetarian" },
          ]}
          required
        />
        <FormField
          label="Average Price (€)"
          type="number"
          value={average_price}
          onChange={(e) => setAverage_price(Number(e.target.value))}
          required
          min={0}
          step={1}
        />
        <FormField
          label="Image URL"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <FormField
          label="Rating"
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
          min={0}
          max={5}
          step={0.5}
        />
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
