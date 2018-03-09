import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div className="d-flex container">
        <div className="title">
          <h1>Home / {restaurant.path}</h1>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
        <div className="picture">
          <img src={restaurant.picture} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
