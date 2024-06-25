import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Components/Product/Product';
import { CustomNavbar } from './Components/Navbar/CustomNavbar';
import { Footer } from './Components/Footer/Footer';
import { Contact } from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Service } from './Components/Service/Service';
import Cart from './Components/Cart/Cart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If item already exists in cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If item does not exist in cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    // Filter out items with quantity <= 0
    const filteredCart = updatedCart.filter(
      (item) => item.quantity > 0
    );

    setCart(filteredCart);
  };

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/product"
          element={<Product addToCart={addToCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />}
        />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
