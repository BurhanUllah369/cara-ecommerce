import React from "react";
import {
  FaBook,
  FaClock,
  FaEnvelope,
  FaFile,
  FaMap,
  FaPhone,
} from "react-icons/fa";
import { images } from "../data";
import ReusableHeader from "../header/ReusableHeader";
import SimpleMap from "./Map";
import "./contact.css";
import Testimonial from "./Testimonial";

function Contact() {
  return (
    <section className="contact">
      <ReusableHeader
        heading="#let's_talk"
        description="LEAVE A MESSAGE. We love to hear from you!"
        image={images.about[7].url}
      />
      <section className="contact-content">
        <section className="contact-text">
          <h4>GET IN TOUCH</h4>
          <h3>Visit one of our agency locations or contact us today</h3>
          <h4>Head Office</h4>
          <p>
            <span>
              <FaMap />
            </span>{" "}
            <span>56 Glassfored Street Glasgow GI IUL New York</span>
          </p>
          <p>
            <span>
              <FaEnvelope />
            </span>
            <span> contact@example.com</span>
          </p>
          <p>
            <span>
              <FaPhone />
            </span>{" "}
            <span>contact@example.com</span>
          </p>
          <p>
            <span>
              <FaClock />
            </span>{" "}
            <span>Monday to Satuday 9:00 to 16:00</span>
          </p>
        </section>
        <section className="contact-map">
          <SimpleMap />
        </section>
      </section>
      <section className="contact-form">
        <section className="contact-form-content-wrapper">
          <form action="">
            <h4>LEAVE A MESSAGE</h4>
            <h3>We love to hear from you</h3>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              placeholder="Your Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit</button>
          </form>
          <section className="testimonials">
            <Testimonial image={images.people[0].url} name="John Doe" />
            <Testimonial image={images.people[1].url} name="William Smith" />
            <Testimonial image={images.people[2].url} name="Emma Stone" />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Contact;
