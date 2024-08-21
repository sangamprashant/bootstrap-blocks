import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { AppName } from "../../../strings";

function FooterDayB() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <footer
      className={`${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      } text-center py-4`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              dolorem ratione aut distinctio aliquam placeat! Esse iste,
              voluptates, soluta excepturi repellendus ad amet ex repellat
              molestiae reiciendis, qui recusandae eaque.
            </p>
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
      <hr />
      <p className="text-center">
        &copy; {new Date().getFullYear} {AppName}. All rights reserved.
      </p>
    </footer>
  );
}

export default FooterDayB;
