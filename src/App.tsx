import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import HomeTwo from "./screens/HomeTwo";
import About from "./screens/About";
import Service from "./screens/Service";
import ServiceDetails from "./screens/ServiceDetails";
import Blog from "./screens/Blog";
import BlogDetails from "./screens/BlogDetails";
import Pricing from "./screens/Pricing";
import Faq from "./screens/Faq";
import Contact from "./screens/Contact";
import "./App.css";
import GetQuote from "./screens/GetQuote";
import Auth from "./screens/Auth";
import MovingLocal from "./screens/MovingLocal";
import RubbishRemoval from "./screens/RubbishRemoval";
import MovingFragile from "./screens/MovingFragile";
import Pickups from "./screens/Pickups";
import MovingPool from "./screens/MovingPool";
import MovingPiano from "./screens/MovingPiano";
import MovingInterstate from "./screens/MovingInterstate";
import MovingOffice from "./screens/MovingOffice";
import MovingFurniture from "./screens/MovingFurniture";
import MovingSingle from "./screens/MovingSingle";
import MovingMore from "./screens/MovingMore";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/moving-local" element={<MovingLocal />} />
        <Route path="/moving-inter" element={<MovingInterstate />} />
        <Route path="/moving-office" element={<MovingOffice />} />
        <Route path="/moving-furniture" element={<MovingFurniture />} />
        <Route path="/moving-single" element={<MovingSingle />} />
        <Route path="/moving-more" element={<MovingMore />} />
        <Route path="/moving-piano" element={<MovingPiano />} />
        <Route path="/moving-pool" element={<MovingPool />} />
        <Route path="/pickups" element={<Pickups />} />
        <Route path="/moving-fragile" element={<MovingFragile />} />
        <Route path="/rubbish" element={<RubbishRemoval />} />
      </Routes>
      <ScrollToTop smooth color="#FA4318" />
    </BrowserRouter>
  );
}

export default App;
