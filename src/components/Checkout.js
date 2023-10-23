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
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="lg:mt-12 md:mt-24 px-10 py-5 max-w-5xl border border-2 border-green-500 rounded-md">
        <h2 className="text-4xl mb-[15px]">Checkout</h2>
        {total_amt > 0 && (
          <p className="mb-[15px]">
            Your Total is ${calculateTotal()} proceed to checkout!
          </p>
        )}
        <form onSubmit={handleSubmit} className="grid gap-4">
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
          <button
            type="submit"
            className="py-[5px] px-[12px] bg-[#A2FF86] rounded-lg "
          >
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
