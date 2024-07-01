import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const Gadgets = getData();

const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tele.ready();
  });

  const onAdd = (Gadget) => {
    const exist = cartItems.find((x) => x.id === Gadget.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === Gadget.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...Gadget, quantity: 1 }]);
    }
  };

  const onRemove = (Gadget) => {
    const exist = cartItems.find((x) => x.id === Gadget.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== Gadget.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === Gadget.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };

  return (
    <>
      <h1 className="heading">Electronic Gadgets Online Shopping</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout}/>
      <div className="cards__container">
        {Gadgets.map((Gadget) => {
          return (
            <Card Gadget={Gadget} key={Gadget.id} onAdd={onAdd} onRemove={onRemove} />
          );
        })}
      </div>
    </>
  );
}

export default App;
