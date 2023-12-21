import React from "react";
import { images } from "../data";
import CollectionsLi from "./CollectionsLi";
import "./collections.css"

function Collections() {
  return (
    <ul className="collections">
      <CollectionsLi
        imageUrl={images.banner[3].url}
        h3="SEASONAL SALE"
        p="Winter Collection - 50% OFF"
      />
      <CollectionsLi
        imageUrl={images.banner[2].url}
        h3="NEW FOOTWEAR COLLECTION"
        p="Spring / Summer 2023"
      />
      <CollectionsLi
        imageUrl={images.banner[8].url}
        h3="T-SHIRTS"
        p="New Trendy T-Shirts"
      />
    </ul>
  );
}

export default Collections;
