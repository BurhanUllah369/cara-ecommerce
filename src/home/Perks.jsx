import React from "react";
import { images } from "../data";
import "./perks.css";
import PerksLi from "./PerksLi";

function Perks() {
  return (
    <section className="perks">
      <ul>
        {images.features.map((feature) => (
          <PerksLi key={feature.url} text={feature.text} url={feature.url} />
        ))}
      </ul>
    </section>
  );
}

export default Perks;
