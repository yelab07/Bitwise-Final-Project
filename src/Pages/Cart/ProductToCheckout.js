// import React,{useContext} from "react";
// import "./ProductToCheckout.css";
// import { cartContext } from "../../Context/ThemeContext";


// function ProductToCheckout({ id, title, image, rating, price }) {
//     const [ dispatch] = useContext(cartContext);

//   const removeItem = () => {
    
//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id: id,
//     });
//   };

//   return (
//     <div className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} alt={title} />

//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="checkoutProduct__rating">
//           {/* {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>🌟</p>
//             ))} */}
//         </div>
//               {/* {!hideButton && ( */}
//                   <button onClick={removeItem}>Remove from Basket</button>
               
//               )}
//             //   {/* )} */}
        
//       </div>
//     </div>
//   );
// }

// export default ProductToCheckout;
