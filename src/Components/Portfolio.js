import React from "react";

function Portfolio() {
  return (
    <div
      className="rn-portfolio-area rn-section-gap section-separator"
      id="portfolio"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="section-title text-center"
            >
              <span className="subtitle">
                Visit my portfolio and keep your feedback
              </span>
              <h2 className="title">My Portfolio</h2>
            </div>
          </div>
        </div>

        <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/data.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">Data Fetch (MERN)</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        600
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Read dara from CSV File using MERN Stack{" "}
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio -->

            <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#whatsappModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/prey.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        750
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Preynetworkinc
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}

          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#mernModalCenter"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/mern.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">
                        MERN Online Doctor Appoitmrnt
                      </a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Simple Online Doctor Appoitmrnt (CRUD Operation) using
                      MERN Stack
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#mernModalCenter1"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/ammar.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">Portfolio Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Simple Portfolio website build using HTML5, CSS3 and
                      Bootstrap5.
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}

          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#event"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/eve.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">WordPress Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Culloden by the Sea an online event booking website using
                      WordPress
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}

          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#studio"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/my.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">WordPress Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Mystudio52 an online framing selling website
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#hal"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/hal.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">WordPress Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      HalaZone Technologies
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#cam"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/24.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">WordPress Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Altmühlsee Camping Herzog
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#tour"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/gui.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">WordPress Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Guided Tours Interlaken an online tour booking website
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
          {/* <!-- Start Single Portfolio --> */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
          >
            <div
              className="rn-portfolio"
              data-toggle="modal"
              data-target="#regal"
            >
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/portfolio/re.png"
                      }
                      alt="Personal Portfolio Images"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">WordPress Website</a>
                    </div>
                    <div className="meta">
                      <span>
                        <a href="javascript:void(0)">
                          <i className="feather-heart"></i>
                        </a>
                        630
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Regal Customs brokers
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Single Portfolio --> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
