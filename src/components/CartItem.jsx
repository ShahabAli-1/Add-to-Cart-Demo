import React from "react";
import "./CartItem.css";
import { PLACE_HOLDER_IMAGE } from "../constants/constants";
import { BiTrash } from "react-icons/bi";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img
        src={item.image || PLACE_HOLDER_IMAGE}
        missing
        alt={item.title}
        className="cart-item-image"
      />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">
          {item.currency} {item.price}
        </p>
        <div className="cart-item-actions">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item.id, parseInt(e.target.value, 10))
            }
            className="cart-item-quantity"
          />
          <button
            className="cart-item-remove"
            onClick={() => removeFromCart(item.id)}
          >
            <BiTrash style={{ fontSize: 16 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
