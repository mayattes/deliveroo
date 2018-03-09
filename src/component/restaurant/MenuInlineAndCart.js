import React from "react";
import "./MenuInlineAndCart.css";
import MenuInline from "./MenuInline";
import Cart from "./Cart";
import SelectMenu from "./SelectMenu";

class MenuInlineAndCart extends React.Component {
  render() {
    return (
      <div className="d-flex right container">
        <MenuInline menu={this.props.menu} />
        <Cart cart={this.props.cart} />
        <SelectMenu />
      </div>
    );
  }
}

export default MenuInlineAndCart;
