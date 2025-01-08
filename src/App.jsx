import React, { useState, useEffect } from "react";
import { fetchProducts } from "./api";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";
import { useCart } from "./hooks/useCart";
import { BiShoppingBag } from "react-icons/bi";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <header>
        <h1>Shopify Demo</h1>
      </header>
      <main>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      {/* Floating Cart Icon */}
      <div
        className="cart-icon-container"
        onClick={() => setCartOpen(!cartOpen)}
      >
        <span className="cart-badge">{cart.length}</span>
        <BiShoppingBag style={{ fontSize: 28 }} />
      </div>
      {/* Cart Modal */}
      <CartModal
        isOpen={cartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        closeModal={() => setCartOpen(false)}
      />
    </>
  );
};

export default App;
