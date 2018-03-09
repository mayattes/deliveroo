import React from "react";
import NavBar from "../component/navbar/NavBar";
import axios from "axios";

class Validation extends React.Component {
  state = {
    inputs: []
  };
  componentDidMount() {
    axios
      .get(
        "https://lereacteurapp.s3.amazonaws.com/react/deliveroo/deliveroo-shipping-form.json"
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          inputs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { inputs } = this.state;
    const { cart } = this.props.location.state;

    return (
      <div>
        <NavBar />
        {/* <formulaire /> */}
        <div className="row">
          <div className="col-lg-8 livraison">
            <h2>Adresse de livraison</h2>

            <form onSubmit={inputs.validation}>
              <div className="row">
                {inputs.map((info, index) => {
                  console.log(inputs);

                  return (
                    <div key={index} className={`col-${info.col}`}>
                      <div className="form-group">
                        <label key={index + "labelinfo"}>{info.title}</label>
                        <input
                          className="form-control"
                          type="text"
                          key={index}
                          placeholder={info.placeholder}
                          name={info.name}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  );
                })}
                <input type="submit" />
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <h2>Panier</h2>
            <ul>
              {cart.map((menu, index) => {
                console.log("MENU", menu);
                {
                  return (
                    <li key={index}>
                      <ul className="d-flex justify-content-between">
                        <li>{menu.quantity}</li>
                        <li>{menu.title}</li>
                        <li>{menu.quantity * menu.price}</li>
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Validation;
