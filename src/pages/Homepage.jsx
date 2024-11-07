import { useState } from "react";
import RestaurantsCarousel from "../components/RestaurantsCarousel";
import PageContainer from "../components/PageContainer";
import GoogleMap from "../components/GoogleMap";

import "../style/HomePage.css";

import frenchImage from "../assets/images/homepage-french-cuisine.jpg";
import asianImage from "../assets/images/homepage-asian-cuisine.jpg";
import vegetarianImage from "../assets/images/homepage-vegetarian-cuisine.jpg";

function Homepage() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelection = (type) => {
    setSelectedType((prevType) => (prevType === type ? null : type));
  };

  return (
    <PageContainer>
      <div className="homepage-container">
        <div className="cuisine-cards">
          <div
            className={`cuisine-card ${
              selectedType === "French" ? "selected" : ""
            }`}
            onClick={() => handleTypeSelection("French")}
          >
            <img
              src={frenchImage}
              alt="French Cuisine"
              className="cuisine-image"
            />
            <h2>French</h2>
          </div>
          <div
            className={`cuisine-card ${
              selectedType === "Asian" ? "selected" : ""
            }`}
            onClick={() => handleTypeSelection("Asian")}
          >
            <img
              src={asianImage}
              alt="Asian Cuisine"
              className="cuisine-image"
            />
            <h2>Asian</h2>
          </div>
          <div
            className={`cuisine-card ${
              selectedType === "Vegetarian" ? "selected" : ""
            }`}
            onClick={() => handleTypeSelection("Vegetarian")}
          >
            <img
              src={vegetarianImage}
              alt="Vegetarian Cuisine"
              className="cuisine-image"
            />
            <h2>Vegetarian</h2>
          </div>
        </div>
        {selectedType && <RestaurantsCarousel selectedType={selectedType} />}
      </div>
      <GoogleMap></GoogleMap>
    </PageContainer>
  );
}

export default Homepage;
