import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
export default combineReducers({
  orders: ordersReducer
});
