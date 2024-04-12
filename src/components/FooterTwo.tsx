import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelopeOpen,
  FaRegPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <>
      {/* footer area start */}
      <footer className="footer-area style-2">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 align-self-center">
                <div className="footer-top-subscribe">
                  {/* <div className="thumb">
                    <img src="assets/img/logo-white.png" alt="Transpro" />
                  </div> */}
                  <div className="media-left">
                    <h3>SUBSCRIBE OUR LATEST NEWS &amp; ARTICLES.</h3>
                  </div>
                  <div className="media-body widget widget_subscribe mb-0">
                    <div className="single-subscribe-inner">
                      <input type="text" placeholder="Email Address" />
                      <a className="btn btn-base" href="#">
                        <FaRegPaperPlane />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="widget widget_about">
                <h4 className="widget-title">ABOUT COMPANY</h4>
                <div className="details">
                  <p>
                    Removalists Near Me is a highly recognized and accredited
                    company that has lots of moving services to offer. We serve
                    all locations of Australia with our extensive network
                  </p>
                  <ul className="social-media style-border">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link to="/about">
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaArrowRight /> Faq
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <FaArrowRight />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">OUR SERVICES</h4>
                <ul>
                  <li>
                    <a href="#">
                      <FaArrowRight /> House Removals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaArrowRight /> Furniture Removals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaArrowRight /> Office Removals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaArrowRight /> Interstate Removals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaArrowRight /> Piano Removals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="widget widget_contact">
                <h4 className="widget-title">CONTACT NOW</h4>
                <div className="single-contact-inner">
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="details">
                    <p>2245 Gilbert Ave, Cincinnati, OH</p>
                    <p>45206, United States</p>
                  </div>
                </div>
                <div className="single-contact-inner">
                  <div className="icon">
                    <FaMobileAlt />
                  </div>
                  <div className="details">
                    <p>+1 800-226-4054</p>
                    <p>+1 800-654-7896</p>
                  </div>
                </div>
                <div className="single-contact-inner">
                  <div className="icon">
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className="details">
                    <p>info.logic@removals.com</p>
                    <p>info@removals.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterTwo;
