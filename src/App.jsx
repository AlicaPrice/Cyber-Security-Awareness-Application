import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./CSS/style.scss";
import AOS from "aos";
import Home from "./Sections/Home";

function App() {
  
  const location = useLocation();

  //Scroll behaviours
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, [location.pathname]);

  //Initializing AOS
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  /* Routes for all pages. 
  Currently consists of only one, but any new pages
  would be added here.
  */
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;