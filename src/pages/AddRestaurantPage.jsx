import AddRestaurantForm from "../components/AddRestaurantForm";

function AddRestaurantPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-customGreen mb-6 text-center">
        Spill the beans about your restaurant!
      </h1>
      <AddRestaurantForm />
    </div>
  );
}

export default AddRestaurantPage;
