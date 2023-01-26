import { createStore } from "redux";
import productsReducer from "./reducers/productsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(productsReducer, composeWithDevTools());

export default store;
