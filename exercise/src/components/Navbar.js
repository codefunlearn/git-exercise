import { Link } from "react-router-dom"
import { navbar } from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={navbar}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/add-movie">Add Movie</Link>
    </nav>
  );
}
 
export default Navbar;