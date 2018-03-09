import React from "react";

class SelectMenu extends React.Component {
  state = {
    shippingPrice: 2.5,
    selectedMenus: []
  };

  onAddMenu = menu => {
    let isAlreadyAdded = false;
    let position = null;

    for (let i = 0; i < this.state.selectedMenus.length; i++) {
      if (this.state.selectedMenus[i].id === menu.id) {
        isAlreadyAdded = true;
        position = i;
      }
    }

    if (isAlreadyAdded === false) {
      this.setState({
        selectedMenus: [
          ...this.state.selectedMenus,
          {
            id: menu.id,
            title: menu.title,
            price: menu.price,
            quantity: 1
          }
        ]
      });
    } else {
      // Modifier le menu qui est déjà ajouté :

      const newSelectedMenus = [];
      for (let i = 0; i < this.state.selectedMenus.length; i++) {
        newSelectedMenus.push(this.state.selectedMenus[i]);
      }

      newSelectedMenus[position].quantity++;

      this.setState({
        selectedMenus: newSelectedMenus
      });
    }
  };

  render() {
    return [];
  }
}

export default SelectMenu;
