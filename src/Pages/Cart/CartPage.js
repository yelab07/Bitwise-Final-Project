// import ThemeContext from "../Context/ThemeContext";
import React, { useContext } from "react";
import { cartContext } from "../Context/ThemeContext";
const CartPage = () => {
    //   const {shoppingCart} = useContext(ThemeContext);
    // const [cart, setCart] = shoppingCart
    const { cart, setCart }= useContext(cartContext);
    const[id,title,price]= cart
    
    console.log(title);
    return (
        <div>
            <h2>Price:{title}</h2>
        </div>
    )
}

export default CartPage
