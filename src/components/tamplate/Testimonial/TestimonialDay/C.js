import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    imageUrl: `${window.location.origin}/user2.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 1",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: `${window.location.origin}/user1.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 2",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: `${window.location.origin}/user1.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 2",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: `${window.location.origin}/user1.jpg`,
    name: "Prashant Srivastav",
    companyName: "Company 2",
  },
  // Add more testimonial objects as needed
];

function TestimonialDayC() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center py-3 row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mr-2 col-md-6">
            <div className="card">
              <div className="px-2 py-2">
                <span className="maintxt">{testimonial.text}</span>
                <div className="d-flex pt-3">
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
