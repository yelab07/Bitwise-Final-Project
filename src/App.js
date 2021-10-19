import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Header';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProductsPage from './Pages/ProductsPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductsPage />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetailsPage />
          </Route>
          <Route exact path="/cart"></Route>
          <Route exact path="/checkout"></Route>
          <Route  path="/"> 404 page</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
