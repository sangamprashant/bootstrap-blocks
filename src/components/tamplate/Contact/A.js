import React, { useContext } from "react";
import PrimaryButton from "../../Reuse/PrimaryButton";
import { AppContext } from "../../../context/AppContext";

function ContactDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div class="formthree ptb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-md-offset-2">
            <form
              className={`card p-5 shadow ${
                isDarkMode ? "bg-dark text-light" : ""
              } `}
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="sr-only">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      required=""
                      id="nameSix"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="sr-only">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      required=""
                      id="emailSix"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="sr-only">Message</label>
                <textarea
                  class="form-control"
                  required=""
                  rows="7"
                  placeholder="Write Message"
                ></textarea>
              </div>
              <div className="mt-2">
                <PrimaryButton label="Send Message" c="w-100" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDayA;
