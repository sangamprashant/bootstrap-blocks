import React from "react";

function ProductNightE() {
  return (
    <div class="d-flex justify-content-center align-items-center container px-2">
      <div class="bg-dark text-white p-4">
        <div class="top d-flex flex-row align-items-center">
          <img
            src={`${window.location.origin}/user1.jpg`}
            width="40"
            height="40"
            class="rounded-circle mr-2"
          />
          <h6 class="mb-0 mr-2">Organics by Prashant</h6>
          <i class="fa fa-opencart"></i>
        </div>

        <div class="d-flex justify-content-center flex-column">
          <img src={`${window.location.origin}/pine.png`} width="100%" class="mt-3" />
          <h5>Pine Apple Green Packham</h5>
          <span>Each - approx 1.2KG</span>
        </div>

        <div class="bottom d-flex flex-row justify-content-center">
          <div class="input-group mb-3">
            <span class="input-group-text">+</span>
            <input type="text" class="form-control " value="1" />
            <span class="input-group-text">-</span>
          </div>

          <button class="btn btn-success btn-sm add">
            Add For <b>$1.75</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductNightE;
