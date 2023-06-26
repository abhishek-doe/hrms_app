import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";
import gtmlogo1 from "../images/gtmlogo1.png";

const Footer = () => {
  return (
    <main className="footer">
      <div className="container">
        <section style={{ paddingTop: "-1rem" }}>
          <Link to="/">
            <img src={gtmlogo1} alt="G.T.M." style={{ height: "80px", borderRadius: "50%" }} />
          </Link>

          <p className="description"> Our H.R.M.S. service is best platform for centerialized HR functions that integrates all functions.</p>
        </section>

        <section className="section">
          <span>Company</span>

          <li>About us</li>
          <li>Features</li>
          <li>News</li>
          <li>FAQ</li>
        </section>

        <section className="section">
          <span>Resources</span>

          <li>Account</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contact</li>
        </section>

        <section className="section">
          <span>Support</span>

          <li>Events</li>
          <li>Promo</li>
          <li>Req Demo</li>
          <li>Careers</li>
        </section>

        <section className="section">
          <span>Contact Info</span>
          <small className="email" style={{ color: "white", marginBottom: "7px" }}>
            jobsearch@gmail.com
          </small>
          <div className="icon-div">
            <AiFillInstagram className="icon" />
            <BsFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Footer;
