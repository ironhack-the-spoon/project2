import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/api";

import StarRating from "../components/StarRating";
import PageContainer from "../components/PageContainer";

import IconLocation from "../assets/images/IconLocation.png";
import IconType from "../assets/images/IconSpoon.png";
import IconPrice from "../assets/images/IconPrice.png";
import BackArrow from "../assets/images/BackArrow.png";

function RestaurantsList() {
    const [restaurantsData, setRestaurantsData] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/projects.json`)
            .then((response) => {
                console.log("API Response:", response.data);

                const allRestaurants = Object.keys(response.data).map((key) => ({
                    ...response.data[key],
                    id: key,
                }));

                setRestaurantsData(allRestaurants);
            })
            .catch((e) => console.log("Error getting projects from the API...", e));
    }, []);

    if (!restaurantsData.length) {
        return "Loading...";
    }

    return (
        <PageContainer>
            <button type="button" className="flex items-center pb-4 pt-4">
                <Link to="/" className="focus:outline-none flex items-center pl-6 pt-2">
                    <img src={BackArrow} alt="Back Arrow" className="w-4 h-4" />
                    <p className="pl-1 text-xs text-[#06402B]">Back</p>
                </Link>
            </button>

            <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {/* Iterate over restaurantsData */}
                {restaurantsData.map((restaurant, index) => (
                    <div
                        key={restaurant.id} // Use restaurant.id as the key
                        className="restaurant-detail bg-beige-light rounded-lg overflow-hidden shadow-md flex flex-col"
                    >
                        {/* Restaurant image */}
                        <img
                            src={restaurant.image_url}
                            alt={restaurant.name}
                            className="w-full h-32 object-cover rounded-t-lg"
                        />
                        {/* Restaurant info */}
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-[#06402B]">{restaurant.name}</h3>
                            <div className="flex justify-between items-center mb-2">
                                <StarRating rating={restaurant.rating} />
                            </div>
                            <p className="text-[#06402B] flex items-center mb-2">
                                <img
                                    src={IconLocation}
                                    alt="Icon Location"
                                    className="w-5 h-5 object-cover rounded-md mr-2"
                                />
                                {restaurant.address}
                            </p>
                            <p className="text-[#06402B] flex items-center mb-2">
                                <img
                                    src={IconPrice}
                                    alt="Icon Price"
                                    className="w-5 h-5 object-cover rounded-md mr-2"
                                />
                                Average price {restaurant.average_price}€
                            </p>
                            <p className="text-[#06402B] flex items-center mb-4">
                                <img
                                    src={IconType}
                                    alt="Icon Type"
                                    className="w-5 h-5 object-cover rounded-md mr-2"
                                />
                                {restaurant.type}
                            </p>
                        </div>

                        {/* Button */}
                        <Link
                            to={restaurant.id ? `/details/${restaurant.id}` : "#"} 
                            className="w-[90%] mx-auto mb-4 mt-auto"
                        >
                            <button
                                type="button"
                                className="w-full bg-[#06402B] text-beige-light text-center py-2 rounded-lg"
                            >
                                <p>Book a Table</p>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
}

export default RestaurantsList;