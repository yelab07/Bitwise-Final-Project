import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import cartContext from "./Context/ThemeContext";
import ThemeContext from "./Context/ThemeContext";
import ProductDetailsPage from "./Pages/Product/ProductDetailsPage";
import ProductsPage from "./Pages/Products/ProductsPage";
import Navbar from "./Components/NavBar/Navbar";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const styles = {
    containerStyles: {
      backgroundColor: darkMode === true ? "black" : "white",
      height: "100vh",
    },
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <cartContext.Provider value={{ cart, setCart }}>
          <Router>
            <div style={styles.containerStyles}>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <ProductsPage />
                </Route>
                <Route exact path="/product/:id">
                  <ProductDetailsPage />
                </Route>
                <Route exact path="/checkout">
                  <Checkout />
                </Route>
                <Route path="/">
                  {" "}
                  <h1>404 page</h1>
                </Route>
              </Switch>
            </div>
          </Router>
        </cartContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
