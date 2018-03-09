import React from "react";
import Header from "./Header";
import MenuInlineAndCart from "./MenuInlineAndCart";
import Menu from "./Menu";
import data from "../../data/data.json";
import "./Restaurant.css";

class Restaurant extends React.Component {
  render() {
    return (
      <div className="row">
        <Header restaurant={data.restaurant} />
        <MenuInlineAndCart menu={data.menu} cart={this.props.cart} />
        <Menu
          menu={data.menu}
          updateCart={menu => this.props.updateCart(menu)}
        />
      </div>
    );
  }
}

export default Restaurant;
