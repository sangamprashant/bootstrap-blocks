import React, { useContext } from "react";
import { Left, MasterCard, VisaBlue } from "../../Icons";
import { AppContext } from "../../../context/AppContext";
import PrimaryButton from "../../Reuse/PrimaryButton";

const products = [
  {
    name: "Product 1",
    description: "Description of product",
    price: 900,
    imageSrc: `logo.png`,
  },
  {
    name: "Product 1",
    description: "Description of product",
    price: 900,
    imageSrc: `logo.png`,
  },
  {
    name: "Product 1",
    description: "Description of product",
    price: 900,
    imageSrc: `logo.png`,
  },
  {
    name: "Product 1",
    description: "Description of product",
    price: 900,
    imageSrc: `logo.png`,
  },
];

function EcommerceDayA() {
  const { isDarkMode } = useContext(AppContext);

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className={`card shadow ${
                isDarkMode ? "bg-dark text-white" : ""
              }`}
            >
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <a
                        href="#!"
                        className={`text-decoration-none d-flex gap-2 align-items-center no-wrap ${
                          isDarkMode ? "text-white" : "text-dark"
                        }`}
                      >
                        <Left height="30" width={30} /> Continue shopping
                      </a>
                    </h5>
                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                      </div>
                    </div>
                    {products.map((product, index) => (
                      <div
                        className={`rounded-3 shadow ${
                          isDarkMode ? "bg-black text-white" : ""
                        } mb-3`}
                        key={index}
                      >
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src={product.imageSrc}
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>{product.name}</h5>
                                <p className="small mb-0">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div style={{ width: "50px" }}>
                                <h5 className="fw-normal mb-0">2</h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 className="mb-0">₹{product.price}</h5>
                              </div>
                              <a href="#!">
                                <i className="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5">
                    <div className="card bg-primary text-white rounded-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Card details</h5>
                          <img
                            src={`user.jpg`}
                            className="img-fluid rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white mx-1">
                          <MasterCard width="100px" height="100px" />
                        </a>
                        <a href="#!" type="submit" className="text-white mx-1">
                          <VisaBlue width="100px" height="100px" />
                        </a>
                        <a href="#!" type="submit" className="text-white mx-1">
                          <i className="fab fa-cc-paypal fa-2x"></i>
                        </a>

                        <form className="mt-4">
                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="Cardholder's Name"
                            />
                            <label className="form-label" for="typeName">
                              Cardholder's Name
                            </label>
                          </div>

                          <div className="form-outline form-white mb-4">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="1234 5678 9012 3457"
                              minlength="19"
                              maxlength="19"
                            />
                            <label className="form-label" for="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="text"
                                  id="typeExp"
                                  className="form-control form-control-lg"
                                  placeholder="MM/YYYY"
                                  size="7"
                                  minlength="7"
                                  maxlength="7"
                                />
                                <label className="form-label" for="typeExp">
                                  Expiration
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline form-white">
                                <input
                                  type="password"
                                  id="typeText"
                                  className="form-control form-control-lg"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  size="1"
                                  minlength="3"
                                  maxlength="3"
                                />
                                <label className="form-label" for="typeText">
                                  Cvv
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">₹4798.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2">₹20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">₹4818.00</p>
                        </div>

                        <PrimaryButton label="₹4818.00  Checkout" c="w-100" />
                      </div>
                    </div>
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
export default EcommerceDayA;
