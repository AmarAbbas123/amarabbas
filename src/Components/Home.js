import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Services from "./Services";
import Slider from "./Slider";

function Home() {
  return (
    <>
      <main className="page-wrapper-two">
        {/* <!-- start slider area --> */}

        <Slider />
        {/* <!-- start slider area End -->

<!-- Start Service Area --> */}
        <About />
        {/* <!-- End Service Area  --> */}

        {/* <!-- Start Service Area --> */}
        <Services />
        {/* <!-- End Service Area  --> */}

        {/* <!-- Start Portfolio Area --> */}
        <Portfolio />
        {/* <!-- End portfolio Area -->
<!-- Start Resume Area --> */}
        <Resume />

        {/* <!-- End Resume Area -->




<!-- Start Contact section --> */}

        <Contact />
        {/* <!-- End Contuct section --> */}

        {/* <!-- Start Footer Area --> */}

        <Footer />

        {/* <!-- End Footer Area -->
<!-- modal area -->
<!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/upload.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>MERN Stack App</span> Data Pull (CSV Data)
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>Technologies: React JS, Redux, Firebase</li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend with a Database of web application
                            which includes Authentications, Authorizations and a
                            lot more other functions
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://github.com/AmarAbbas123/data_pull.git"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area -->


 <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="whatsappModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/prey1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>Preynetworkinc</span>
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>
                            Technologies: HTML5, CSS3, Bootstrap, JavaScript
                          </li>
                          <li>
                            Responsibility: I have developed the Front-End of
                            the Website,
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://www.preynetworkinc.com/"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}

        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="mernModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/landing/mern1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>ReactJS | NodeJS | ExpressJS | MangoDB</span>{" "}
                        Doctor Appoitmrnt CRUD App (MERN App)
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>
                            Technologies: ReactJS | NodeJS | ExpressJS | MangoDB
                          </li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend with a NodeJS express server of web
                            application which includes Authentication,
                            Authorization, view data, update data, delete data
                            and insert data.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://github.com/AmarAbbas123/Softoobootcamp-project.git"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}
        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="mernModalCenter1"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/ammar1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>Portfolio Website</span> Simple Portfolio website
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>Technologies: HTML5, CSS3 and Bootstrap5</li>
                          <li>
                            Responsibility: I have developed the whole website.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="http://alilogicsinfotech.com/Ammar1/"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}
        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="event"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/eve1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>WordPress Website</span> Culloden by the Sea an
                        online event booking website.
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>
                            Technologies: WordPress | Elementor | WooCommerce
                          </li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend using WordPress.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://cullodenestate.com/"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}
        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="studio"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/my1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>WordPress Website</span>
                        Mystudio52 an online frame selling website.
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>
                            Technologies: WordPress | Elementor | WooCommerce
                          </li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend using WordPress.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a href="https://mystudio52.com/" className="rn-btn">
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}
        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="hal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/hal1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>WordPress Website</span>
                        HalaZone Technologies
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>Technologies: WordPress | Elementor</li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend using WordPress.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://silver.pitturagroup.com/"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}

        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="cam"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/241.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        <span>WordPress Website</span>
                        Altmühlsee Camping Herzog
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>
                            Technologies: WordPress | Elementor | WooCommerce
                          </li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend using WordPress.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://www.24.camping-herzog.de/"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}

        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="tour"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/gui1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>
                        Guided Tours Interlaken an online tour booking website
                      </h3>
                      <p className="mb--30">
                        <ul>
                          <li>
                            Technologies: WordPress | Elementor | WooCommerce
                          </li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend using WordPress.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a
                          href="https://guided-tours-interlaken.com/"
                          className="rn-btn"
                        >
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}
        {/* <!-- Modal Portfolio Body area Start --> */}
        <div
          className="modal fade"
          id="regal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i data-feather="x"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-popup-thumbnail">
                      <div className="image">
                        <img
                          className="w-100"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/portfolio/re1.png"
                          }
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="text-content">
                      <h3>Regal Customs brokers</h3>
                      <p className="mb--30">
                        <ul>
                          <li>Technologies: WordPress | Elementor</li>
                          <li>
                            Responsibility: I have developed the Front-End as
                            well as Backend using WordPress.
                          </li>
                        </ul>
                      </p>
                      <div className="button-group mt--20">
                        <a href="https://regalbrokers.com/" className="rn-btn">
                          <span>VIEW PROJECT</span>
                          <i data-feather="chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    {/* <!-- End of .text-content --> */}
                  </div>
                </div>
                {/* <!-- End of .row Body--> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Modal Portfolio area --> */}

        <div className="backto-top">
          <div>
            <i data-feather="arrow-up"></i>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
