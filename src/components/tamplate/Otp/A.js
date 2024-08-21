import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

function OtpDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="container height-100 d-flex justify-content-center align-items-center">
      {" "}
      <div class="position-relative col-md-6">
        {" "}
        <div
          class={`card p-4 text-center ${
            isDarkMode ? "bg-dark text-light" : ""
          } `}
        >
          {" "}
          <h6 className="text-danger">
            Please enter the one time password <br /> to verify your account
          </h6>{" "}
          <div>
            {" "}
            <span>A code has been sent to</span> <small>*******9876</small>{" "}
          </div>{" "}
          <div
            id="otp"
            class="inputs d-flex flex-row justify-content-center mt-2"
          >
            {" "}
            <input
              class={`m-2 text-center form-control rounded ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="text"
              id="first"
              maxlength="1"
            />{" "}
            <input
              class={`m-2 text-center form-control rounded ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="text"
              id="second"
              maxlength="1"
            />{" "}
            <input
              class={`m-2 text-center form-control rounded ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="text"
              id="third"
              maxlength="1"
            />{" "}
            <input
              class={`m-2 text-center form-control rounded ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="text"
              id="fourth"
              maxlength="1"
            />{" "}
            <input
              class={`m-2 text-center form-control rounded ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="text"
              id="fifth"
              maxlength="1"
            />{" "}
            <input
              class={`m-2 text-center form-control rounded ${
                isDarkMode ? "bg-dark text-light" : ""
              }`}
              type="text"
              id="sixth"
              maxlength="1"
            />{" "}
          </div>{" "}
          <div class="mt-4">
            {" "}
            <button class="btn btn-danger px-4">Validate</button>{" "}
          </div>{" "}
        </div>{" "}
        <div class={`${isDarkMode ? "text-light" : ""}`}>
          {" "}
          <div class="content d-flex justify-content-center align-items-center">
            {" "}
            <span>Didn't get the code</span>{" "}
            <a href="#" class="text-decoration-none ms-3">
              Resend(1/3)
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default OtpDayA;
