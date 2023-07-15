import React, { useState } from "react";

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems } = props;
  const addProduct = () => {
    setCartItems(cartItems + quantity);
  };
  return (
    <div className="card">
      <div className="div-product-image"></div>
      <div>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          onFocus={(e) => e.target.select()}
        />
        <button className="btn-add" onClick={addProduct}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Card;
