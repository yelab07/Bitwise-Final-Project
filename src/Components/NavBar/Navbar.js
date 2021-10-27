import React, { useContext } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasket";
import "./Nav.css";
import Toggle from "../Toggle/Toggle";
import cartContext from "../../Context/ThemeContext";

const Navbar = () => {
  const { cart } = useContext(cartContext);
  const adder = () => {
    let total = 0
    cart.forEach(item=>total+=item.count)
}
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h3>OwnIt </h3>
        </NavLink>

        <NavMenu>
          <div className="formContainer">
            <input
              placeholder="Search"
              // onChange={props.onType}
              className="searchInput"
              // value={props.searchText}
              type="text"
            />
          </div>
          npm
        </NavMenu>
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Products</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavLink to="/checkout">
              <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {adder()}
                </span>
              </div>
            </NavLink>
          </NavBtn>
          <NavBtn>
            <Toggle />
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
