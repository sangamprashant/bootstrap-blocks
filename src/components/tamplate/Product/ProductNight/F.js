import React from 'react';

const productData = [
  {
    id: 1,
    name: "Long sleev shirt",
    price: "$3.99",
    rating: 4.5,
    image: `${window.location.origin}/shirt.jpg`,
    sizes: ["Small", "Medium", "Large"],
    discount: "-25%",
  },
  {
    id: 2,
    name: "Black top caps",
    price: "$1.99",
    rating: 4.5,
    image: `${window.location.origin}/cap.jpg`,
    sizes: ["Small", "Medium", "Large"],
    discount: "-15%",
  },
  {
    id: 3,
    name: "Kiton sui suit",
    price: "$3.99",
    rating: 4.5,
    image: `${window.location.origin}/suit.jpg`,
    sizes: ["Small", "Medium", "Large"],
    discount: "-35%",
  },
  {
    id: 4,
    name: "Long red shirt",
    price: "$4.99",
    rating: 4.5,
    image: `${window.location.origin}/redShirt.jpg`,
    sizes: ["Small", "Medium", "Large"],
    discount: "-25%",
  },
  {
    id: 5,
    name: "Long black t-shirt",
    price: "$3.99",
    rating: 4.5,
    image: `${window.location.origin}/tshirt.jpg`,
    sizes: ["Small", "Medium", "Large"],
    discount: "-25%",
  },
  {
    id: 6,
    name: "TINONG white specs",
    price: "$3.99",
    rating: 4.5,
    image: `${window.location.origin}/spex.jpg`,
    sizes: ["Small", "Medium", "Large"],
    discount: "-25%",
  },
];

function ProductCard({ product }) {
  return (
    <div className="col-md-4">
      <div className="bg-dark rounded text-white p-3">
        <div className="img-container">
          <div className="d-flex justify-content-between align-items-center p-2 first">
            
            <span className="wishlist">
              <i className="fa fa-heart"></i>
            </span>
          </div>
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>
        <div className="product-detail-container">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">{product.name}</h6>
            <span className="text-danger font-weight-bold">{product.price}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="ratings">
              <i className="fa fa-star"></i>
              <span>{product.rating}</span>
            </div>
            <div className="size">
              {product.sizes.map((size, index) => (
                <label className="radio" key={index}>
                  <input
                    type="radio"
                    name={`size${product.id}`}
                    value={size}
                    defaultChecked={index === 1}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <button className="btn btn-danger btn-block">Buy Now</button>
            <span className=" btn btn-success">{product.discount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDayF() {
  return (
    <div className="container-fluid mt-3 mb-3">
      <div className="row g-2">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductDayF;
