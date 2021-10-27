// export const initialState = {
//   cart: [],
//   user: null,
// };

// // Selector
// export const BasketTotal = (cart) =>
//   cart?.reduce((amount, item) => item.price + amount, 0);

// const reducer = (state, action) => {
//   console.log(action);
//   switch (action.type) {
//     case "ADD_TO_BASKET":
//       return {
//         ...state,
//         cart: [...state.basket, action.item],
//       };

//     case "EMPTY_BASKET":
//       return {
//         ...state,
//         cart: [],
//       };

//     case "REMOVE_FROM_BASKET":
//       const index = state.cart.findIndex(
//         (cartItem) => cartItem.id === action.id
//       );
//       let newCart= [...state.Cart];

//       if (index >= 0) {
//         newCart.splice(index, 1);
//       } else {
//         console.warn(
//           `Can't remove product (id: ${action.id}) as its not in basket!`
//         );
//       }

//       return {
//         ...state,
//         cart: newCart,
//       };

    

//     default:
//       return state;
//   }
// };

// export default reducer;
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useState } from "react";
// import cartContext from "./Context/ThemeContext";
// import ThemeContext from "./Context/ThemeContext";
// import ProductDetailsPage from "./Pages/Product/ProductDetailsPage";
// import ProductsPage from "./Pages/Products/ProductsPage";
// import Navbar from "./Components/NavBar/Navbar";
// import Checkout from "./Pages/Checkout/Checkout";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [cart, setCart] = useState([]);
//   const styles = {
//     containerStyles: {
//       backgroundColor: darkMode === true ? "black" : "white",
//       height: "100vh",
//     },
//   };
//   return (
//     <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
//       <cartContext.Provider value={{ cart, setCart }}>
//         <div className="App">
//           <Router>
//             <div style={styles.containerStyles}>
//               <Navbar />
//               <Switch>
//                 <Route exact path="/">
//                   <ProductsPage />
//                 </Route>
//                 <Route exact path="/product/:id">
//                   <ProductDetailsPage />
//                 </Route>
//                 <Route exact path="/checkout">
//                   <Checkout />
//                 </Route>
//                 <Route path="/">
//                   {" "}
//                   <h1>404 page</h1>
//                 </Route>
//               </Switch>
//             </div>
//           </Router>
//         </div>
//       </cartContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

// export default App;
