import React from "react";
import { images } from "../data";
import FeaturedLi from "./FeaturedLi";

function Arrivals() {
  return (
    <section className="featured">
      <h1>New Arrivals</h1>
      <p className="description">Summer Collection New Modern Design</p>
      <ul className="featured-products">
        {images.products.map((product, count) =>
          count < 8 ? null : <FeaturedLi key={count} imageUrl={product.url} price={product.price} />
        )}
      </ul>
    </section>
  );
}

export default Arrivals;
