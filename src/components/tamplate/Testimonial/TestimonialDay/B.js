import React from "react";

const testimonials = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    imageSrc: `${window.location.origin}/user1.jpg`,
    name: "Prashant Srivastav",
    position: "Student, BCA",
  },
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    imageSrc: `${window.location.origin}/user1.jpg`,
    name: "Prashant Srivastav",
    position: "Student, BCA",
  },
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    imageSrc: `${window.location.origin}/user1.jpg`,
    name: "Prashant Srivastav",
    position: "Student, BCA",
  },
];

function TestimonialDayB() {
  return (
    <div className="container">
      <div className="row">
        {testimonials.map((testimonial) => (
          <div className="col-md-4" key={testimonial.id}>
            <div className="card mt-5 p-3">
              <div className="comment mb-3">{testimonial.comment}</div>
              <div className="info text-center mt-4">
                <img
                  src={testimonial.imageSrc}
                  width="70"
                  className="rounded-circle mb-1"
                  alt={testimonial.name}
                />
                <h4 className="mt-1">{testimonial.name}</h4>
                <h5 className="mb-4">{testimonial.position}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialDayB;
