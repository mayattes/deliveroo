import React from "react";
import "./MenuBlock.css";
import Item from "./Item";

class MenuBlock extends React.Component {
  render() {
    const { title, menu } = this.props;
    const items = [];
    for (let i = 0; i < menu.length; i++) {
      items.push(
        <Item
          key={i}
          menu={menu[i]}
          updateCart={menu => this.props.updateCart(menu)}
        />
      );
    }
    return (
      <div className="container-menu">
        <h2>{title}</h2>
        <div className="row title-block">{items}</div>
      </div>
    );
  }
}

export default MenuBlock;
