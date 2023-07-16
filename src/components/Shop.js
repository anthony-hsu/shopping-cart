// import { useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

function Shop(props) {
  const { cartItems, setCartItems } = props;
  const cards = [
    {
      id: uniqid(),
      title: "Apple",
      imageUrl:
        "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
    },
    {
      id: uniqid(),
      title: "Pear",
      imageUrl:
        "https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/products/shutterstock_1693201075.png?v=1621966032",
    },
    {
      id: uniqid(),
      title: "Strawberry",
      imageUrl:
        "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg",
    },
    {
      id: uniqid(),
      title: "Watermelon",
      imageUrl:
        "https://i5.walmartimages.com/asr/14487aaf-d86a-4b46-acaf-7621b90286bb.fb737768267fcdc95c33f355b730ad15.jpeg",
    },
    {
      id: uniqid(),
      title: "Peach",
      imageUrl: "https://glycemic-index.net/images/FVRSYndNy8.webp",
    },
    {
      id: uniqid(),
      title: "Grapes",
      imageUrl:
        "https://static.libertyprim.com/files/varietes/red-globe-large.jpg?1588355080",
    },
    {
      id: uniqid(),
      title: "Kiwi",
      imageUrl:
        "https://www.theproducemoms.com/wp-content/uploads/2022/01/kiwi-1024x1024.png",
    },
    {
      id: uniqid(),
      title: "Lemon",
      imageUrl: "https://images.heb.com/is/image/HEBGrocery/000375185-1",
    },
  ];
  // const [cards, setCards] = useState([
  //   { id: uniqid() },
  //   { id: uniqid() },
  //   { id: uniqid() },
  // ]);
  return (
    <div className="div-shop">
      {cards.map((card) => (
        <Card
          key={card.id}
          setCartItems={setCartItems}
          cartItems={cartItems}
          title={card.title}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default Shop;
