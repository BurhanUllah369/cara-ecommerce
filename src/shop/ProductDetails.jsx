import React, { useState } from "react";
import { images } from "../data";
import Featured from "../home/Featured";
import "./product-details.css";

function ProductDetails() {
  const [source, setSource] = useState(images.products[0].url);

  const handleClick = (e) => {
    setSource(e.target.src);
  }

  return (
    <>
      <section className="product-component">
        <section className="product-images">
          <img
            className="product-main-image"
            src={source}
            alt=""
          />
          <section className="product-varieties" onClick={handleClick}>
            <img src={images.products[1].url} alt="" />
            <img src={images.products[2].url} alt="" />
            <img src={images.products[3].url} alt="" />
            <img src={images.products[4].url} alt="" />
          </section>
        </section>
        <section className="product-details">
          <p>Home / T-Shirt</p>
          <h3>Men's Fashion T-Shirt</h3>
          <h2>$138.00</h2>
          <select name="" id="">
            <option value="">Select Size</option>
            <option value="">XL</option>
            <option value="">XXL</option>
            <option value="">Small</option>
            <option value="">Medium</option>
            <option value="">Large</option>
          </select>
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <input type="number" defaultValue="1" />
            <button>Add To Cart</button>
          </form>
          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            architecto, perspiciatis soluta aliquam id dolor aperiam, culpa a
            sint asperiores corporis dicta quod nisi doloribus necessitatibus
            quam iusto minima molestias! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Possimus vero praesentium iure velit, ullam ipsa
            cum recusandae. Suscipit nihil exercitationem, velit, unde, atque
            corporis delectus dolor explicabo similique nulla odit.
          </p>
        </section>
      </section>
      <Featured />
    </>
  );
}

export default ProductDetails;
