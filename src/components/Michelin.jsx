import { useState } from "react";
import restaurantsData from "../../Michelin.json";
import arrowLeft from "../assets/images/carousel-arrow-left.png";
import arrowRight from "../assets/images/carousel-arrow-right.png";

function MichelinCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % restaurantsData.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 3 + restaurantsData.length) % restaurantsData.length
    );
  };

  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  if (restaurantsData.length === 0) {
    return <div>No Michelin restaurants found.</div>;
  }

  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl text-green-600 font-bold text-center mb-4">
        ⭐ Michelin Restaurants ⭐
      </h1>
      <p className="text-center text-gray-600 mb-4">
        Discover Paris' finest Michelin-starred restaurants
      </p>
      <div className="carousel-container flex items-center justify-center">
        <button
          onClick={prev}
          disabled={restaurantsData.length <= 3}
          className="mx-2"
        >
          <img src={arrowLeft} alt="Previous" className="carousel-arrow" />
        </button>
        <div className="carousel grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {restaurantsData
            .slice(currentIndex, currentIndex + 3)
            .map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-beige-light rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={restaurant.imageURL}
                  alt={restaurant.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-green-600 font-semibold">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <span>{renderStars(restaurant.stars)}</span>
                  </div>
                  <p className="text-sm text-green-600 mt-1 italic">
                    {restaurant.cuisineType}
                  </p>
                  <p className="mt-2 text-sm text-green-600">
                    {restaurant.address}
                  </p>
                  <p className="mt-2 text-gray-700">{restaurant.description}</p>
                </div>
              </div>
            ))}
        </div>
        <button
          onClick={next}
          disabled={restaurantsData.length <= 3}
          className="mx-2"
        >
          <img src={arrowRight} alt="Next" className="carousel-arrow" />
        </button>
      </div>
    </div>
  );
}

export default MichelinCarousel;
