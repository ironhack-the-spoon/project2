import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/api";
import StarRating from "../components/StarRating";
import IconLocation from '../assets/images/IconLocation.png';
import IconType from '../assets/images/IconSpoon.png';
import IconPrice from '../assets/images/IconPrice.png';
import BackArrow from '../assets/images/BackArrow.png';
import EditModal from "../components/EditModal";
import { deleteRestaurant } from "./DeleteRestaurant";
import PageContainer from '../components/PageContainer';
import FormField from "../components/FormField";


function DetailsPage() {
  const { restaurantID } = useParams();
  const [showEditModal, setShowEditModal] = useState(false);
  const [restaurantData, setRestaurantData] = useState(null);
  const [restaurantEdit, setRestaurantEdit] = useState(null);
  const [restaurantsList, setRestaurantsList] = useState([]); 

  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${restaurantID}.json`)
      .then((response) => {
        console.log("API Response:", response.data);
        setRestaurantData(response.data);
        setRestaurantEdit(response.data);
      })
      .catch((e) => console.log("Error getting projects from the API...", e));
  }, [restaurantID]);

  if (restaurantData === null) {
    return "Loading...";
  }
  console.log("Restaurant Edit:", restaurantEdit.name);

  const handleChange = (e) => {
    setRestaurantEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log("Saving restaurant data:", restaurantEdit);

    axios
      .put(`${API_URL}/projects/${restaurantID}.json`, restaurantEdit)
      .then((response) => {
        console.log("Update successful:", response.data);
        setRestaurantData(restaurantEdit);
        setShowEditModal(false);
      })
      .catch((error) => {
        console.error("Error updating restaurant:", error);
        alert("An error occurred while updating the restaurant. Please try again.");
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      deleteRestaurant(restaurantID, restaurantsList, setRestaurantsList);
    }
  };

  return (
    <PageContainer>

    <div>
      <button type="button" className="flex items-center pb-4 pt-4">
        <Link to="/" className="focus:outline-none flex items-center pl-6 pt-2">
          <img src={BackArrow} alt="Back Arrow" className="w-4 h-4" />
          <p className="pl-1 text-xs">Back</p>
        </Link>
      </button>

      <div className="restaurant-detail bg-white rounded-lg pt-2 pl-6 pr-6">
        <img
          src={restaurantData.image_url}
          alt={restaurantData.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mb-2">{restaurantData.name}</h3>
          <StarRating rating={restaurantData.rating} />
        </div>
        <p className="text-gray-700 pt-2 pb-6">{restaurantData.description}</p>
        <p className="text-gray-700 flex items-center pb-3">
          <img
            src={IconLocation}
            alt="Icon Location"
            className="w-6 h-6 object-cover rounded-md mr-2"
          />
          {restaurantData.address}
        </p>
        <p className="text-gray-700 flex items-center pb-3">
          <img
            src={IconPrice}
            alt="Icon Price"
            className="w-6 h-6 object-cover rounded-md mr-2"
          />
          Average price {restaurantData.average_price}€
        </p>
        <p className="text-gray-700 flex items-center">
          <img
            src={IconType}
            alt="Icon Type"
            className="w-6 h-6 object-cover rounded-md mr-2"
          />
          {restaurantData.type}
        </p>

        <div className="flex mt-10 mb-10">
          <button
            onClick={() => setShowEditModal(true)}
            type="button"
            className="text-[#374151] bg-[#D1D5DB] border border-[#D1D5DB] focus:outline-none hover:bg-[#E5E7EB] focus:ring-4 focus:ring-[#E5E7EB] font-medium rounded-md text-sm px-4 py-1 me-2 mb-2 dark:bg-[#4B5563] dark:text-[#F9FAFB] dark:border-[#6B7280] dark:hover:bg-[#374151] dark:hover:border-[#6B7280] dark:focus:ring-[#6B7280]"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="text-red-900 bg-red-200 border border-[#D1D5DB] focus:outline-none hover:bg-red-100 focus:ring-4 focus:ring-[#E5E7EB] font-medium rounded-md text-sm px-4 py-1 mb-2 dark:bg-[#4B5563] dark:text-[#F9FAFB] dark:border-[#6B7280] dark:hover:bg-[#374151] dark:hover:border-[#6B7280] dark:focus:ring-[#6B7280]"
          >
            Delete
          </button>
        </div>
      </div>

      <EditModal show={showEditModal} onClose={() => setShowEditModal(false)}>
  <form className="max-w-md mx-auto p-6 bg-beige-light shadow-md rounded-lg mt-4">
    <FormField
      label="Name"
      type="text"
      value={restaurantEdit.name}
      onChange={handleChange}
      name="name"
      placeholder="name"
      required
    />
    <FormField
      label="Rating"
      type="number"
      value={restaurantEdit.rating}
      onChange={handleChange}
      name="rating"
      placeholder="rating"
      min="0"
      max="5"
      step="0.5"
      required
    />
    <FormField
      label="Description"
      type="textarea"
      value={restaurantEdit.description}
      onChange={handleChange}
      name="description"
      placeholder="description"
      required
    />
    <FormField
      label="Address"
      type="text"
      value={restaurantEdit.address}
      onChange={handleChange}
      name="address"
      placeholder="address"
      required
    />
    <FormField
      label="Average Price (€)"
      type="number"
      value={restaurantEdit.average_price}
      onChange={handleChange}
      name="average_price"
      placeholder="average price"
      min="0"
      step="1"
      required
    />
    <FormField
      label="Cuisine Type"
      type="select"
      value={restaurantEdit.type}
      onChange={handleChange}
      name="type"
      options={[
        { value: "Vegetarian", label: "Vegetarian" },
        { value: "French", label: "French" },
        { value: "Asian", label: "Asian" },
      ]}
      required
    />
    <div className="flex space-between m-4">
    <button
        onClick={handleSave}
        className="text-white w-60 bg-green-700 px-4 py-2 ml-2 h-10 m-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
      >
        Save
      </button>
      <button
        onClick={() => setShowEditModal(false)}
        className="text-red-900 w-60 bg-red-200 px-4 py-2 rounded-md h-10 m-1 hover:bg-red-100 focus:outline-none focus:ring focus:border-red-300"
      >
        Cancel
      </button>

    </div>
  </form>
</EditModal>
    </div>
    </PageContainer>

  );
}

export default DetailsPage;