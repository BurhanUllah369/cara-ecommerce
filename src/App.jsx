import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import Blogs from "./blog/Blogs";
import Cart from "./cart/Cart";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Nav from "./nav/Nav";
import Newsletter from "./newsletter/Newsletter";
import ProductDetails from "./shop/ProductDetails";
import Shop from "./shop/Shop";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
