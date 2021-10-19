import React from 'react'
import { Link } from "react-router-dom"
const Header = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/product/:id">Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
            
          </li>
          
        </ul>
      </div>
    );
}

export default Header
