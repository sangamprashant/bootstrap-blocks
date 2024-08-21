import React, { useContext } from "react";
import PrimaryButton from "../../Reuse/PrimaryButton";
import SecondaryButton from "../../Reuse/SecondaryButton";
import { AppContext } from "../../../context/AppContext";

function ProductDayD() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
      <div class={`col-md-6 card p-4 ${isDarkMode?"bg-dark text-white":""}`}>
        <div class="">
          <div className="d-flex justify-content-center">
            <img
              src="https://picsum.photos/300"
              width="100%"
              class="img-fluid  rounded"
            />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3 px-2">
            <h4>Lorem ipsum dolor sit amet consectetur</h4>{" "}
            <span class="heart">
              <i class="fa fa-heart"></i>
            </span>
          </div>
          <div class="mt-2 px-2">
            {" "}
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              rerum dolorum iure reprehenderit sapiente molestias quos
              reiciendis est! Quibusdam, incidunt laudantium! Voluptate ad neque
              eos fuga sit animi inventore et?
            </small>{" "}
          </div>
          <div class="px-2">
            <h3>₹500</h3>
          </div>
          <div class="px-2 mt-3 gap-2 d-flex">
            <PrimaryButton label="Buy Now" />
            <SecondaryButton label="Add to Cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDayD;
