import React from "react";
import { Minus, Plus } from "../../../Icons";

function EcommerceDayD() {
  // Sample array of products
  const products = [
    {
      name: "Samsung Galaxy M11 64GB H KU FUYKMJ HGFCJHJ HFGH",
      color: "white",
      price: 799,
      quantity: 1,
     
      imageSrc: `${window.location.origin}/navblue.png`
    },
    {
      name: "Headphones Bose 35 II",
      color: "Red",
      price: 239,
      quantity: 1,
      imageSrc: `${window.location.origin}/logo.png`
    },
    {
      name: "iPad 9.7 6-gen WiFi 32GB",
      color: "rose pink",
      price: 659,
      quantity: 2,
      imageSrc: `${window.location.origin}/sss.png`
    },
  ];

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="card shopping-cart"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body text-black">
                <div className="row">
                  <div className="col-lg-12 px-5 py-4">
                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                      Your products
                    </h3>
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-center mb-5"
                      >
                        <div className="flex-shrink-0">
                          <img
                            src={product.imageSrc}
                            className="img-fluid"
                            style={{ width: "150px" }}
                            alt="Product"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black">
                            <i className="fas fa-times"></i>
                          </a>
                          <h5 className="text-primary">{product.name}</h5>
                          <h6 style={{ color: "#9e9e9e" }}>
                            Color: {product.color}
                          </h6>
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">
                              ₹ {product.price.toFixed(2)}
                            </p>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => {}}
                              >
                                <i>
                                  <Minus height="50" width="20" stroke="blue" />
                                </i>
                              </button>
                              <input
                                id={`form₹ {index}`}
                                min="0"
                                name="quantity"
                                value={product.quantity}
                                type="number"
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-link px-2"
                                onClick={() => {}}
                              >
                                <i>
                                  <Plus height="50" width="20" stroke="blue" />
                                </i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />
                    <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">₹ 95</p>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <h5 className="fw-bold mb-0">Total:</h5>
                      <h5 className="fw-bold mb-0">
                        ₹ {calculateTotal(products).toFixed(2)}
                      </h5>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function calculateTotal(products) {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

export default EcommerceDayD;
