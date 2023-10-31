import React from "react";
import { FaceBook, Instagram, LinkedIn, Twitter } from "../../../Icons";

function FooterNightD() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <img
              src={`${window.location.origin}/navblue.png`}
              alt="Your Logo"
              height="200"
              width="200"
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              ullamcorper dolor nec neque posuere tristique.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>Contact Us</h5>
            <address>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; {new Date().getFullYear()} Your Website Name. All rights
              reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline social-icons">
              <li className="list-inline-item">
                <a href="#">
                  <FaceBook
                    width="30"
                    height="30"
                    style={{ fill: "#16bcef" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <Instagram
                    width="30"
                    height="30"
                    style={{ fill: "#16bcef" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <LinkedIn
                    width="30"
                    height="30"
                    style={{ fill: "#16bcef" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <Twitter width="30" height="30" style={{ fill: "#16bcef" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNightD;
