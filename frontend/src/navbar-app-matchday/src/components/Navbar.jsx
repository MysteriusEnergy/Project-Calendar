import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "/src/assets/matchday2.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-success"
          to="/"
        >
          <img src={logo} alt="MatchDay Logo" className="logo-navbar me-2" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center nav-links-spacing">
            <li className="nav-item">
              <Link className="nav-link nav-btn" to="/ligas">
                Ligas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-btn" to="/partidos">
                Partidos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-btn" to="/equipos">
                Equipos
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn-lg btn-success ms-lg-3 nav-btn-calendario"
            to="/calendario"
          >
            Mi Calendario
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
