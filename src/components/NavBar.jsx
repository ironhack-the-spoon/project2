import { Link } from "react-router-dom";
import logo from "../images/Logo-the-spoon.png";

function Navbar() {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-20 mr-4 -ml-4" />
        </div>

        {/* Navigation link section that will be use for a burger menu */}
        <div className="flex space-x-5">
          <Link to="/" className="text-white hover:text-gray-200">
            Homepage
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="/add-restaurant" className="text-white hover:text-gray-200">
            Add Your Restaurant
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
