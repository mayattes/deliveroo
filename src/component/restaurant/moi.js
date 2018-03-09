import React from "react";

class MenuBlock extends React.Component {
  renderImg(picture) {
    if (picture) {
      return (
        <img
          className="card-img-top menu-picture"
          src={picture + "?width=96&height=96&auto=webp&format=jpg&fit=crop"}
        />
      );
    }
    return null;
  }
  render() {
    return (
      <div className="menu-deck">
        {this.props.menus.map((menu, index) => {
          return (
            <div
              className="menu col-6"
              key={index}
              onClick={() => this.props.onAddMenu(menu)}
            >
              {this.renderImg(menu.picture)}
              <div className="menu-body">
                <h5 className="menu-title">{menu.title}</h5>
                <p className="menu-text">{menu.price}€</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MenuBlock;
