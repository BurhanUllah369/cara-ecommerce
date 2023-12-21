import React from "react";

function CollectionsLi({ imageUrl, h3, p }) {
  return (
    <li>
      <img src={imageUrl} alt="" />
      <section className="collections-content">
        <h3>{h3}</h3>
        <p>{p}</p>
      </section>
    </li>
  );
}

export default CollectionsLi;
