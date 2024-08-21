import React, { useContext } from "react";
import { AppName } from "../../../strings";
import PrimaryButton from "../../Reuse/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function HeroDayC() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <section
      className={`hero  text-${isDarkMode ? "white" : "dark"} text-center`}
    >
      <div className="container">
        <h1 className="display-4">Welcome to {AppName}</h1>
        <p className="lead">
          Discover a wide range of pre-made Bootstrap components and code
          snippets at {AppName}. Streamline your web development with our
          collection of ready-to-use, responsive design elements.
        </p>
        <PrimaryButton label="Primary Button" />
      </div>
    </section>
  );
}

export default HeroDayC;
