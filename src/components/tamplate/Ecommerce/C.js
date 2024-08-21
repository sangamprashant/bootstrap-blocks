import React, { useContext } from "react";
import { Minus, Plus, Trash } from "../../Icons";
import { AppContext } from "../../../context/AppContext";
import SecondaryButton from "../../Reuse/SecondaryButton";
import PrimaryButton from "../../Reuse/PrimaryButton";

const products = [
  {
    name: "Basic T-shirt",
    price: 499.0,
    quantity: 2,
    size: "M",
    color: "Grey",
    imageSrc: `logo.png`,
  },
  {
    name: "Basic T-shirt",
    price: 499.0,
    quantity: 2,
    size: "M",
    color: "Grey",
    imageSrc: `logo.png`,
  },
];

function EcommerceDayC() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className={`col-10 ${isDarkMode ? "text-white" : ""}`}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Shopping Cart</h3>
            </div>
            {products.map((product, index) => (
              <div
                className={`card rounded-3 mb-4 ${
                  isDarkMode ? "text-white bg-dark" : ""
                }`}
                key={index}
              >
                <div className="card-body p-4">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={product.imageSrc}
                        className="img-fluid rounded-3"
                        alt={product.name}
                      />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <p className="lead fw-normal mb-2">{product.name}</p>
                      <p>
                        <span className="text-muted">Size: </span>
                        {product.size}{" "}
                        <span className="text-muted">Color: </span>
                        {product.color}
                      </p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2" onClick={() => {}}>
                        <i>
                          <Minus
                            height="50"
                            width="20"
                            stroke={isDarkMode ? "red" : "blue"}
                          />
                        </i>
                      </button>
                      <input
                        id={`form${index}`}
                        min="0"
                        name="quantity"
                        value={product.quantity}
                        type="number"
                        className="form-control form-control-sm"
                      />
                      <button className="btn btn-link px-2" onClick={() => {}}>
                        <i>
                          <Plus
                            height="50"
                            width="20"
                            stroke={isDarkMode ? "red" : "blue"}
                          />
                        </i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">₹{product.price.toFixed(2)}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger">
                        <i>
                          <Trash height="50" width="20" stroke="red" />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              className={`${isDarkMode ? "text-white bg-dark" : ""} card mb-4`}
            >
              <label className="form-label px-4" htmlFor="form1">
                Discount code
              </label>
              <div className="card-body px-4 d-flex flex-row gap-2">
                <div className="form-outline flex-fill">
                  <input
                    type="text"
                    id="form1"
                    className={`form-control form-control-lg ${
                      isDarkMode ? "text-white bg-dark" : ""
                    } `}
                  />
                </div>
                <SecondaryButton label="Apply" />
              </div>
            </div>
            <div className={`${isDarkMode ? "text-white" : ""} text-end`}>
              <div className="card-body">
                <PrimaryButton label="Proceed to Pay ₹" c="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcommerceDayC;
