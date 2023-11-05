import React from "react";

function HeroDayD() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4">{"Welcome to BOOTSTRAPFINDS"}</h1>
              <p className="lead">
                {
                  "Discover a wide range of pre-made Bootstrap components and code snippets at BOOTSTRAPFINDS. Streamline your web development with our collection of ready-to-use, responsive design elements."
                }
              </p>
              <a href={"#"} className="btn btn-light btn-lg">
                {"Get Started"}
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={"logo.png"} height="400" width="400" alt="Hero Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDayD;
