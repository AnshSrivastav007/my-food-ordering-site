import React, { useState } from "react";

function Checkout({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      return alert("Please fill in all fields.");
    }
    onSubmit({ name, address });
  };

  return (
    <div className="checkout">
      <h2>🧾 Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Your address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <div>
          <button type="submit">Place Order</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
