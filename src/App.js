import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Selection from "./containers/Selection";
import Validation from "./containers/Validation";
// Importer Validation

class App extends React.Component {
  state = {
    cart: [],
    total: 0,
    shippingPrice: 2.5
  };
  _updateCart = menu => {
    let isInCart = false;
    let position = -1;

    for (let i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].id === menu.id) {
        isInCart = true;
        position = i;
      }
    }

    if (isInCart) {
      const newCart = [];
      for (let i = 0; i < this.state.cart.length; i++) {
        newCart.push(this.state.cart[i]);
      }
      newCart[position].quantity++;
      this.setState(
        {
          cart: newCart,
          total: this.state.total + Number(newCart[position].price)
        },
        () => console.log(this.state)
      );
    } else {
      this.setState(
        {
          cart: [
            ...this.state.cart,
            {
              id: menu.id,
              title: menu.title,
              price: menu.price,
              quantity: 1
            }
          ],
          total: this.state.total + Number(menu.price)
        },
        () => console.log(this.state)
      );
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={() => (
              <Selection
                cart={this.state.cart}
                updateCart={menu => this._updateCart(menu)}
              />
            )}
          />
          <Route path="/validation" component={Validation} />
        </div>
      </Router>
    );
  }
}

export default App;
