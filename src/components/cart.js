import React from "react";

function Cart({ cart, removeFromCart, updateQuantity, onCheckout }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <span>₹{item.price * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;


