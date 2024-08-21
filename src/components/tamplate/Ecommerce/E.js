import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import PrimaryButton from "../../Reuse/PrimaryButton";
import SecondaryButton from "../../Reuse/SecondaryButton";
import { ImageUrl } from "../../../strings";

const products = [
  {
    id: 1,
    name: "Quant olap shirts",
    imageSrc: ImageUrl,
    price: 13.99,
    originalPrice: 20.99,
    rating: 4,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 1,
    name: "Quant olap shirts",
    imageSrc: ImageUrl,
    price: 13.99,
    originalPrice: 20.99,
    rating: 4,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 1,
    name: "Quant olap shirts",
    imageSrc: ImageUrl,
    price: 13.99,
    originalPrice: 20.99,
    rating: 4,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];

function EcommerceDayE() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        {products.map((product) => (
          <div key={product.id} className="col-md-10 my-1">
            <div
              className={`row p-2 bg-${
                isDarkMode ? "dark text-white" : "white text-dark"
              } border${isDarkMode ? "-black" : ""} rounded`}
            >
              <div className="col-md-3 mt-1 ">
                <img
                  className="img-fluid img-responsive rounded product-image"
                  src={product.imageSrc}
                  alt={product.name}
                />
              </div>
              <div className="col-md-6 mt-1">
                <h5>{product.name}</h5>
                <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    {Array.from({ length: product.rating }, (_, index) => (
                      <i key={index} className="fa fa-star"></i>
                    ))}
                  </div>
                  <span>310</span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  {product.description}
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">₹{product.price}</h4>
                  <span className="strike-text">₹{product.originalPrice}</span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4 gap-2">
                  <PrimaryButton label="Details" c="btn-sm" />
                  <SecondaryButton label="Add to wishlist" c="btn-sm" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EcommerceDayE;
