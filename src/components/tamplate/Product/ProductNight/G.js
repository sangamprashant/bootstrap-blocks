import React from "react";

function ProductNightG() {
  return (
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="bg-dark text-white">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4">
                    {" "}
                    <img
                      id="main-image"
                      src={`${window.location.origin}/ft1.jpg`}
                      width="250"
                    />{" "}
                  </div>
                  <div class="thumbnail text-center">
                    {" "}
                    <img
                      onclick="change_image(this)"
                      src={`${window.location.origin}/ft2.jpg`}
                      width="70"
                    />{" "}
                    <img
                      onclick="change_image(this)"
                      src={`${window.location.origin}/ft3.jpg`}
                      width="70"
                    />{" "}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      {" "}
                      <i class="fa fa-long-arrow-left"></i>{" "}
                      <span class="ml-1">Back</span>{" "}
                    </div>{" "}
                    <i class="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div class="mt-4 mb-3">
                    {" "}
                    <span class="text-uppercase text-muted brand">Orianz</span>
                    <h5 class="text-uppercase">Men's slim fit t-shirt</h5>
                    <div class="price d-flex flex-row align-items-center">
                      {" "}
                      <span class="act-price">$20</span>
                      <div class="ml-2">
                        {" "}
                        <small class="dis-price">$59</small>{" "}
                        <span>40% OFF</span>{" "}
                      </div>
                    </div>
                  </div>
                  <p class="about">
                    Shop from a wide range of t-shirt from orianz. Pefect for
                    your everyday use, you could pair it with a stylish pair of
                    jeans or trousers complete the look.
                  </p>
                  <div class="sizes mt-5">
                    <h6 class="text-uppercase">Size</h6>{" "}
                    <label class="radio">
                      {" "}
                      <input type="radio" name="size" value="S" checked />{" "}
                      <span>S</span>{" "}
                    </label>{" "}
                    <label class="radio">
                      {" "}
                      <input type="radio" name="size" value="M" />{" "}
                      <span>M</span>{" "}
                    </label>{" "}
                    <label class="radio">
                      {" "}
                      <input type="radio" name="size" value="L" />{" "}
                      <span>L</span>{" "}
                    </label>{" "}
                    <label class="radio">
                      {" "}
                      <input type="radio" name="size" value="XL" />{" "}
                      <span>XL</span>{" "}
                    </label>{" "}
                    <label class="radio">
                      {" "}
                      <input type="radio" name="size" value="XXL" />{" "}
                      <span>XXL</span>{" "}
                    </label>
                  </div>
                  <div class="cart mt-4 align-items-center">
                    {" "}
                    <button class="btn btn-danger text-uppercase mr-2 px-4">
                      Add to cart
                    </button>{" "}
                    <i class="fa fa-heart text-muted"></i>{" "}
                    <i class="fa fa-share-alt text-muted"></i>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNightG;
