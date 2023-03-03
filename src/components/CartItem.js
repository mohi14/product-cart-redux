import React, { useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseItem, increaseItem, deleteItem } from '../redux/carts/actions';
import { refillQuantity } from '../redux/products/actions';

const CartItem = ({ item }) => {
    // const [productquantity, setProductQuantity] = useState(0)
    // const allProducts = useSelector(state => state.products)

    // const filterProduct = allProducts.map(i => {
    //     if (i.id === item.id) {
    //         return setProductQuantity(item.quantity)
    //     }
    //     else {
    //         return item
    //     }
    // })

    // console.log(productquantity, "fjalflfj")
    const dispatch = useDispatch()
    const handlePlus = (item) => {
        dispatch(increaseItem(item))
    }
    const handleMinus = (value) => {
        dispatch(decreaseItem(value))
    }

    const handleDelete = (value) => {
        dispatch(deleteItem(value))
        dispatch(refillQuantity(value))
    }

    console.log(parseInt(item.quantity), 'iii', item.cartQuantity)
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
                    <button disabled={parseInt(item.quantity) === item.cartQuantity} className="lws-incrementQuantity" onClick={() => handlePlus(item)}>
                        <FaPlus />
                    </button>
                    <span className="lws-cartQuantity">{item.cartQuantity}</span>
                    <button disabled={item.cartQuantity === 1} className="lws-decrementQuantity" onClick={() => handleMinus(item)}>
                        <FaMinus />
                    </button>
                </div>

                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{item.price * item.cartQuantity}</span></p>
            </div>

            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart" onClick={() => handleDelete(item)}>
                    <FaTrash className='text-red-400 text-lg' />
                </button>
            </div>
        </div>
    );
};

export default CartItem;