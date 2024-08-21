import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import SecondaryButton from "../../Reuse/SecondaryButton";
import PrimaryButton from "../../Reuse/PrimaryButton";

function LogDayC() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="container d-flex justify-content-center">
      <div
        className={`col-md-8 p-5 card shadow ${
          isDarkMode ? "bg-dark text-light" : ""
        }`}
      >
        <div class="d-flex justify-content-center my-1">
          <h4 className="p-2">SignIn</h4>
        </div>
        <SecondaryButton label="Signin using open ID" />
        <div class="form">
          <label>Email Address</label>
          <input
            type="text"
            class="form-control p-3"
            placeholder="Email address"
          />
        </div>
        <div class="form">
          <label class="d-flex justify-content-between align-items-center">
            <span>Password</span>
            <a href="#" class="text-decoration-none">
              Forgot Password?
            </a>
          </label>
          <input type="text" class="form-control p-3" placeholder="Password" />
        </div>

        <div class="login-button my-3">
          <PrimaryButton label="Signin using open ID" c="w-100" />
        </div>
      </div>
    </div>
  );
}

export default LogDayC;
