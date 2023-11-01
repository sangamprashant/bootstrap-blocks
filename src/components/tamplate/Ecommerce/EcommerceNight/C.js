import React from 'react';
import { Minus, Plus, Trash } from '../../../Icons';

function EcommerceNightC() {
  // Sample array of products
  const products = [
    {
      name: 'Basic T-shirt',
      price: 499.0,
      quantity: 2,
      size: 'M',
      color: 'Grey',
      imageSrc: `${window.location.origin}/navblue.png`
    },
    {
        name: 'Basic T-shirt',
        price: 499.0,
        quantity: 2,
        size: 'M',
        color: 'Grey',
        imageSrc: `${window.location.origin}/logo.png`
      },
    // Add more products as needed
  ];

  return (
    <section className="h-100" style={{ backgroundColor: 'gray' }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-white">Shopping Cart</h3>
             
            </div>

            {products.map((product, index) => (
              <div className="card rounded-3 mb-4 text-white" key={index} style={{backgroundColor:"#696969"}}>
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
                      <p><span className="text-white">Size: </span>{product.size} <span className="text-white">Color: </span>{product.color}</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2" onClick={() => {}}>
                        <i><Minus height="50" width="20" stroke="blue"/></i>
                      </button>
                      <input
                        id={`form${index}`}
                        min="0"
                        name="quantity"
                        value={product.quantity}
                        type="number"
                        className="form-control form-control-LG"
                        style={{backgroundColor:"transparent", color:"white"}}
                      />
                      <button className="btn btn-link px-2" onClick={() => {}}>
                        <i><Plus height="50" width="20" stroke="blue"/></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 className="mb-0">${product.price.toFixed(2)}</h5>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-danger"><i><Trash height="50" width="20" stroke="red"/></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="card mb-4 text-white" style={{backgroundColor:"#696969"}}>
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  <input type="text" id="form1" className="form-control form-control-lg" style={{backgroundColor:"transparent", color:"white"}} />
                  <label className="form-label" htmlFor="form1">Discount code</label>
                </div>
                <button type="button" className="btn btn-primary btn-lg ms-3">Apply</button>
              </div>
            </div>

            <div className="card" style={{backgroundColor:"#696969"}}>
              <div className="card-body">
                <button type="button" className="btn btn-primary btn-block btn-lg">Proceed to Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcommerceNightC;
