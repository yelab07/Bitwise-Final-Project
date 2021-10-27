// // import ThemeContext from "../Context/ThemeContext";
// import React, { useContext } from "react";
// import { cartContext } from "../../Context/ThemeContext";
// import ProductToCheckout from "./ProductToCheckout"
// import Subtotal from "./Subtotal";

// const CartPage = () => {
//     //   const {shoppingCart} = useContext(ThemeContext);
//     // const [cart, setCart] = shoppingCart
//     const { cart}= useContext(cartContext);
    
    
//     console.log(cart);
//     return (
//       <div className="checkout">
//         <div className="checkout__left">
//           <div>
//             <h2 className="checkout__title">Your shopping Basket</h2>

//             {cart.map((item) => (
//               <ProductToCheckout
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 // rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="checkout__right">
//           <Subtotal />
//         </div>
//       </div>
//     );
// }

// export default CartPage
