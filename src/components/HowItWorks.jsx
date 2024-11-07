import React from 'react';

function HowItWorks() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-left text-customGreen mb-8">
          How It Works?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-beige-light p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-customGreen mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-customGreen mb-4">
              Discover Our Restaurants
            </h3>
            <p className="text-center text-gray-600">
              Explore a curated list of amazing restaurants to enjoy your next meal!
            </p>
          </div>

          <div className="flex flex-col items-center bg-beige-light p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-customGreen mb-4">⚙️</div>
            <h3 className="text-xl font-semibold text-customGreen mb-4">
              Customize Restaurants
            </h3>
            <p className="text-center text-gray-600">
              Personalize your restaurant experience based on your preferences.
            </p>
          </div>

          <div className="flex flex-col items-center bg-beige-light p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-customGreen mb-4">➕</div>
            <h3 className="text-xl font-semibold text-customGreen mb-4">
              Add Your Own Restaurant
            </h3>
            <p className="text-center text-gray-600">
              Share your favorite spots with the world by adding your own restaurant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;