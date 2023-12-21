import React from "react";
import { images } from "../data";
import FeaturedLi from "./FeaturedLi";
import "./featured.css"

function Featured() {
  return (
    <section className="featured">
      <h1>Featured Products</h1>
      <p className="description">Summer Collection New Modern Design</p>
      <ul className="featured-products">
        {images.products.map((product, count) =>
          count < 8 ? <FeaturedLi key={count} imageUrl={product.url} price={product.price}/> : null
        )}
      </ul>
    </section>
  );
}

export default Featured;
