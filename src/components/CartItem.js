import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item }) => {

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">

                <img className="lws-cartImage" src={item.image} alt="product" />

                <div className="space-y-2">
                    <h4 className="lws-cartName">{item.productName}</h4>
                    <p className="lws-cartCategory">{item.category}</p>
                    <p>BDT <span className="lws-cartPrice">{item.price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity">
                        <FaPlus />
                    </button>
                    <span className="lws-cartQuantity">{item.cartQuantity}</span>
                    <button className="lws-decrementQuantity">
                        <FaMinus />
                    </button>
                </div>

                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">2200</span></p>
            </div>

            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CartItem;