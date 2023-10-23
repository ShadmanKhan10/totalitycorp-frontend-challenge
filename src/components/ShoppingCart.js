import React from "react";

function ShoppingCart({ cart, setCart }) {
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    return total;
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "250px", height: "auto" }}
              />
            </div>
            <div>
              <p>
                {item.name} - ${item.price}{" "}
              </p>
              <button onClick={() => removeFromCart(item)}>Remove</button>{" "}
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p> {/* Display the total cost */}
    </div>
  );
}

export default ShoppingCart;
