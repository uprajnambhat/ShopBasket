import { combineReducers, createStore } from "redux";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";

const cartDetailsReducer = combineReducers({
  shoppingCartItems: shoppingCartReducer,
});

export const store = createStore(cartDetailsReducer);
