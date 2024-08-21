import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { AppName } from "../../../strings";

function FooterDayC() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <footer
      className={`${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      } py-5`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={`logo.png`}
              alt="Your Logo"
              height="100"
              width="100"
              className="img-fluid mb-3"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-decoration-none" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="/services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-decoration-none" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} {AppName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterDayC;
