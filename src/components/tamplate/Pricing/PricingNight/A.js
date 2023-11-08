import React from 'react'

function PricingNightA() {
  return (
    <div className="page-content page-container" id="page-content">
    <div className="padding">
      <div className="text-center p-5">
        <h2 className="text-white">Price for your awesome product.</h2>
      </div>
      <div className="text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-sm-12 p-4 p-sm-5 border text-white">
            <h1 className="display-4"><sup>$</sup>12</h1>
            <div className="text-white">Regular license</div>
            <div className="py-4">
              <a href="#" className="btn btn-primary btn-rounded btn-lg" data-abc="true">
                Purchase
              </a>
            </div>
            <small className="text-white">End-product <strong>not</strong> for sale</small>
          </div>
          <div className="col-md-6 col-sm-12 p-4 p-sm-5 border text-white ">
            
            <h1 className="display-4"><sup>$</sup>60</h1>
            <div className="text-white">Extended license</div>
            <div className="py-4">
              <a href="#" className="btn btn-primary btn-rounded btn-lg" data-abc="true">
                Purchase
              </a>
            </div>
            <small className="text-white">Unlimited End-product for sale</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PricingNightA
