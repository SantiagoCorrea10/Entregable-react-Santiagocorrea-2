import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "./db/db";
import { collection, getDocs } from "firebase/firestore";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Cart/Checkout.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsArray);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <NavBar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer products={products} addToCart={addToCart} />}
        />
        <Route
          path="/category/mates"
          element={
            <ItemListContainer
              products={products.filter((product) => product.name.includes("Mate"))}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/category/termos"
          element={
            <ItemListContainer
              products={products.filter((product) => product.name.includes("Termo"))}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/category/porta-termos"
          element={
            <ItemListContainer
              products={products.filter((product) => product.name.includes("Porta Termo"))}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ItemDetailContainer products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} clearCart={clearCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;