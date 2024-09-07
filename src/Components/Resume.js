import React from "react";

function Resume() {
  return (
    <div
      className="rn-resume-area rn-section-gap section-separator"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">1+ Years of Experience</span>
              <h2 className="title">My Resume</h2>
            </div>
          </div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
              <li className="nav-item " style={{ flexBasis: "50%" }}>
                <a
                  className="nav-link active"
                  id="education-tab"
                  data-toggle="tab"
                  href="#education"
                  role="tab"
                  aria-controls="education"
                  aria-selected="true"
                >
                  education
                </a>
              </li>
              <li className="nav-item" style={{ flexBasis: "50%" }}>
                <a
                  className="nav-link"
                  id="professional-tab"
                  data-toggle="tab"
                  href="#professional"
                  role="tab"
                  aria-controls="professional"
                  aria-selected="false"
                >
                  professional Skills
                </a>
              </li>
            </ul>
            {/* <!-- Start Tab Content Wrapper  --> */}
            <div className="rn-nav-content tab-content" id="myTabContents">
              {/* <!-- Start Single Tab  --> */}
              <div
                className="tab-pane show active fade single-tab-area"
                id="education"
                role="tabpanel"
                aria-labelledby="education-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row">
                    {/* <!-- Start Skill List Area  --> */}
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="content">
                        <span className="subtitle">2004 - 2021</span>
                        <h4 className="maintitle">Education Quality</h4>
                        <div className="experience-list">
                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>
                                    Bachelor of Science in Computer Science
                                  </h4>
                                  <span>
                                    Univeristy Of Engineering & Technology
                                    Peshawar (2018 - 2022)
                                  </span>
                                </div>
                                <div className="date-of-time">
                                  <span>3.00/4.0</span>
                                </div>
                              </div>
                              <p className="description">
                                Completed Bachelor of Science in Computer
                                Science from one of the top universities of the
                                country that teaches the advance concepts of
                                theoratical and technical aspects of Computer
                                Science and Software Engineering.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4> Higher Secondary School</h4>
                                  <span>
                                    Al Asar Academy Usterzai Payan Kohat (2015 -
                                    2017)
                                  </span>
                                </div>
                                <div className="date-of-time">
                                  <span>697/1100</span>
                                </div>
                              </div>
                              <p className="description">
                                Completed FSc from Al-Asar School and College,
                                Kohat, excelling in a focused curriculum that
                                laid a strong foundation for advanced studies in
                                science and mathematics.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>
                                    Secondary School Certificate (Science)
                                  </h4>
                                  <span>
                                    Al Asar Academy Usterzai Payan Kohat (2015)
                                  </span>
                                </div>
                                <div className="date-of-time">
                                  <span>817/1100</span>
                                </div>
                              </div>
                              <p className="description">
                                {" "}
                                Completed the Journey of high school at our
                                hometown from once of the top school and awarded
                                with good prizes at School Competetions like
                                class study competition, sport competition and
                                extra curriculum competitions.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Skill List Area  -->

                                <!-- Start Skill List Area 2nd  --> */}
                    <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                      <div className="content">
                        <span className="subtitle">2017 - 2022</span>
                        <h4 className="maintitle">Job Experience</h4>
                        <div className="experience-list">
                          {/* <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>Front-end Developer</h4>
                                  <span>Alilogics (2023 - Present)</span>
                                </div>
                                <div className="date-of-time">
                                  <span>Developer</span>
                                </div>
                              </div>
                              <p className="description">
                                As a front-end developer, I specialize in
                                building interactive and responsive web
                                applications using modern technologies like
                                JavaScript, TypeScript, React, and WordPress. I
                                collaborate closely with designers and back-end
                                developers to ensure seamless user experiences.
                                My focus is on creating intuitive interfaces,
                                optimizing performance, and maintaining clean,
                                scalable code for fast-loading, user- friendly
                                websites.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>MERN Stack (Trainee)</h4>
                                  <span>SOFTOO (09/2023 - 11/2022)</span>
                                </div>
                                <div className="date-of-time">
                                  <span>Trainee</span>
                                </div>
                              </div>
                              <p className="description">
                                Completed an intensive MERN Stack Bootcamp,
                                mastering MongoDB, Express, React, and Node.js
                                for full-stack web development. Proficient in
                                building dynamic web applications, creating
                                RESTful APIs, and deploying modern,
                                user-friendly solution.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  -->

                                            <!-- Start Single List  --> */}
                          <div className="resume-single-list">
                            <div className="inner">
                              <div className="heading">
                                <div className="title">
                                  <h4>React (Internship)</h4>
                                  <span>K2X Tech (01/2022 - 08/2022, )</span>
                                </div>
                                <div className="date-of-time">
                                  <span>5.00/5</span>
                                </div>
                              </div>
                              <p className="description">
                                Got Internship at 2022 and I completed my
                                internship at Front-end Development like HTML,
                                CSS, Bootstrap and React.
                              </p>
                            </div>
                          </div>
                          {/* <!-- End Single List  --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Skill List Area  --> */}
                  </div>
                </div>
              </div>
              {/* <!-- End Single Tab  -->

                    <!-- Start Single Tab  --> */}
              <div
                className="tab-pane fade "
                id="professional"
                role="tabpanel"
                aria-labelledby="professional-tab"
              >
                <div className="personal-experience-inner mt--40">
                  <div className="row row--40">
                    {/* <!-- Start Single Progressbar  --> */}
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">Front-end Skills</h4>
                          {/* <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">JavaScript</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.5s"
                                data-wow-delay=".3s"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">80%</span>
                              </div>
                            </div>
                          </div>

                          {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">TypeScript</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".4s"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">80%</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">React</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".4s"
                                role="progressbar"
                                style={{ width: "80%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">80%</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">
                              React-Bootstrap | Bootstrap5
                            </h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.7s"
                                data-wow-delay=".5s"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">100%</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">WordPress</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.8s"
                                data-wow-delay=".6s"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">100%</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">HTML | CSS</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.9s"
                                data-wow-delay=".7s"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">100%</span>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Single Progress Charts --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Single Progressbar  -->

                                <!-- Start Single Progressbar  --> */}
                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                      <div className="progress-wrapper">
                        <div className="content">
                          <span className="subtitle">Features</span>
                          <h4 className="maintitle">Backend Support Skills</h4>
                          {/* <!-- Start Single Progress Charts --> */}
                          <div className="progress-charts">
                            <h6 className="heading heading-h6">NodeJS</h6>
                            <div className="progress">
                              <div
                                className="progress-bar wow fadeInLeft"
                                data-wow-duration="0.6s"
                                data-wow-delay=".4s"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="percent-label">50%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                        <div className="progress-charts">
                          <h6 className="heading heading-h6">ExpressJS</h6>
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.6s"
                              data-wow-delay=".4s"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="percent-label">50%</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                        <div className="progress-charts">
                          <h6 className="heading heading-h6">MangoDB</h6>
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.7s"
                              data-wow-delay=".5s"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="percent-label">70%</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Single Progress Charts -->

                                            <!-- Start Single Progress Charts --> */}
                        <div className="progress-charts">
                          <h6 className="heading heading-h6">JSON </h6>
                          <div className="progress">
                            <div
                              className="progress-bar wow fadeInLeft"
                              data-wow-duration="0.8s"
                              data-wow-delay=".6s"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="85"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="percent-label">100%</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Single Progress Charts --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Single Progressbar  --> */}
                </div>
              </div>
            </div>
            {/* <!-- End Single Tab  --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
