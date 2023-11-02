import React from 'react'

// Define an array of testimonial data
const testimonials = [
    {
      text:
        "At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.",
      image:
        "https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg",
      name: "Balbir Kaur",
      position: "Student",
    },
    {
      text:
        "At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Balbir Kaur",
      position: "Student",
    },
    {
      text:
        "At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.",
      image:
        "https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Balbir Kaur",
      position: "Student",
    },
  ];
  

function TestimonialDayA() {
  return (
    <section className="home-testimonial">
      <div className="container-fluid">
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
                <div className="col-md-4 style-3" key={index}>
                  <div className="tour-item">
                    <div className="tour-desc bg-white p-3">
                      <div className="tour-text color-grey-3 text-center">
                        &ldquo;{testimonial.text}&rdquo;
                      </div>
                      <div className="d-flex justify-content-center pt-2 pb-2">
                        <img
                          className="tm-people"
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
  )
}

export default TestimonialDayA
