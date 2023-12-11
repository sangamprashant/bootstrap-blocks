import React from "react";

function ProductDayA() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5">
          <div className="main-img">
            <img
              className="img-fluid"
              src={`${window.location.origin}/dress1.jpeg`}
              alt="ProductS"
            />
            <div className="row my-3 previews">
              <div className="col-md-3">
                <img
                  className="w-100"
                  src={`${window.location.origin}/dress2.jpg`}
                  alt="Sale"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="w-100"
                  src={`${window.location.origin}/dress3.jpeg`}
                  alt="Sale"
                />
              </div>
              <div className="col-md-3">
                <img
                  className="w-100"
                  src={`${window.location.origin}/dress4.jpeg`}
                  alt="Sale"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="main-description px-2">
            <strong className="text-bold-600 text-primary">
              Category: Women
            </strong>
            <h2 className="product-title font-weight-bold my-3">
              <strong>Black dress for Women</strong>
            </h2>

            <div className="price-area my-4">
              <p className="old-price mb-1">
                <del>$100</del>
                <span className="old-price-discount text-danger">
                  (20% off)
                </span>
              </p>
              <h2 className="new-price font-weight-bold mb-1">
                <strong>$80</strong>
              </h2>
              <p className="text-secondary mb-1">
                (Additional tax may apply on checkout)
              </p>
            </div>

            <div className="buttons d-flex my-5 gap-2">
              <div className="block">
                <a href="#" className="shadow btn btn-success">
                  Wishlist
                </a>
              </div>
              <div className="block">
                <button className="shadow btn btn-primary">Add to cart</button>
              </div>

              <div className="block quantity">
                <input
                  type="number"
                  className="form-control"
                  id="cart_quantity"
                  value="1"
                  min="0"
                  max="5"
                  placeholder="Enter email"
                  name="cart_quantity"
                />
              </div>
            </div>
          </div>

          <div className="product-details my-4">
            <p className="text-color mb-1 text-uppercase">
              <strong>Product Details</strong>
            </p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              excepturi odio recusandae aliquid ad impedit autem commodi earum
              voluptatem laboriosam?
            </p>
          </div>
          <div className="product-details my-4">
            <p className="details-title text-color mb-2 text-uppercase">
              <strong>Material & Care</strong>
            </p>
            <ul>
              <li>Cotton</li>
              <li>Machine-wash</li>
            </ul>
          </div>
          <div className="product-details my-4">
            <p className="details-title text-color mb-2 text-uppercase">
              <strong>Sold by</strong>
            </p>
            <ul>
              <li>Cotton</li>
              <li>Machine-wash</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDayA;
