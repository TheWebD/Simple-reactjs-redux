import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "./actions/CartAction";

const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
        return(
        <div className="parent-cart">
            <div className="cart">
                <h2>Number of Items in Cart: {state.numOfItems}</h2>
                <button onClick={() => {
                    dispatch(addItem())
                }} className="green">Add Item to Cart</button>
                <button onClick={() => {
                    dispatch(deleteItem())
                }} className="red" disabled={state.numOfItems <= 0 ? true : false}>Delete Item from Cart</button>
            </div>
        </div>
        )
}

export default Cart;
