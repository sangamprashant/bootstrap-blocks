import React from "react";

function HeroNightB() {
  return (
    <div class="px-4 pt-5 my-5 text-center border-bottom bg-dark text-white">
      <h1 class="display-4 fw-bold">Centered screenshot</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
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
            src="logob.png"
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