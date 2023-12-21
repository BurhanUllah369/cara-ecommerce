import React from "react";
import DealsAndUpcomingsLi from "./DealsAndUpcomingsLi";
import "./dealsandupcomings.css";
import { images } from "../data";

function DealsAndUpcomings() {
  return (
    <ul className="deals-upcomings">
      <DealsAndUpcomingsLi
        imageUrl={images.banner[7].url}
        h4="crazy deals"
        h3="buy 1 get 1 free"
        button="Learn More"
        p="The best classic dress is on sale at Cara"
      />
      <DealsAndUpcomingsLi
        imageUrl={images.banner[4].url}
        h4="spring/summer"
        h3="upcomming season"
        button="Collections"
        p="The best classic dress is on sale at Cara"
      />
    </ul>
  );
}

export default DealsAndUpcomings;
