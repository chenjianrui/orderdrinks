import React, { Component } from "react";
import { connect } from "react-redux";
import { editOrder } from "../../store/actions/order";
import Form from "../Form/Form";

class Edit extends Component {
  handleSubmit = data => {
    this.props.editOrder(data);
    this.props.history.push("/");
  };
  render() {
    const { title, price, notes, id } = this.props.order;
    console.log(this.props.order);
    return (
      <div>
        <Form
          type="Edit Order"
          title={title}
          price={price}
          notes={notes}
          id={id}
          buttonType="Edit"
          onClicked={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, prevProps) => {
  const id = parseInt(prevProps.match.params.id);
  const updateOrder = state.orders.filter(order => order.id === id);
  return {
    order: updateOrder[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editOrder: data => dispatch(editOrder(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
