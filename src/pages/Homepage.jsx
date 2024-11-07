import { useState } from "react";
import RestaurantsCarousel from "../components/RestaurantsCarousel";
import PageContainer from "../components/PageContainer";
import GoogleMap from "../components/GoogleMap";
import MichelinCarousel from "../components/Michelin";

import "../style/HomePage.css";

import frenchImage from "../assets/images/homepage-french-cuisine.jpg";
import asianImage from "../assets/images/homepage-asian-cuisine.jpg";
import vegetarianImage from "../assets/images/homepage-vegetarian-cuisine.jpg";
import frenchIcon from "../assets/images/Icon-french.svg";
import asianIcon from "../assets/images/Icon-asian.svg";
import vegetarianIcon from "../assets/images/Icon-vegetarian.svg";

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
            <img src={frenchIcon} alt="French Icon" className="cuisine-icon" />
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
            <img src={asianIcon} alt="Asian Icon" className="cuisine-icon" />
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
            <img
              src={vegetarianIcon}
              alt="Vegetarian Icon"
              className="cuisine-icon"
            />
          </div>
        </div>
        {selectedType && <RestaurantsCarousel selectedType={selectedType} />}
      </div>
      <MichelinCarousel />
      <GoogleMap></GoogleMap>
    </PageContainer>
  );
}

export default Homepage;
