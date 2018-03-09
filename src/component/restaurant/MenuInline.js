import React from "react";
import "./MenuInline.css";

class MenuInline extends React.Component {
  render() {
    const { menu } = this.props;
    const submenu = [];
    const keys = Object.keys(menu);
    for (let i = 0; i < keys.length; i++) {
      submenu.push(<li key={i}>{keys[i]}</li>);
    }
    return (
      <ul className="d-flex inlineMenu">
        {submenu.slice(0, 4)}
        {submenu.slice(5, 6)}
        <div className="dropdown show">
          <a
            className="btn btn-secondary dropdown-toggle"
            href=""
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            plus
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="">
              {submenu[4]}
            </a>
            <a className="dropdown-item" href="">
              {submenu[6]}
            </a>
            <a className="dropdown-item" href="">
              {submenu[7]}
            </a>
            <a className="dropdown-item" href="">
              {submenu[8]}
            </a>
            <a className="dropdown-item" href="">
              {submenu[9]}
            </a>
            <a className="dropdown-item" href="">
              {submenu[10]}
            </a>
            <a className="dropdown-item" href="">
              {submenu[11]}
            </a>
          </div>
        </div>
      </ul>
    );
  }
}

export default MenuInline;
