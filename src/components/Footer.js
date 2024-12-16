import React from "react";
import "../App.css";
import img from "../new/Vector (1).png";
import img2 from "../new/Vector (2).png";
import img3 from "../new/Vector (3).png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <h1>LOGO</h1>
              <br />
              <img src={img} alt="Address" />
              <span>&nbsp;&nbsp;&nbsp;Seestrasse 21</span>
              <br />
              <br />
              <img src={img2} alt="Phone" />
              <span>
                &nbsp;&nbsp;&nbsp;00 123 45 67 89
                <br />
                &nbsp;&nbsp;&nbsp;998 76 54 321
              </span>
              <br />
              <br />
              <img src={img3} alt="Email" />
              <span>&nbsp;&nbsp;&nbsp;abc@example.com</span>
            </div>
            <div className="col-lg-2 col-sm-5" style={{ marginTop: "80px" }}>
              <p>
                MAIN HOME
                <br />
                CONTACT
                <br />
                PORTFOLIO
                <br />
                SHOP
                <br />
                BLOG
              </p>
            </div>
            <div
              className="col-lg-2 col-sm-5 ccc"
              style={{ marginTop: "80px" }}
            >
              <p>
                ABOUT US
                <br />
                ABOUT ME
                <br />
                OUR PROCESS
                <br />
                OUR TEAM
                <br />
                PRICING PLANS
              </p>
            </div>
            <div className="col-lg-5 col-sm-12" style={{ marginTop: "60px" }}>
              <h1>Our Newsletter</h1>
              <hr />
              <p>SUBSCRIBE</p>
            </div>
          </div> 
        </div>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <p className="m">2022 LOGO, All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
