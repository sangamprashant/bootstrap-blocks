import React, { useContext } from "react";
import PrimaryButton from "../../Reuse/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function ProductDayE() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="d-flex justify-content-center align-items-center container px-2">
      <div
        class={`card col-md-5 p-4 shadow rounded-3 ${
          isDarkMode ? "bg-dark text-white" : ""
        }`}
      >
        <div class="top d-flex flex-row align-items-center">
          <img
            src="user.jpg"
            width="40"
            height="40"
            class="rounded-circle mr-2"
          />
          <h6 class="mb-0 mr-2">Organics by Prashant</h6>
        </div>

        <div class="d-flex justify-content-center flex-column">
          <img src="https://picsum.photos/300" width="100%" class="mt-3" />
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
          <span>Each - approx 1.2KG</span>
        </div>

        <div class="bottom d-flex flex-row justify-content-center gap-1">
          <div class="input-group">
            <span class="input-group-text">+</span>
            <input type="text" class="form-control " value="1" />
            <span class="input-group-text">-</span>
          </div>
          <PrimaryButton label="Buy " />
        </div>
      </div>
    </div>
  );
}

export default ProductDayE;
