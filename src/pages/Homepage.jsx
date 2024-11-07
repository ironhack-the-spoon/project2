import { useState } from "react";
import RestaurantsCarousel from "./RestaurantsCarousel";
import "../style/HomePage.css";

import frenchImage from "../images/french-cuisine-homepage.jpg";
import asianImage from "../images/asian-cuisine-homepage.jpg";
import vegetarianImage from "../images/vegetarian-cuisine-homepage.jpg";
import PageContainer from '../components/PageContainer';
import GoogleMap from "../components/GoogleMap";
import HowItWorks from "../components/HowItWorks";
import AddRestaurantBanner from "../components/AddRestaurantBanner";


function Homepage() {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeSelection = (type) => {
    setSelectedType((prevType) => (prevType === type ? null : type));
  };

  return (
    <PageContainer>
      <HowItWorks>  </HowItWorks>
    <div className="homepage-container">
    <h2 className="text-3xl font-semibold text-left text-customGreen mb-8">
    Grab a spoon and dive into our diverse cuisines        </h2>
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
          <img src={asianImage} alt="Asian Cuisine" className="cuisine-image" />
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
    <AddRestaurantBanner></AddRestaurantBanner>
    </PageContainer>
  );
}

export default Homepage;
