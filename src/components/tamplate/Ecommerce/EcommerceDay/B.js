import React from 'react'
import { Minus, Plus, Times } from '../../../Icons';

function EcommerceDayB() {
    const products = [
        {
          name: "Cotton T-shirt",
          price: 44.0,
          quantity: 1,
          imageSrc:
          `${window.location.origin}/logo.png`
        },
        {
          name: "Cotton T-shirt",
          price: 44.0,
          quantity: 1,
          imageSrc:
          `${window.location.origin}/navblue.png`
        },
        {
          name: "Cotton T-shirt",
          price: 44.0,
          quantity: 1,
          imageSrc:
          `${window.location.origin}/sss.png`
        },
      ];
    
      return (
        <section className="h-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div
                  className="card card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">
                              Shopping Cart
                            </h1>
                            <h6 className="mb-0 text-muted">
                              {products.length} items
                            </h6>
                          </div>
                          <hr className="my-4" />
                          {products.map((product, index) => (
                            <div
                              className="row mb-4 d-flex justify-content-between align-items-center"
                              key={index}
                            >
                              <div className="col-md-2 col-lg-2 col-xl-2">
                                <img
                                  src={product.imageSrc}
                                  className="img-fluid rounded-3"
                                  alt={product.name}
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3">
                                <h6 className="text-muted">Shirt</h6>
                                <h6 className="text-black mb-0">{product.name}</h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <button className="btn btn-link px-2">
                                  <i><Minus height="50" width="20" stroke="black"/></i>
                                </button>
                                <input
                                  id={`form${index}`}
                                  min="0"
                                  name="quantity"
                                  value={product.quantity}
                                  type="number"
                                  className="form-control form-control-sm"
                                />
                                <button className="btn btn-link px-2">
                                  <i ><Plus height="50" width="20" stroke="black"/></i>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="mb-0">₹ {product.price}</h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                <a href="#!" className="text-muted">
                                  <i><Times height="50" width="30" stroke="black"/></i>
                                </a>
                              </div>
                            </div>
                          ))}
                          <hr className="my-4" />
    
                          <div className="pt-5">
                            <h6 className="mb-0">
                              <a href="#!" className="text-body">
                                <i className="fas fa-long-arrow-alt-left me-2"></i>
                                Back to shop
                              </a>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 bg-grey">
                        <div className="p-5">
                          <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                          <hr className="my-4" />
                          <div class="col-lg-4 bg-grey"></div>
                          <div class="d-flex justify-content-between mb-4">
                            <h5 class="text-uppercase">items 3</h5>
                            <h5>₹ 132.00</h5>
                          </div>
    
                          <h5 class="text-uppercase mb-3">Shipping</h5>
    
                          <div class="mb-4 pb-2">
                            <select class="select form-control form-control-lg">
                              <option value="1">Standard-Delivery- ₹5.00</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="4">Four</option>
                            </select>
                          </div>
    
                          <h5 class="text-uppercase mb-3">Give code</h5>
    
                          <div class="mb-5">
                            <div class="form-outline">
                              <input
                                type="text"
                                id="form3Examplea2"
                                class="form-control form-control-lg"
                              />
                              <label class="form-label" for="form3Examplea2">
                                Enter your code
                              </label>
                            </div>
                          </div>
    
                          <hr class="my-4" />
    
                          <div class="d-flex justify-content-between mb-5">
                            <h5 class="text-uppercase">Total price</h5>
                            <h5>₹ 137.00</h5>
                          </div>
    
                          <button
                            type="button"
                            class="btn btn-dark btn-block btn-lg w-full"
                           
                          >
                            Register
                          </button>
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
export default EcommerceDayB
