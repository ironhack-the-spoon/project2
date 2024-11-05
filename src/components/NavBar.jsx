import logo from "../images/Logo-the-spoon.png";
import BurgerMenu from "./BugerMenu";

function Navbar() {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-40 mr-20 -ml-20" />
        </div>

        {/* Burger Menu */}
        <div className="flex items-center"></div>
        <BurgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
