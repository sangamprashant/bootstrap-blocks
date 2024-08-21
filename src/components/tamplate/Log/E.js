import React, { useContext } from "react";
import { Code, FaceBook, Google, LinkedIn } from "../../Icons";
import { AppContext } from "../../../context/AppContext";
import { AppName } from "../../../strings";
import PrimaryButton from "../../Reuse/PrimaryButton";

function LogDayE() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="container mt-5 mb-5">
      {" "}
      <div class="row d-flex justify-content-center">
        {" "}
        <div class="col-md-8">
          {" "}
          <div class={`card px-5 py-4 shadow ${isDarkMode?"text-light bg-dark":""}`}>
            {" "}
            <div class="content">
              {" "}
              <span>{AppName}</span>{" "}
            </div>{" "}
            <div class="content1">
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
                <PrimaryButton label="Get Started" c="w-100" />
              </div>{" "}
              <div class="col-md-6">
                {" "}
                <div class="icons d-flex flex-row gap-2">
                  {" "}
                  <PrimaryButton
                    label={
                      <i>
                        <FaceBook
                          height="30"
                          width="30"
                          stroke="white"
                          fill="white"
                        />
                      </i>
                    }
                  />
                  <PrimaryButton
                    label={
                      <i>
                        <LinkedIn
                          height="30"
                          width="30"
                          stroke="white"
                          fill="white"
                        />
                      </i>
                    }
                  />
                  <PrimaryButton
                    label={
                      <i>
                        <Google
                          height="30"
                          width="30"
                          stroke="white"
                          fill="white"
                        />
                      </i>
                    }
                  />
                </div>{" "}
              </div>{" "}
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default LogDayE;
