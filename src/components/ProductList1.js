import React, { useState, useEffect } from "react";
import "./ProductList1.css";

function truncateDescription(description, wordCount) {
  const words = description.split(" ");
  if (words.length <= wordCount) {
    return description;
  } else {
    return words.slice(0, wordCount).join(" ") + "...";
  }
}

function ProductList({ cart, setCart }) {
  // State to manage products, filter, search query, and products data
  const [products, setProducts] = useState([]);
  const [filterPrice, setFilterPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to fetch products from an API
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to filter products based on price
  const filterProducts = () => {
    const filteredProducts = products.filter(
      (product) => product.price <= filterPrice
    );
    setProducts(filteredProducts);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    if (products.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setProducts(filteredProducts);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list flex flex-col">
      {/* <h2>Product List kskjhkjshkjhksjhkjhskk</h2> */}
      <div className="product-filter">
        <input
          className="input-filter"
          type="number"
          placeholder="Filter by Price"
          onChange={(e) => setFilterPrice(parseInt(e.target.value))}
        />
        <button onClick={filterProducts}>Apply Filter</button>
        <input
          className="input-search"
          type="text"
          placeholder="Search by Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="flex flex-wrap flex-row justify-center" id="#products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <img
              className="product-image mb-[10px]"
              src={product.image}
              alt={product.title}
            />
            <p className="product-description mb-[10px] text-sm text-slate-700">
              {truncateDescription(product.description, 10)}
            </p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
