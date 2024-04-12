import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import GetQuoteCards from "../components/GetQuoteCards";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(
  () => import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const GetQuote = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb
            title={"GET QUOTE"}
            img={'url("assets/img/quote/get-quote.jpg")'}
          />

          {/* Get Quote Cards */}
          <GetQuoteCards />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default GetQuote;
