import React, { useState } from "react";

function Card(props) {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, setCartItems, title, imageUrl } = props;
  const addProduct = () => {
    setCartItems(cartItems + quantity);
  };
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="img-product" />
      <p className="p-product-title">{title}</p>
      <div className="div-add-item">
        <input
          className="input-add"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          onFocus={(e) => e.target.select()}
        />
        <button className="btn-add" onClick={addProduct}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
