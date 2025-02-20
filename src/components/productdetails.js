import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/productdetails.css";
const products = [
  { id: "1", name: "Minimal Desk lamp", price:89.00,image: "" },
  { id: "2", name: "Cerammic Coffee Mug", price: 12.00, image: "" },
  { id: "3", name: "Leather notebook", price: 14.00, image: "" },
  { id: "4", name:"Bamboo Plant Stand", price: 16.00, image: "" },
  { id: "5", name: "Abstract Wall art", price: 18.00, image: "" },
  { id: "6", name: "Geomeric bookends", price: 50.00, image: "" }
];
const ProductDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  return (
    <div className="product-detail-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
        />
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/cart/${product.id}`}>
            Add to cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductDetails;

