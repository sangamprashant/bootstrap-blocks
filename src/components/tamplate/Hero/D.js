import React, { useContext } from "react";
import { AppName } from "../../../strings";
import PrimaryButton from "../../Reuse/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function HeroDayD() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={`hero-content ${isDarkMode ? "text-white" : ""}`}>
              <h1 className="display-4">Welcome to {AppName}</h1>
              <p className="lead">
                Discover a wide range of pre-made Bootstrap components and code
                snippets at {AppName}. Streamline your web development with our
                collection of ready-to-use, responsive design elements.
              </p>
              <PrimaryButton label="Primary Button" />
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="logo.png"
              height="400"
              width="400"
              alt="Hero Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDayD;
