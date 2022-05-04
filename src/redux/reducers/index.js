import { combineReducers } from "redux";
import { productListReducer } from "./productReducer";
import { addcartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  productListReducer,
  addcartReducer,
});

export default rootReducer;
