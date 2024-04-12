import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* about area start */}
      <div className="about-area-2 pd-top-120 pd-bottom-240">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-5 order-lg-2">
                <div className="about-thumb-wrap mb-lg-0 mb-4">
                  <img
                    className="img-1"
                    src="assets/img/about/shape.png"
                    alt="Removalist"
                  />
                  <img
                    className="img-2"
                    src="assets/img/about/about-one.jpg"
                    alt="Removalist"
                  />
                  <img
                    className="img-3"
                    src="assets/img/about/about-two.jpg"
                    alt="Removalist"
                  />
                  <div className="exprience-wrap">
                    <img src="assets/img/about/shape-3.png" alt="Removalist" />
                    <div className="details">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={22} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 align-self-center order-lg-1">
                <div className="about-inner-wrap ms-0">
                  <div className="section-title mb-0">
                    <h4 className="subtitle">ABOUT US</h4>
                    <h2 className="title mb-2">
                      BEST WORLD’S LEADING REMOVALIST COMPANY
                    </h2>
                    <p>
                      Removalists Near Me is a highly regarded Australian
                      company offering a wide range of affordable moving
                      services nationwide. We focus on delivering exceptional
                      customer service, building long-term relationships, and
                      ensuring a stress-free relocation experience. Our team of
                      professionals is dedicated to providing high-quality,
                      personalized service for every client.
                    </p>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="single-about-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/about/icon-1.png"
                              alt="Transpro"
                            />
                          </div>
                          <div className="details">
                            <h6>Unlimited Revisions &amp; Best Solutions</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="single-about-wrap">
                          <div className="icon">
                            <img
                              src="assets/img/about/icon-2.png"
                              alt="Transpro"
                            />
                          </div>
                          <div className="details">
                            <h6>24/7 Support For Any Clients</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrap">
                      <Link className="btn btn-base" to="/about">
                        DISCOVER MORE
                      </Link>
                      {/* <div className="video-wrap d-flex align-items-center gap-2">
                        <span
                          className="video-play-btn cursor-pointer"
                          data-effect="mfp-zoom-in"
                          onClick={() => setOpen(true)}
                        >
                          <FaPlay />
                        </span>
                        <span>Watch The Video</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="XM6kTQPzzpQ"
          onClose={() => setOpen(false)}
        /> */}
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutTwo;
