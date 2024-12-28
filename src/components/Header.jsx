import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/home">
          <img
            src="images/logo.png"
            className="img-fluid logo-image"
            alt="logo"
          />
          <div className="d-flex flex-column">
            <strong className="logo-text">ICC Paris Centre</strong>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center ms-lg-5">
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://sites.google.com/view/icc-paris-centre"
              >
                à-propos de ICC Paris Centre
              </a>
            </li>
            {/* <li className="nav-item ms-lg-auto">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-btn btn" href="#">
                Login
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
