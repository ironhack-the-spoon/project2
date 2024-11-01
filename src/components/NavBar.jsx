import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
        <h1>Navbar</h1>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        </div>
  )
}

export default Navbar