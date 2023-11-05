import React from "react";

function HeroNightA() {
  return (
    <div class="px-4 py-5 my-5 text-center bg-dark text-white">
      <img
        class="d-block mx-auto mb-4"
        src={`${window.location.origin}/navBlue.png`}
        alt=""
        width="200"
        height="200"
      />
      <h1 class="display-5 fw-bold">Welcome to BOOTSTRAPFINDS</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Discover a wide range of pre-made Bootstrap components and code
          snippets at BOOTSTRAPFINDS. Streamline your web development with our
          collection of ready-to-use, responsive design elements.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Primary button
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroNightA;
