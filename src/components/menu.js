import React from "react";

const menuItems = [
  { id: 1, name: "Burger", price: 100 },
  { id: 2, name: "Pizza", price: 200 },
  { id: 3, name: "Pasta", price: 150 },
  { id: 4, name: "Fries", price: 80 },
];

function Menu({ addToCart }) {
  return (
    <div className="menu">
      <h2>📋 Menu</h2>
      {menuItems.map(item => (
        <div key={item.id} className="menu-item">
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;


