import React from "react";

function DealsAndUpcomingsLi({ imageUrl, h4, h3, p, button }) {
  return (
    <li>
      <img src={imageUrl} alt="" />
      <section className="content">
        <h4>{h4}</h4>
        <h3>{h3}</h3>
        <p>{p}</p>
        <button>{button}</button>
      </section>
    </li>
  );
}

export default DealsAndUpcomingsLi;
