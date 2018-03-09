import React from "react";
import "./Cart.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import Formulaire from "./Formulaire";
//importer Link
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    console.log("cart", this.props.cart);
    const { subtotal } = this.props;
    return (
      <div>
        <div>
          <Link
            to={{ pathname: "/validation", state: { cart: this.props.cart } }}
          >
            <button
              className={`btn btn-deliveroo${
                subtotal === 0 ? "-empty" : ""
              }btn-block`}
            >
              Valider votre panier
            </button>
          </Link>
          {
            <ul>
              {this.props.cart.map((menu, index) => {
                return (
                  <li key={index}>
                    <ul className="d-flex justify-content-between">
                      <li>{menu.quantity}</li>
                      <li>{menu.title}</li>
                      <li>{menu.quantity * menu.price}</li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    );
  }
}

export default Cart;
