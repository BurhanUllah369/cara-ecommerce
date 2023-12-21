import React from "react";
import { images } from "../data";
import "./newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <section className="newsletter-content">
        <section>
          <h3>Sign Up for Newsletters</h3>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </section>
        <form>
          <input type="text" placeholder="Your email address" />
          <button>Sign Up</button>
        </form>
      </section>
    </section>
  );
}

export default Newsletter;
