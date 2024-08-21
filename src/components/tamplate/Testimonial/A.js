import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

// Define an array of testimonial data
const testimonials = [
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas porro accusantium similique, dolor pariatur sed rerum libero repellendus, alias reiciendis fugiat natus, ad eveniet. Ea voluptatem eligendi reprehenderit ex!",
    image: `user.jpg`,
    name: "Prashant Srivastav",
    position: "Student",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas porro accusantium similique, dolor pariatur sed rerum libero repellendus, alias reiciendis fugiat natus, ad eveniet. Ea voluptatem eligendi reprehenderit ex!",
    image: `user.jpg`,
    name: "Prashant Srivastav",
    position: "Student",
  },
  {
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas porro accusantium similique, dolor pariatur sed rerum libero repellendus, alias reiciendis fugiat natus, ad eveniet. Ea voluptatem eligendi reprehenderit ex!",
    image: `user.jpg`,
    name: "Prashant Srivastav",
    position: "Student",
  },
];

function TestimonialDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <section className="home-testimonial">
      <div className={`container-fluid text-${isDarkMode ? "white" : "dark"}`}>
        <div className="row d-flex justify-content-center testimonial-pos">
          <div className="col-md-12 pt-4 d-flex justify-content-center">
            <h3>Testimonials</h3>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <h2>Explore the students' experience</h2>
          </div>
        </div>
        <section className="home-testimonial-bottom">
          <div className="container testimonial-inner">
            <div className="row d-flex justify-content-center">
              {testimonials.map((testimonial, index) => (
                <div className="col-md-4 style-3 " key={index}>
                  <div className="tour-item ">
                    <div
                      className={`tour-desc bg-${
                        isDarkMode ? "dark" : "white"
                      } shadow p-3 rounded-3`}
                    >
                      <div className="tour-text color-grey-3 text-center">
                        &ldquo;{testimonial.text}&rdquo;
                      </div>
                      <div className="d-flex justify-content-center pt-2 pb-2">
                        <img
                          className="tm-people rounded-circle object-fit-cover"
                          height="80"
                          src={testimonial.image}
                          alt=""
                        />
                      </div>
                      <div className="link-name d-flex justify-content-center">
                        {testimonial.name}
                      </div>
                      <div className="link-position d-flex justify-content-center">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default TestimonialDayA;
