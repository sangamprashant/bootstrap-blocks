import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    imageUrl: `user.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 1",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    imageUrl: `user.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 1",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    imageUrl: `user.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 1",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    imageUrl: `user.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 1",
  },
];

function TestimonialDayC() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center py-3 row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mr-2 col-md-6">
            <div
              className={`card shadow rounded-3 ${
                isDarkMode ? "bg-dark text-white" : "bg-white text-dark"
              }`}
            >
              <div className="px-2 py-2">
                <span className="maintxt">{testimonial.text}</span>
                <div className="d-flex pt-3 gap-3">
                  <div>
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="ml-2">
                    <span className="name">{testimonial.name}</span>
                    <p className="para">{testimonial.companyName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialDayC;
