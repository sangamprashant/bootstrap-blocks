import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import PrimaryButton from "../../Reuse/PrimaryButton";

function PricingDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className="page-content page-container" id="page-content">
      <div className={`text-${isDarkMode ? "light" : "dark"}`}>
        <div className="text-center p-5">
          <h2>Price for your awesome product.</h2>
        </div>
        <div className="text-center">
          <div className="row">
            <div
              className={`col-md-6 col-sm-12 p-4 p-sm-5 card shadow bg-${
                isDarkMode ? "dark text-light" : "light"
              }`}
            >
              <h1 className="display-4">
                <sup>₹</sup>12
              </h1>
              <div className={`text-${isDarkMode ? "light" : "muted"}`}>
                Regular license
              </div>
              <div className="py-4">
                <PrimaryButton label="Purchase" />
              </div>
              <small className={`text-${isDarkMode ? "light" : "muted"}`}>
                End-product <strong>not</strong> for sale
              </small>
            </div>
            <div
              className={`col-md-6 col-sm-12 p-4 p-sm-5 card shadow bg-${
                isDarkMode ? "dark text-light" : "light"
              }`}
            >
              <h1 className="display-4">
                <sup>₹</sup>60
              </h1>
              <div className={`text-${isDarkMode ? "light" : "muted"}`}>
                Regular license
              </div>
              <div className="py-4">
                <PrimaryButton label="Purchase" />
              </div>
              <small className={`text-${isDarkMode ? "light" : "muted"}`}>
                Unlimited end-product for sale
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingDayA;
