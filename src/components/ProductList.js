import React, { useState } from "react";
import "./ProductList.css";

function ProductList({ cart, setCart }) {
  // Product data (you can fetch this from an API)
  const productsData = [
    {
      id: 1,
      name: "Sweater",
      price: 10,
      image:
        "https://5.imimg.com/data5/QP/RJ/MY-4283662/fancy-baby-sweater-500x500.jpg",
    },
    {
      id: 2,
      name: "Denim",
      price: 20,
      image:
        "https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/12288700/2021/10/21/1add2cf0-4826-441f-ae20-0cca69b899fd1634814726781-Roadster-Men-Blue-Washed-Denim-Jacket-6691634814726272-1.jpg",
    },
    {
      id: 3,
      name: "Blazer",
      price: 25,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230306/emQH/64061a4af997dde6f4e2a00c/-473Wx593H-460746094-navy-MODEL2.jpg",
    },
    // Add more products
  ];

  // State to manage products and filter
  const [products, setProducts] = useState(productsData);
  const [filterPrice, setFilterPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter products based on price
  const filterProducts = () => {
    const filteredProducts = productsData.filter(
      (product) => product.price <= filterPrice
    );
    setProducts(filteredProducts);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setProducts(filteredProducts);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-filter">
        <input
          type="number"
          placeholder="Filter by Price"
          onChange={(e) => setFilterPrice(parseInt(e.target.value))}
        />
        <button onClick={filterProducts}>Apply Filter</button>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
