import React from "react";
import FooterAbout from "./FooterAbout";
import FooterAccount from "./FooterAccount";
import FooterContact from "./FooterContact";
import FooterInstallApp from "./FooterInstallApp";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-content">
        <FooterContact />
        <FooterAbout />
        <FooterAccount />
        <FooterInstallApp />
      </section>
      <p className="footer-copyright">© 2023 Burhan Ullah : React Ecommerce Template</p>
    </footer>
  );
}

export default Footer;
