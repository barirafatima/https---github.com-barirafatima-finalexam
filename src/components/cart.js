import React from "react";
import { useCart } from './cartcontext(globalstate)'; 
import "../styles/cart.css";
const Cart = () => {
  const { cartItems, updateCart } = useCart(); 
  const handleRemoveFromCart = (id) => {
  updateCart(cartItems.filter((item) => item.id !== id)); 
  };
  const handleIncrementQuantity = (id) => {
    updateCart(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrementQuantity = (id) => {
    updateCart(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const totalCartPrice = cartItems?.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0; 
    return total + itemPrice * item.quantity;
  }, 0) || 0; 
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${parseFloat(item.price).toFixed(2)}</p> 
                <p>Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}</p> 
                <div className="quantity-control">
                  <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                </div>
                <button
                  className="remove-from-cart-button"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total Cart Price: ${totalCartPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
