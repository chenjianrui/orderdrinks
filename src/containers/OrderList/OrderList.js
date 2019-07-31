import React, { Component } from "react";
import { removeOrder } from "../../store/actions/order";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./OrderList.css";
class OrderList extends Component {
  handleRemove = id => {
    this.setState({
      orders: this.state.orders.filter(order => order.id !== id)
    });
  };

  render() {
    const { orders } = this.props;
    let orderList = <div>No orders.</div>;
    if (orders.length > 0) {
      orderList = (
        <ul>
          {orders.map(order => (
            <li className="order-list-item" key={order.id}>
              <div className="item">
                <Link to={`/edit/${order.id}`}>
                  <p>
                    {order.title}{" "}
                    <span style={{ fontWeight: "600", color: "red" }}>
                      ${order.price}
                    </span>{" "}
                  </p>
                  <p>{order.notes || "No Notes"}</p>
                </Link>
              </div>
              <span onClick={() => this.props.removeOrder(order.id)}>X</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <>
        <Link to="/order" className="btn btn-primary">
          New Order
        </Link>
        <div className="order-list-content">{orderList}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeOrder: id => dispatch(removeOrder(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);
