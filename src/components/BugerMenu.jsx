import { useState } from "react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Burger button*/}
      <button
        className="text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-9 h-9"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile & little screen */}
      {isOpen && (
        <div className="mt-4 space-y-2">
          <Link
            to="/"
            className="block text-white hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Homepage
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/add-restaurant"
            className="block text-white hover:text-gray-400"
            onClick={() => setIsOpen(false)}
          >
            Add Your Restaurant
          </Link>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
