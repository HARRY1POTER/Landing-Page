// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Service from "./components/Service";
// import Shop from "./components/Shop";
// import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";
// import Blog from "./components/Blog";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Service />
//       <Shop />
//       <Portfolio />
//       <Blog />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Service />
      <Shop />
      <Portfolio />
      <Blog />
      <Footer />

      {isVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "50px",
            color: "white",
            right: "30px",
            // border: "2px solid",
            background: "gray",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={scrollToTop}
        >
          ^
        </div>
      )}
    </div>
  );
}

export default App;
