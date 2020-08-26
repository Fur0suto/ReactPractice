import React, { Component } from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postal: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max Schwarzmüller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form className={classes.ContactData}>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        ></input>
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your mail"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="Street"
          placeholder="Street"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal code"
        ></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div>
        <h4>Enter your contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
