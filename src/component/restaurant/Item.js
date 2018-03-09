import React from "react";
import "./Item.css";

class Item extends React.Component {
  render() {
    const { menu } = this.props;
    return (
      <div className="container">
        <div
          className=" row col-5 d-flex item"
          onClick={() => this.props.updateCart(menu)}
        >
          <div className="bloc-item">
            <div className="title-item">
              <h5>{menu.title}</h5>
            </div>
            {/* <div className="description-item">{menu.description}</div> */}
            <div className="price-item">{menu.price} €</div>
          </div>
          {menu.picture ? (
            <div className="image">
              <img
                src={`${
                  menu.picture
                }?width=96&height=96&auto=webp&format=jpg&fit=crop`}
                alt={menu.title}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Item;
