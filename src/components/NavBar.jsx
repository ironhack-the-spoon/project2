import { useState } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import SpoonLogo from "../assets/images/Logo-the-spoon-light.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#06402b" }} className="w-full m-0 p-0">
      <PageContainer>
        <div className="max-w-screen-xl flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={SpoonLogo} className="h-36" alt="The Spoon Logo" />
          </Link>

          <div className="hidden md:flex flex-grow justify-center" id="navbar-default">
            <ul className="font-medium text-2xl flex space-x-8">
              <li>
                <Link
                  to="/book-a-table"
                  className="block py-2 px-4 text-[#F1E6D8] hover:underline"
                >
                  Book a Table
                </Link>
              </li>
              <li>
                <Link
                  to="/add-restaurant"
                  className="block py-2 px-4 text-[#F1E6D8] hover:underline"
                >
                  Add Your Restaurant
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 text-[#F1E6D8] hover:underline"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex justify-end pr-6">
            <button className="text-[#F1E6D8]" onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <ul className="font-medium text-sm flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/book-a-table" className="block py-2 px-3 text-[#F1E6D8] hover:underline">
                Book a Table
              </Link>
            </li>
            <li>
              <Link
                to="/add-restaurant"
                className="block py-2 px-3 text-[#F1E6D8] hover:underline"
              >
                Add Your Restaurant
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-[#F1E6D8] hover:underline"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </PageContainer>
    </nav>
  );
}

export default Navbar;
