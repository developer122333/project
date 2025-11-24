import React, { useEffect } from "react";
import Header from "./components/header";
import "./App.css";

import Aos from "aos";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "components/footer";
import HomePage from "pages/homePage";
import ServiceDetailesPage from "pages/servicePage";
import Page from "pages/page";
import ScrollToTop from "components/scrollToTop";

const App = () => {
  useEffect(() => {
    Aos.init({});

    const script = document.createElement("script");
    script.src = "./assets/js/main2.js";
    script.async = true;
    script.defer = true;
    document.body.append(script);
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
         <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:id" element={<ServiceDetailesPage />} />
         </Routes>
        <Footer />
        <a
          href="https://wa.me/+963938525704"
          className="whatsapp-button hover-up-5"
          target="_blank"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </Router>
    </>
  );
};

export default App;
/*import ServicePage from "pages/servicePage1";
 import React from "react";
 import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function BlogPost() {
  let { id } = useParams();
  return <div style={{ fontSize: "50px" }}>Now showing post {id}
   </div>;
}

function Home() {
  return    <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt= "gyutyu" className="img-fluid" /> ;;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;*/






