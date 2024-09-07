import React from "react";

function About() {
  return (
    <div>
      <div className=" section-separator " id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                data-aos-once="true"
              >
                {/* <!-- <span className="subtitle">Speciality</span> --> */}
              </div>
            </div>

            <div className="col-lg-5">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo/amar.jpg"}
                className=""
              />
            </div>
            <div className="col-lg-7 mt--10 ">
              <h3 className="title mb-5 about-p">About Me</h3>

              <p className="mt--35">
                A passionate front-end Developer with experience building Web
                applications with JavaScript / TypeScript / React JS and some
                other cool libraries and frameworks. Strong engineering
                professional with a Bachelor's degree focused in Computer
                Science from UET Peshawar. I love to solve problems and develop
                innovative solutions for those problems.
              </p>
              <div className="button-area">
                <a className="rn-btn" href="#resume">
                  <span>Resume/CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
