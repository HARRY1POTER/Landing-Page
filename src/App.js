import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Shop from "./components/Shop";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Shop />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
