import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="d-flex navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand col-lg-7" href="">
            <img
              src="/img/logo/logo-green.svg"
              height="30"
              className="d-inline-block align-top deliveroo"
              alt=""
            />
          </a>
          <span className="nav-item dropdown col-lg-1 price">
            <i className="fas fa-shopping-basket" />
            <a
              className="nav-link"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="number"
              aria-haspopup="true"
              aria-expanded="false"
            >
              52,55€
            </a>
          </span>
          <span className="nav-item dropdown col-lg-2 id">
            <i className="fas fa-user" />
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Koumba KOITA
            </a>
          </span>
          <span className="nav-item dropdown col-lg-1 language">
            <a
              className="nav-link dropdown-toggle"
              href=""
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Français
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="">
                Anglais
              </a>
              <a className="dropdown-item" href="">
                Espagnol
              </a>
              <div className="dropdown-divider" />
            </div>
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;
