import React from "react";
import MenuBlock from "./MenuBlock";

class Menu extends React.Component {
  render() {
    const { menu } = this.props;
    const sections = Object.keys(menu);
    const blocks = [];
    for (let i = 0; i < sections.length; i++) {
      blocks.push(
        <div className="container">
          <MenuBlock
            key={i}
            title={sections[i]}
            menu={menu[sections[i]]}
            updateCart={menu => this.props.updateCart(menu)}
          />
        </div>
      );
    }
    return blocks;
  }
}

export default Menu;
