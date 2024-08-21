import React, { useContext } from "react";
import PrimaryButton from "../../Reuse/PrimaryButton";
import SecondaryButton from "../../Reuse/SecondaryButton";
import { AppContext } from "../../../context/AppContext";
import { AppName } from "../../../strings";

function HeroDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div
      className={`px-4 py-5 my-5 text-center ${isDarkMode ? "text-white" : ""}`}
    >
      <img
        className="d-block mx-auto mb-4"
        src="logo.png"
        alt="Logo"
        width="200"
        height="200"
      />
      <h1 className="display-5 fw-bold">Welcome to {AppName}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Discover a wide range of pre-made Bootstrap components and code
          snippets at {AppName}. Streamline your web development with our
          collection of ready-to-use, responsive design elements.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <PrimaryButton label="Primary Button" />
          <SecondaryButton label="Secondary Button" />
        </div>
      </div>
    </div>
  );
}

export default HeroDayA;
