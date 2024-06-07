import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import MovingPianoContent from "../components/MovingPianoContent";
import MovingFurnitureContent from "../components/MovingFurnitureContent";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(
  () => import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
// const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const MovingFurniture = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SearchPopup /> */}

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb
            title={"MOVING FURNITURE"}
            img={'url("assets/img/quote/quote-cat-11.jpg")'}
          />

          {/* Get Quote Cards */}
          {/* <GetQuoteCards /> */}
          <div className="container pd-top-115 pd-bottom-90">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h5 className="subtitle">CREATE QUOTE</h5>
                  <h2 className="title">MOVING FURNITURE</h2>
                  <p className="content mt-2">
                    Just answer a few questions below so we can get you quotes
                    from the right businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MovingFurnitureContent />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default MovingFurniture;
