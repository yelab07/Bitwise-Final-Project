import React from "react";
import { Nav, NavLink,NavMenu, NavBtn, NavBtnLink } from "./NavStyles";
import  ShoppingCartIcon from "@material-ui/icons/ShoppingBasket";
import "./Nav.css";
import Toggle from "../Toggle/Toggle";
const Navbar = () => {
  
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h3>ZAGOAL</h3>
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
        </NavMenu>
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Products</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavLink to="/cart">
              <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {/* {basket?.length} */} 0
                </span>
              </div>
            </NavLink>
          </NavBtn>
          <NavBtn>
            {/* <nav style={styles.navToggle}> */}
            <Toggle />
            {/* </nav> */}
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
