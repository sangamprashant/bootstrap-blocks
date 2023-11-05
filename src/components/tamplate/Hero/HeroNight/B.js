import React from "react";

function HeroNightB() {
  return (
    <div class="px-4 pt-5 my-5 text-center border-bottom bg-dark text-white">
      <h1 class="display-4 fw-bold">Welcome to BOOTSTRAPFINDS</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Discover a wide range of pre-made Bootstrap components and code
          snippets at BOOTSTRAPFINDS. Streamline your web development with our
          collection of ready-to-use, responsive design elements.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">
            Primary button
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Secondary
          </button>
        </div>
      </div>
      <div class="overflow-hidden" style={{ maxHeight: "30vh" }}>
        <div class="container px-5">
          <img
            src={`${window.location.origin}/web1.png`}
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

export default HeroNightB;
