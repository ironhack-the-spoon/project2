import { useState } from "react";
import { Link } from "react-router-dom";
import SpoonLogo from "../images/the-spoon-light.png";
import PageContainer from '../components/PageContainer';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#06402b" }} className="w-full m-0 p-0">
          <PageContainer>

      <div className="max-w-screen-xl grid grid-cols-3 justify-start items-center">
        <Link to="/" className="col-span-1 flex items-center">
          <img src={SpoonLogo} className="h-36" alt="The Spoon Logo" />
        </Link>

        <div className="hidden w-full md:block col-span-2 item-center" id="navbar-default">
          <ul className="font-medium text-2xl flex flex-col md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 mx-auto">
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-white hover:underline"
              >
                Book a Table
              </Link>
            </li>
            <li>
              <Link
                to="/add-restaurant"
                className="block py-2 px-3 text-white hover:underline"
              >
                Add Your Restaurant
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white hover:underline"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden col-span-2 flex justify-end pr-6">
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
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
            <Link to="#" className="block py-2 px-3 text-white hover:underline">
              Book a Table
            </Link>
          </li>
          <li>
            <Link
              to="/add-restaurant"
              className="block py-2 px-3 text-white hover:underline"
            >
              Add Your Restaurant
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 px-3 text-white hover:underline"
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
