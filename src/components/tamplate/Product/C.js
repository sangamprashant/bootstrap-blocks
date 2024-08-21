import React, { useContext } from "react";
import { Google, Star } from "../../Icons";
import PrimaryButton from "../../Reuse/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function ProductDayC() {
  const { isDarkMode } = useContext(AppContext);
  const products = [
    {
      image: `https://picsum.photos/300`,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      rating: 1,
      reviews: 3,
      price: 10.99,
    },
    {
      image: `https://picsum.photos/300`,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      rating: 3,
      reviews: 3,
      price: 10.99,
    },
    {
      image: `https://picsum.photos/300`,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      rating: 3,
      reviews: 3,
      price: 10.99,
    },
  ];

  return (
    <div
      className={`wrapper rounded  ${
        isDarkMode ? "text-white bg-dark" : "bg-white"
      }`}
    >
      <div className="d-flex align-items-center justify-content-end px-sm-3 pt-3 px-1">
        <div className={`${isDarkMode ? "text-white" : "text-muted"}`}>
          Items per page (<b>53 items</b>)
        </div>
        <select name="num" id="num" className="px-2 py-1 ml-sm-2 ml-1">
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
        </select>
        <select name="sort" id="sort" className="px-1 py-1 ml-2">
          <option value="" selected hidden>
            Sort by
          </option>
          <option value="rating">Rating</option>
          <option value="popular">Popular</option>
          <option value="featured">Featured</option>
        </select>
      </div>
      <hr />
      <div className="row px-sm-2 px-0 pt-3">
        {products.map((product, index) => (
          <div
            className="col-md-4 offset-md-0 offset-sm-2 offset-1 col-sm-8 col-10 offset-sm-2 offset-1 mb-3"
            key={index}
          >
            <div
              className={`card shadow rounded-3 ${
                isDarkMode ? "text-white bg-dark" : ""
              } `}
            >
              <div className="d-flex justify-content-center">
                <img
                  src={product.image}
                  className="img-fluid object-fit-cover rounded-top-3"
                  alt={product.title}
                  width="100%"
                />
              </div>
              <b className="px-2">
                <p className="h4">{product.title}</p>
              </b>
              <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2">
                <div
                  className={`${
                    isDarkMode ? "text-white bg-dark" : "text-muted"
                  } text-uppercase px-2 border-right`}
                >
                  insto2007
                </div>
                <div className="px-lg-2 px-1 d-flex">
                  {[...Array(product.rating)].map((_, i) => (
                    <div className="" key={i}>
                      <Star
                        height="20"
                        width="20"
                        stroke="yellow"
                        fill="#fdf700"
                      />
                    </div>
                  ))}
                  <a href="#" className="px-lg-2 px-1 reviews">
                    {product.reviews} Reviews
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between py-2 px-3">
                <div className="h4">
                  <span>₹</span>
                  {product.price}
                </div>
                <div>
                  <PrimaryButton label="Buy Now" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDayC;
