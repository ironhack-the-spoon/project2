import restaurantsData from "../../Michelin.json";

function MichelinBanners() {
  return (
    <div className="pt-20 bg-white">
      <h1
        className="text-2xl w-full h-24 shadow-lg rounded-lg text-beige-light text-center flex justify-start pl-4 font-bold items-center"
        style={{ backgroundColor: "#06402B" }}
      >
        ⭐ Michelin Restaurants ⭐
      </h1>
      <p className="text-center text-gray-600 mb-6 italic">
        Discover Paris' finest Michelin-starred restaurants.
      </p>
      <div className="max-w-6xl mx-auto space-y-8">
        {restaurantsData.slice(0, 3).map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex flex-col md:flex-row bg-beige-light rounded-lg shadow-lg overflow-hidden relative"
          >
            <img
              src={restaurant.imageURL}
              alt={restaurant.name}
              className="w-full md:w-1/3 h-64 object-cover"
            />
            <div className="p-6 flex flex-col justify-center flex-grow">
              <h3 className="text-xl font-semibold text-green-600">
                {restaurant.name}
              </h3>
              <div className="text-sm text-gray-600 mt-1">
                {Array(restaurant.stars).fill("⭐").join("")}
              </div>
              <p className="text-sm text-green-700 mt-1 italic">
                {restaurant.cuisineType}
              </p>
              <p className="mt-2 text-gray-700">{restaurant.description}</p>
              <p className="mt-2 text-sm text-green-600 italic">
                {restaurant.address}
              </p>
            </div>
            <div className="absolute bottom-2 right-2 text-lg text-green-600">
              {Array(restaurant.stars).fill("€").join("")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MichelinBanners;
