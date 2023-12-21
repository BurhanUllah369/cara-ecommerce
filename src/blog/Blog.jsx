import React from "react";

function Blog({ image, number, heading, description }) {
  return (
    <section className="blog">
      <section className="image">
        <h1>{number}</h1>
        <img src={image} alt="" />
      </section>
      <section className="blog-text-content">
        <h3>{heading}</h3>
        <p>{description}</p>
        <a href="#null">Continue Reading</a>
      </section>
    </section>
  );
}

export default Blog;
