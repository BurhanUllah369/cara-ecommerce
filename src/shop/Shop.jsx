import React from "react";
import { images } from "../data";
import ReusableHeader from "../header/ReusableHeader";
import FeaturedLi from "../home/FeaturedLi";
import Pagination from "../pagination/Pagination";

function Shop() {
  return (
    <section className="shop">
      <ReusableHeader heading="#stayhome" description="Save more with coupons & with upto 70% off!" image={images.banner[0].url} />
      <section className="featured">
        <ul className="featured-products">
          {images.products.map((product, count) =>
            count < 8 ? <FeaturedLi key={count} imageUrl={product.url} price={product.price} /> : null
          )}
        </ul>
      </section>
      <Pagination/>
    </section>
  );
}

export default Shop;
