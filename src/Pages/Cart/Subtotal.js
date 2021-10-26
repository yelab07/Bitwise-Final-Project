import "./Subtotal.css";
import React, { useContext } from "react";

import CurrencyFormat from "react-currency-format";
import { BasketTotal } from "../../Context/Reducer";
import { cartContext } from "../../Context/ThemeContext";

import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
   const [{ cart }, dispatch] = useContext(cartContext);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            {/* <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small> */}
          </>
        )}
        decimalScale={2}
        value={BasketTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => history.push("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
