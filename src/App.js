import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { cartContext } from './Pages/Context/ThemeContext';
import ThemeContext from "./Pages/Context/ThemeContext";
import CartPage from './Pages/Cart/CartPage';
import ProductDetailsPage from './Pages/Product/ProductDetailsPage';
import ProductsPage from './Pages/Products/ProductsPage';
import Navbar from './Pages/NavBar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const[cart,setCart]=useState([])
  const styles = {
    containerStyles: {
      backgroundColor: darkMode === true ? "black" : "white",
      height: "100vh",
    },
  };
  return (
    <div className="App">
      <ThemeContext.Provider

      value={{ darkMode, setDarkMode}}
      >
        <cartContext.Provider value={{ cart, setCart }}>
          <Router>
            <div style={styles.containerStyles}>
            
              <Navbar />
              {/* <ProductDetailsPage /> */}
              <Switch>
                <div calssName="productList">
                  <Route exact path="/">
                    <ProductsPage />
                  </Route>

                  <Route exact path="/product/:id">
                    <ProductDetailsPage />
                  </Route>
                  <Route exact path="/cart">
                    <CartPage />
                  </Route>
                  <Route exact path="/checkout"></Route>
                </div>
                <Route path="/"> 404 page</Route>
              </Switch>
            </div>
          </Router>
        </cartContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
