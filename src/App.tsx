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
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import GetQuote from "./screens/GetQuote";
import Auth from "./screens/Auth";

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
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ScrollToTop smooth color="#FA4318" />
    </BrowserRouter>
  );
}

export default App;
