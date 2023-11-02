import React from "react";
import { People, ThumbUp, User } from "../../../Icons";
import Cart from "../../../Icons/Cart";

function BannerNightA() {
  return (
    <div className="container" style={{ marginTop: '100px' }}>
    <div className="row">
      <div className="col-md-3">
        <div className="counter-box colored d-flex flex-column justify-content-center align-items-center" style={{ background: '#3acf87' }}>
          <i><ThumbUp height="80" width="50" stroke="white" fill="none"/></i>
          <span className="counter text-white">2147</span>
          <p className="text-white">Happy Customers</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="counter-box d-flex flex-column justify-content-center align-items-center" style={{ background: '#f6f6f6' }}>
          <i><People height="80" width="50" stroke="black" fill="none"/></i>
          <span className="counter ">3275</span>
          <p>Registered Members</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="counter-box d-flex flex-column justify-content-center align-items-center" style={{ background: '#f6f6f6' }}>
          <i><Cart height="80" width="50" stroke="black" fill="none"/></i>
          <span className="counter">289</span>
          <p>Available Products</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="counter-box d-flex flex-column justify-content-center align-items-center" style={{ background: '#f6f6f6' }}>
          <i><User height="80" width="50" stroke="black" fill="none"/></i>
          <span className="counter">1563</span>
          <p>Saved Trees</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BannerNightA;
