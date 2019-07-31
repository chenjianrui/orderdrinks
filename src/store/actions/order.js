import * as actionTypes from "./actionTypes";

export const addOrder = data => {
  return {
    type: actionTypes.ADD_ORDER,
    payload: data
  };
};

export const removeOrder = id => {
  return {
    type: actionTypes.REMOVE_ORDER,
    id
  };
};

export const editOrder = data => {
  return {
    type: actionTypes.EDIT_ORDER,
    payload: data
  };
};
