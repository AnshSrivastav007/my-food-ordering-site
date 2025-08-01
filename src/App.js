import React, { useState } from "react";
import Menu from "./components/menu";
import Cart from "./components/cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId, amount) => {
    setCart(prev =>
      prev.map(i =>
        i.id === itemId
          ? { ...i, quantity: Math.max(1, i.quantity + amount) }
          : i
      )
    );
  };

  const handleOrderSubmit = (customer) => {
    const order = {
      customer,
      items: cart,
    };
    console.log("Order submitted:", order);

    alert("✅ Order placed successfully! (Simulated)");

    setCart([]);
    setShowCheckout(false);
  };

  return (
    <div className="App">
      <h1>🍽️ Food Ordering Website</h1>
      <Menu addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        onCheckout={() => setShowCheckout(true)}
      />
      {showCheckout && (
        <Checkout onSubmit={handleOrderSubmit} onCancel={() => setShowCheckout(false)} />
      )}
    </div>
  );
}

export default App;



