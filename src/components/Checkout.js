import React from "react";

function Checkout({ cart }) {
  // State to manage form inputs and payment details
  const [formData, setFormData] = React.useState({});
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for payment
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and complete the order
    setFormData({ name: "", address: "", cardNumber: "" });
    alert("Your order has been placed");
  };

  const calculateTotal = () => {
    const total = cart.reduce(
      (accumulator, item) => accumulator + item.price,
      0
    );
    return total;
  };

  const total_amt = calculateTotal();

  return (
    <div>
      <h2>Checkout</h2>
      {total_amt > 0 && (
        <p>Your Total is ${calculateTotal()} proceed to checkout!</p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleInputChange}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Checkout;
