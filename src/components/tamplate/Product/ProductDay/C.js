import React from "react";
import { Google, Star } from "../../../Icons";

function ProductDayC() {
  const products = [
    {
      image:
        "https://www.freepnglogos.com/uploads/plant-png/plant-png-pleasures-helping-others-beautiful-transparent-plants-0.png",
      title: "The Little Botanical Haworthia",
      rating: 5,
      reviews: 3,
      price: 10.99,
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/plant-png/plants-transparent-png-pictures-icons-and-png-14.png",
      title: "The Little Botanical Haworthia",
      rating: 5,
      reviews: 3,
      price: 10.99,
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/plant-png/plant-png-plants-png-transparent-images-png-only-27.png",
      title: "The Little Botanical Haworthia",
      rating: 5,
      reviews: 3,
      price: 10.99,
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/plant-png/plant-png-pleasures-helping-others-beautiful-transparent-plants-0.png",
      title: "The Little Botanical Haworthia",
      rating: 5,
      reviews: 3,
      price: 10.99,
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/plant-png/plants-transparent-png-pictures-icons-and-png-14.png",
      title: "The Little Botanical Haworthia",
      rating: 5,
      reviews: 3,
      price: 10.99,
    },
    {
      image:
        "https://www.freepnglogos.com/uploads/plant-png/plant-png-plants-png-transparent-images-png-only-27.png",
      title: "The Little Botanical Haworthia",
      rating: 5,
      reviews: 3,
      price: 10.99,
    },
  ];

  return (
    <div className="wrapper rounded bg-white">
      <div className="d-flex align-items-center justify-content-end px-sm-3 pt-3 px-1">
        <div className="text-muted">
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
            <div className="card">
              <div className="d-flex justify-content-center">
                <img
                  src={product.image}
                  className="img-fluid"
                  alt={product.title}
                />
              </div>
              <b className="px-2">
                <p className="h4">{product.title}</p>
              </b>
              <div className="d-flex align-items-center justify-content-start rating border-top border-bottom py-2">
                <div className="text-muted text-uppercase px-2 border-right">
                  insto2007
                </div>
                <div className="px-lg-2 px-1 d-flex">
                  {[...Array(product.rating)].map((_, i) => (
                    <div className="" key={i}  >
                    <Star height="20" width="20" stroke="yellow" fill="#fdf700"/>
                    </div>
                  ))}
                  <a href="#" className="px-lg-2 px-1 reviews">
                    {product.reviews} Reviews
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between py-2 px-3">
                <div className="h4">
                  <span>&#xa3;</span>
                  {product.price}
                </div>
                <div>
                  <button className="btn btn-dark text-uppercase">
                    Buy Now
                  </button>
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
