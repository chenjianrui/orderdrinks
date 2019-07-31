import * as actionTypes from "../actions/actionTypes";
const initialState = JSON.parse(localStorage.getItem("orders")) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      const updateAddOrder = [...state, action.payload];
      localStorage.setItem("orders", JSON.stringify(updateAddOrder));
      return updateAddOrder;

    case actionTypes.REMOVE_ORDER:
      const removeOrderId = action.id;
      const updateRemoveOrder = state.filter(
        order => order.id !== removeOrderId
      );
      localStorage.setItem("orders", JSON.stringify(updateRemoveOrder));
      return updateRemoveOrder;

    case actionTypes.EDIT_ORDER:
      const editOrderId = action.payload.id;
      const updateEditOrder = state.map(order => {
        if (order.id === editOrderId) {
          order = action.payload;
        }
        return order;
      });
      localStorage.setItem("orders", JSON.stringify(updateEditOrder));
      return updateEditOrder;

    default:
      return state;
  }
};
