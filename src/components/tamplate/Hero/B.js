import React, { useContext } from "react";
import PrimaryButton from "../../Reuse/PrimaryButton";
import SecondaryButton from "../../Reuse/SecondaryButton";
import { AppContext } from "../../../context/AppContext";
import { AppName } from "../../../strings";

function HeroDayB() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class={`px-4 pt-5 my-5 text-center border-bottom ${isDarkMode?"text-white":""}`}>
      <h1 class="display-4 fw-bold">Welcome to {AppName}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Discover a wide range of pre-made Bootstrap components and code
          snippets at {AppName}. Streamline your web development with our
          collection of ready-to-use, responsive design elements.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
        </div>
      </div>
      <div class="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div class="container px-5">
          <img
            src={`web1.png`}
            class="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            loading="lazy"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroDayB;
