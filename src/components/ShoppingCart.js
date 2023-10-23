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
    <div className="lg:mt-12 md:mt-16">
      <h2 className="text-bold text-4xl">Shopping Cart</h2>
      <div>
        <ul className="flex flex-wrap justify-center">
          {cart.map((item) => (
            <li key={item.id}>
              <div
                className="p-[10px] w-[250px] m-[15px] border border-1 rounded-md"
                id="product-card"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "250px", height: "auto" }}
                  />
                </div>
                <div>
                  <p className="my-[10px]">
                    {item.name} - ${item.price}{" "}
                  </p>
                  <button
                    className="px-[10px] py-[3px] border rounded-lg text-center bg-[#F4CE14]"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>{" "}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-lg font-semibold text-center">
        Your Total: ${calculateTotal()}
      </p>{" "}
    </div>
  );
}

export default ShoppingCart;
