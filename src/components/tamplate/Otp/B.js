import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

function OtpDayB() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="d-flex justify-content-center align-items-center container col-md-6 col-sm-6 col-lg-6">
      <div class={`card py-5 px-3 ${isDarkMode ? "bg-dark text-light" : ""}`}>
        <h5 class="m-0">Mobile phone verification</h5>
        <span class="mobile-text">
          Enter the code we just send on your mobile phone{" "}
          <b class="text-danger">+91 1234567890</b>
        </span>
        <div class="d-flex flex-row mt-5 gap-2">
          <input
            type="text"
            class={`form-control ${isDarkMode ? "bg-dark text-light" : ""}`}
            autofocus=""
          />
          <input
            type="text"
            class={`form-control ${isDarkMode ? "bg-dark text-light" : ""}`}
          />
          <input
            type="text"
            class={`form-control ${isDarkMode ? "bg-dark text-light" : ""}`}
          />
          <input
            type="text"
            class={`form-control ${isDarkMode ? "bg-dark text-light" : ""}`}
          />
        </div>
        <div class="text-center mt-5">
          <span class="d-block mobile-text">Don't receive the code?</span>
          <span class="font-weight-bold text-danger cursor">Resend</span>
        </div>
      </div>
    </div>
  );
}

export default OtpDayB;
