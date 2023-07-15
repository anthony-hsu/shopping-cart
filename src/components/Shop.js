import React, { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

function Shop() {
  const [cards, setCards] = useState([
    { id: uniqid() },
    { id: uniqid() },
    { id: uniqid() },
  ]);
  return (
    <div>
      {cards.map((card) => (<Card key={card.id} />))}
    </div>
  );
}

export default Shop;
