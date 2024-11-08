import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from "../assets/images/ArrowRight.png";

function MoreDetails() {
  return (
    <div className="flex justify-start"> 
      <button type="button" className="flex items-center mb-8">
        <Link to="/book-a-table" className="focus:outline-none flex items-center">
          <p className="pl-1 text-xl font-bold text-customGreen"> 
            Discover Our Selection
          </p>
          <img src={ArrowRight} alt="Arrow Right" className="pl-2 w-auto h-8" />
        </Link>
      </button>
    </div>
  );
}

export default MoreDetails;
