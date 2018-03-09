import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="d-flex col-12 container-title">
        <h2 className="menu-title">{this.props.menu.title}</h2>
      </div>
    );
  }
}

export default Title;
