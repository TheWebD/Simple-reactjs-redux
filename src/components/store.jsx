import { createStore } from "redux"
import { cartReducer } from "../components/reducers/CartReducers"

const store = createStore(cartReducer)

export default store;