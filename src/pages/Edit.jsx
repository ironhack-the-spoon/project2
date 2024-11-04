import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit({ restaurants, callBackToEdit }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const [type, setType] = useState("");

  const { restaurantID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
<<<<<<< HEAD
    if (restaurants) {
      const restaurantToEdit = restaurants.find((restaurant) => restaurant.id === Number(restaurantID));
      if (restaurantToEdit) {
        setName(restaurantToEdit.name);
        setImage(restaurantToEdit.image_url);
        setAveragePrice(restaurantToEdit.average_price);
        setDescription(restaurantToEdit.description);
        setAddress(restaurantToEdit.address);
        setRating(restaurantToEdit.rating);
        setType(restaurantToEdit.type);
      }
=======
    const restaurantToEdit =
      restaurants &&
      restaurants.find((restaurant) => restaurant.id === Number(restaurantID));

    if (restaurantToEdit) {
      setName(restaurantToEdit.name);
      setImage(restaurantToEdit.image_url);
      setAveragePrice(restaurantToEdit.average_price);
      setDescription(restaurantToEdit.description);
      setAddress(restaurantToEdit.address);
      setRating(restaurantToEdit.rating);
      setType(restaurantToEdit.type);
>>>>>>> origin/main
    }
  }, [restaurantID, restaurants]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRestaurant = {
      id: Number(restaurantID),
      name,
      image,
      average_price: averagePrice,
      description,
      address,
      rating,
      type,
    };

    callBackToEdit(updatedRestaurant);

    setName("");
    setImage("");
    setAveragePrice("");
    setDescription("");
    setAddress("");
    setRating("");
    setType("");

    navigate(`/details/${restaurantID}`);
  };

  return (
    <div className="edit-restaurant">
      <h2>Edit Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input
            type="url"
            placeholder="https://i.imgur.com/DupGBz5.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          Name:
          <input
            type="text"
            placeholder="Restaurant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Average Price:
          <input
            type="number"
            placeholder="Average price"
            value={averagePrice}
            onChange={(e) => setAveragePrice(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label>
          Rating:
          <input
            type="number"
            step="0.5"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>

        <label>
          Type:
          <input
            type="text"
            placeholder="Type of restaurant"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default Edit;
