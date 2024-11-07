import React from "react";

function EditModal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-700 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring focus:border-blue-300 font-bold"
        >
          &times;
        </button>
        <div className="text-xl text-beige-light text-center font-bold"> 
        Spice up your restaurant’s profile!
  
        </div>
        <div className="w-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default EditModal;