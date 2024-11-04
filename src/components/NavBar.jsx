import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Homepage</Link>
      <Link to="/about">About</Link>
      <Link to="/add-restaurant">Add Your Restaurant</Link>
    </nav>
  );
}

export default Navbar;
