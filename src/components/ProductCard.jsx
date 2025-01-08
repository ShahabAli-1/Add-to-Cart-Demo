import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { PLACE_HOLDER_IMAGE } from "../constants/constants";

const ProductCard = ({ product, addToCart }) => {
  const [imgSrc, setImgSrc] = useState(
    product.image && product.image.trim() ? product.image : PLACE_HOLDER_IMAGE
  );

  const handleImageError = () => {
    if (imgSrc !== PLACE_HOLDER_IMAGE) {
      setImgSrc(PLACE_HOLDER_IMAGE);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={imgSrc}
          alt={product.title || "Product Image"}
          className="product-image"
          onError={handleImageError}
        />
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
          aria-label="Add to Cart"
        >
          <FaShoppingCart />
        </button>
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.title || "Unknown Product"}</h3>
        <p className="product-price">
          <span className="currency">{product.currency || "$"}</span>
          <span className="price">{product.price || "0.00"}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
