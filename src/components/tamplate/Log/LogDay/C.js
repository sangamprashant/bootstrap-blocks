import React from "react";

function LogDayC() {
  return (
    <div class="container d-flex justify-content-center">
      <div class="card col-md-5 p-3">
        <div class="d-flex justify-content-center my-1">
          <h4 className="p-2">Signin</h4>
        </div>
        <button class="btn btn-primary mt-2 social-button">
          Signin using open ID
        </button>
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

        <div class="login-button my-1">
          <button class="btn btn-success w-100 p-2">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default LogDayC;
