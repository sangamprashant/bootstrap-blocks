import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import PrimaryButton from "../../Reuse/PrimaryButton";
import { AppName } from "../../../strings";

function LogDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div
        class={`row align-items-center g-lg-5 py-5 ${
          isDarkMode ? "text-light" : ""
        }`}
      >
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Welcome to {AppName}</h1>
          <p class="col-lg-10 fs-4">
            Discover a wide range of pre-made Bootstrap components and code
            snippets at {AppName}. Streamline your web development with our
            collection of ready-to-use, responsive design elements.
          </p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form
            class={`p-4 p-md-5 border shadow rounded-3 bg-${
              isDarkMode ? "dark" : "light"
            }`}
          >
            <div class="form-floating mb-3">
              <input
                type="email"
                class={`form-control bg-${isDarkMode ? "dark" : "light"}`}
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                for="floatingInput"
              >
                Email address
              </label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                id="floatingPassword"
                placeholder="Password"
                class={`form-control bg-${isDarkMode ? "dark" : "light"}`}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <PrimaryButton label="Sign up" c="w-100" />
            <hr class="my-4" />
            <small class={`text-${isDarkMode ? "light" : "muted"}`}>
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogDayA;
