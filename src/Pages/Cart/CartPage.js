import ThemeContext from "./Pages/Context/ThemeContext";
import React, { useContext } from "react";

const CartPage = () => {
      const { cart, setCart } = useContext(ThemeContext);

    return (
        <div>
            <h2> Cart page </h2>
        </div>
    )
}

export default CartPage
