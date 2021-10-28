import React, { useContext } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  SearchInput,
} from "./NavStyles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingBasket";
import Toggle from "../Toggle/Toggle";
import cartContext from "../../Context/cartContext";
import { countContext } from "../../App";



const Navbar = () => {
  // const{count,setCount}=useContext(countContext)
  const { cart } = useContext(cartContext);
  const adder = () => {
    let total = 0
    cart.forEach(item=>total+=item.count)
}
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h3>Fake Store</h3>
        </NavLink>

        <NavMenu>
          <>
            <SearchInput
              placeholder="Search"
              // onChange={props.onType}
              className="searchInput"
              type="text"
            />
          </>
        </NavMenu>
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Products</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavLink to="/checkout">
              <div className="header__optionBasket">
                <ShoppingCartIcon />
              </div>
              <span className="header__optionLineTwo header__basketCount">
                {adder()}
              </span>
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
