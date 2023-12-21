import React from "react";
import Arrivals from "./Arrivals";
import Banner from "./Banner";
import Collections from "./Collections";
import DealsAndUpcomings from "./DealsAndUpcomings";
import Featured from "./Featured";
import Header from "./Header";
import Perks from "./Perks";

function Home() {
  return (
    <section className="home">
      <Header />
      <Perks />
      <Featured />
      <Banner />
      <Arrivals />
      <DealsAndUpcomings />
      <Collections />
    </section>
  );
}

export default Home;
