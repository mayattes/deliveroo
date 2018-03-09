import React from "react";
import NavBar from "../component/navbar/NavBar";
import Restaurant from "../component/restaurant/Restaurant";

class Selection extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Restaurant
          cart={this.props.cart}
          updateCart={menu => this.props.updateCart(menu)}
        />
      </div>
    );
  }
}

export default Selection;
