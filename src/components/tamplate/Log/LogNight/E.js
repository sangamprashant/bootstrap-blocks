import React from 'react'
import { FaceBook, Google, LinkedIn } from '../../../Icons'

function LogNightE() {
  return (
<div class="container mt-5 mb-5">
      {" "}
      <div class="row d-flex justify-content-center">
        {" "}
        <div class="col-md-8">
          {" "}
          <div class="border text-white px-5 py-4">
            {" "}
            <div class="content">
              {" "}
             <span>BOOTSTRAPFINDS</span>{" "}
            </div>{" "}
            <div class="content">
              {" "}
              <h3>
                Sign Up Today To <br />
                Receive $500 in Credits
              </h3>{" "}
              <div class="content2">
                {" "}
                <span>
                  If you sign up today,we'll send you $500 in credits.
                  <br /> You'll grow your business without spending lots of{" "}
                  <br /> money on marketing.{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div class="mt-3">
              {" "}
              <div class="row g-2">
                {" "}
                <div class="col-md-6">
                  {" "}
                  <div class="entry">
                    {" "}
                    <span>First Name</span>{" "}
                    <input placeholder="First name" class="form-control" />{" "}
                  </div>{" "}
                </div>{" "}
                <div class="col-md-6">
                  {" "}
                  <div class="entry">
                    {" "}
                    <span>Last Name</span>{" "}
                    <input placeholder="Last name" class="form-control" />{" "}
                  </div>{" "}
                </div>{" "}
                <div class="col-md-6">
                  {" "}
                  <div class="entry">
                    {" "}
                    <span>Email</span>{" "}
                    <input placeholder="Email" class="form-control" />{" "}
                  </div>{" "}
                </div>{" "}
                <div class="col-md-6">
                  {" "}
                  <div class="entry">
                    {" "}
                    <span>Password</span>{" "}
                    <input placeholder="Password" class="form-control" />{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="row g-2 mt-2">
              {" "}
              <div class="col-md-6">
                {" "}
                <button class=" mt-1 btn btn-dark w-100">Get Started</button>{" "}
              </div>{" "}
              <div class="col-md-6">
                {" "}
                <div class="icons mt-1 d-flex flex-row gap-2">
                  {" "}
                  <button className="btn btn-dark">
                    <i ><FaceBook height="20" width="20" stroke="white" fill="white" /></i>
                  </button>{" "}
                  <button className="btn btn-dark">
                    <i><Google height="20" width="20" stroke="white" fill="white"/></i>
                  </button>{" "}
                  <button className="btn btn-dark">
                    <i ><LinkedIn height="20" width="20" stroke="white" fill="white"/></i>
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  )
}

export default LogNightE
