import React from "react";
import { images } from "../data";
import ReusableHeader from "../header/ReusableHeader";
import "./about.css";
import Perks from "../home/Perks"

function About() {
  return (
    <section className="about">
      <ReusableHeader
        heading="#knowus"
        description="Lorem ipsum dolor amet, consectetur"
        image={images.about[7].url}
      />
      <section className="about-content">
        <section className="about-image">
          <img src={images.about[6].url} alt="" />
        </section>
        <section className="about-description">
          <h1>Who We Are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ipsam
            quisquam provident similique nulla mollitia, minus laborum alias quo
            unde dolores, iste ex eaque. Minima ex aspernatur quas eum error. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo vitae commodi dolor aperiam voluptate saepe officiis laborum nam facere doloribus! Vero architecto voluptas nostrum, fuga itaque sit deleniti officiis quis?
          </p>
          <p className="dotted-border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolor
          </p>
        </section>
      </section>
      <section className="video">
        <h1>Download Our <span>App</span></h1>
        <video src={images.about[0].video} autoPlay loop></video>
      </section>
      <Perks />
    </section>
  );
}

export default About;
