import React from "react";
import CartItem from "./CartItem";
import { BiX } from "react-icons/bi";

const CartModal = ({
  isOpen,
  cart,
  updateQuantity,
  removeFromCart,
  closeModal,
}) => {
  return (
    <div className={`cart-modal-overlay ${isOpen ? "active" : ""}`}>
      <div className="cart-modal">
        <button className="cart-modal-close" onClick={closeModal}>
          <BiX style={{ fontSize: 30 }} />
        </button>
        <h2 className="cart-modal-title">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-modal-empty">Your cart is empty.</p>
        ) : (
          <div className="cart-modal-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="cart-modal-footer">
            <p className="cart-modal-total">
              Total:{" "}
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}{" "}
              {cart[0]?.currency || ""}
            </p>
            <button className="cart-modal-checkout">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
