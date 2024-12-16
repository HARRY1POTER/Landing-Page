import React from "react";
import "../App.css";
import img from "../new/Home-10-rev-img 1.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container-fluid container1">
        <div className="row">
          <div className="col-sm-12 col-lg-6 co1">
            <p className="p1">LATEST PRODUCT</p>
            <h1 className="h1 " style={{ fontSize: "80px" }}>
              The New Era of <br />
              App Desgine & <br />
              Tech
            </h1>
            <p className="p2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br />
              In quis sollicitudin elit,quis mattis sem.{" "}
            </p>
            <button className="button">View more</button>
          </div>
          <div className="col-sm-12 col-lg-5 co2">
            <img src={img} alt="img" className="img-fluid img1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
