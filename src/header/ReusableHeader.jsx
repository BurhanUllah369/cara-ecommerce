import React from "react";
import "./reusableHeader.css";

function ReusableHeader({ image, heading, description }) {
  return (
    <section className="reusable-header">
      <img src={image} alt="" />
      <section className="header-content">
        <h1>{heading}</h1>
        <p>{description}</p>
      </section>
    </section>
  );
}

export default ReusableHeader;
