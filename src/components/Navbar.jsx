import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="PrepVerse AI" className="logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register" className="register-btn">Get Started</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;