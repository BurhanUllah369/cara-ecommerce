import React from "react";
import "./header.css";
import { images } from "../data";

function Header() {
  return (
    <section className="header">
      <section className="text-content">
        <h3>Trade-in-offer</h3>
        <h1>Super value deals</h1>
        <h1 className="green-text">On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <section className="btn">
          <img src={images.random[0].url} alt="" />
          <button>Shop Now</button>
        </section>
      </section>
    </section>
  );
}

export default Header;