import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(basket)}
        displayType="text"
        thousandSeparator={true}
      />
    </div>
  );
}

export default Subtotal;
