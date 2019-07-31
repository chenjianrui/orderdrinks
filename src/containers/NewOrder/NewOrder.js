import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrder } from "../../store/actions/order";
import Form from "../Form/Form";
class NewOrder extends Component {
  handleSubmit = data => {
    this.props.addOrder(data);
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <Form
          type="New Order"
          buttonType="Submit"
          onClicked={this.handleSubmit}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: data => dispatch(addOrder(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewOrder);
