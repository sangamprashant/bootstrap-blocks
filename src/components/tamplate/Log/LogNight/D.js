import React from 'react'
import { FaceBook, Google, LinkedIn } from '../../../Icons'

function LogNightD() {
  return (
    <div class="container">
      <div class="row g-0 mt-5 mb-5 height-100 justify-content-center">
        <div class="col-md-6">
          <div class="bg-white p-4 h-100">
            <div class="p-3 d-flex justify-content-center flex-column align-items-center">
              {" "}
              <h3 class="main-heading">Signin To Cever</h3>
              <div class="social-list mt-3 d-flex gap-2">
                <button className="btn btn-success">
                  <i>
                    <FaceBook
                      height="30"
                      width="30"
                      stroke="white"
                      fill="white"
                    />
                  </i>
                </button>
                <button className="btn btn-danger">
                  <i>
                    <Google
                      height="30"
                      width="30"
                      stroke="white"
                      fill="white"
                    />
                  </i>
                </button>
                <button className="btn btn-primary">
                  <i>
                    <LinkedIn
                      height="30"
                      width="30"
                      stroke="white"
                      fill="white"
                    />
                  </i>
                </button>
              </div>
              <div class="form-data">
                {" "}
                <label>Email</label>{" "}
                <input type="text" class="form-control w-100" />{" "}
              </div>
              <div class="form-data">
                {" "}
                <label>Password</label>{" "}
                <input type="text" class="form-control w-100" />{" "}
              </div>
              <div class="form-data">
                <div class="d-flex justify-content-between w-100 align-items-center">
                  <div class="form-check">
                    {" "}
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />{" "}
                    <label class="form-check-label" for="flexCheckDefault">
                      {" "}
                      Remember me{" "}
                    </label>{" "}
                  </div>{" "}
                  <a class="text-decoration-none forgot-text" href="#">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="form-data d-flex">
                <div class="signin-btn w-100 mt-2">
                  {" "}
                  <button class="btn btn-danger btn-block w-100">
                    Signin
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogNightD
