import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import MovingOfficeContent from "../components/MovingOfficeContent";
import MovingFragileContent from "../components/MovingFragileContent";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(
  () => import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
// const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const MovingFragile = () => {
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
            title={"MOVING FRAGILE ITEMS"}
            img={'url("assets/img/quote/quote-cat-9.jpg")'}
          />

          {/* Get Quote Cards */}
          {/* <GetQuoteCards /> */}
          <div className="container pd-top-115 pd-bottom-90">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center">
                  <h5 className="subtitle">CREATE QUOTE</h5>
                  <h2 className="title">MOVING FRAGILE ITEMS</h2>
                  <p className="content mt-2">
                    Just answer a few questions below so we can get you quotes
                    from the right businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MovingFragileContent />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default MovingFragile;
