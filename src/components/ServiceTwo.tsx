import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ServiceTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* service area start */}
      <div
        className="service-area pd-top-115 pd-bottom-120"
        style={{ background: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h4 className="subtitle style-2">SERVICES</h4>
                <h2 className="title">OUR SERVICE FOR YOU</h2>
                <p>
                  Quickly optimize cooperative models for long-term high-impact
                  ROI. Drive innovative e-commerce and distributed paradigms.
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end align-self-center">
              <div className="btn-wrap mb-5 mb-lg-0">
                <Link className="btn btn-base" to="/service">
                  VIEW ALL SERVICES
                </Link>
              </div>
            </div>
          </div>
          <div className="service-slider owl-carousel">
            <Slider {...settings}>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="assets/img/service/service-icon-001.png"
                        alt="Transpro"
                      />
                      <img
                        className="img-2"
                        src="assets/img/service/service-icon-01.png"
                        alt="Transpro"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>HOUSE REMOVALS</h5>
                    <p>
                      You will enjoy your house moving with Removalists Near Me
                      Australia. Our professionals are well trained and skilled
                      in completing the house move with the required level of
                      care. We tailor our moving services according to the
                      requirements of our clients, and our services will be
                      under your budget.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" to="/service-details">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="assets/img/service/service-icon-002.png"
                        alt="Transpro"
                      />
                      <img
                        className="img-2"
                        src="assets/img/service/service-icon-02.png"
                        alt="Transpro"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>FURNITURE REMOVALS</h5>
                    <p>
                      We are Australia leading furniture removalists that follow
                      all standard ways to pack and move the furniture. We
                      deliver expert service to each client and make them
                      comfortable throughout the moving process. Our packers
                      wrap household furniture in a heavy-duty packing blanket
                      so that no damage can occur.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" to="/service-details">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="assets/img/service/service-icon-003.png"
                        alt="Transpro"
                      />
                      <img
                        className="img-2"
                        src="assets/img/service/service-icon-03.png"
                        alt="Transpro"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>OFFICE REMOVALS</h5>
                    <p>
                      No one can understand the best way to relocate your office
                      better than us. We are always happy to relocate your
                      office locally and interstate, and we have all desired
                      tools and skills to complete your office move smoothly and
                      easily.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" to="/service-details">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="single-service-wrap-2"
                  style={{ backgroundImage: "url(assets/img/service/10.png)" }}
                >
                  <div className="thumb">
                    <div className="icon">
                      <img
                        src="assets/img/service/service-icon-002.png"
                        alt="Transpro"
                      />
                      <img
                        className="img-2"
                        src="assets/img/service/service-icon-02.png"
                        alt="Transpro"
                      />
                    </div>
                  </div>
                  <div className="details">
                    <h5>INTERSTATE REMOVALS</h5>
                    <p>
                      If you have to move interstate, then Removalists Near Me
                      is here to help you. We are here to help you to move your
                      furniture and other belongings safely to the new address.
                      We aim to make every interstate move smooth and reliable.
                    </p>
                    <div className="btn-wrap">
                      <Link className="read-more-text" to="/service-details">
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceTwo;
