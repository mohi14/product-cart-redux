import React from 'react';
import { FaShoppingBag } from "react-icons/fa";

const Navbar = ({ setTab }) => {
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={require('../images/logo.png')} alt="LWS" className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <a href="#" className="navHome" id="lws-home" onClick={() => setTab("home")}> Home </a>
                    <a href="#" className="navCart" id="lws-cart" onClick={() => setTab("cart")}>
                        <FaShoppingBag />
                        <span id="lws-totalCart">0</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;