import React from "react";
import "../App.css";
import img from "../new/image 5.png";
import img1 from "../new/Home-10-workflow-img2 1.png";
import img2 from "../new/image 6.png";
import img3 from "../new/Home-10-workflow-img3 1.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div class="container container7">
        <p class="h12">
          Our Buisness <br />
          Focus
        </p>
      </div>
      <div class="container container6 pt-5">
        <div class="row">
          <div class="col-lg-6 col-sm-12 co7">
            <img src={img} alt="img" class="img-fluid" />
          </div>
          <div class="col-lg-6 col-sm-12 co7a">
            <div class="hi">
              <h1 class="con7">
                Innovative Futuristic
                <br /> Features
              </h1>
              <p class="con7a">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Nulla et
                tincidunt urna. In hac habitasse platea dictumst et. Lorem ipsum
                dolor sit amet, consect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container container6">
        <div class="row">
          <div class="col-lg-6 col-sm-12 co7">
            <div class="hi1">
              <h1 class="con7">
                Platform and App
                <br /> Developing
              </h1>
              <p class="con7a">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Nulla et
                tincidunt urna. In hac habitasse platea dictumst et. Lorem ipsum
                dolor sit amet, consect.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 co7a">
            <img
              src={img1}
              alt="img"
              class="img-fluid py-5"
              style={{ paddingLeft: "120px" }}
            />
          </div>
        </div>
      </div>
      <div class="container container6">
        <div class="row">
          <div class="col-lg-6 col-sm-12 co7">
            <img src={img3} alt="img" class="img-fluid" />
          </div>
          <div class="col-lg-6 col-sm-12 co7a">
            <div class="hi2">
              <h1 class="con7">
                Multiple Option
                <br /> Available
              </h1>
              <p class="con7a">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Nulla et
                tincidunt urna. In hac habitasse platea dictumst et. Lorem ipsum
                dolor sit amet, consect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container container6">
        <div class="row">
          <div class="col-lg-6 col-sm-12 co7">
            <div class="hi3">
              <h1 class="con7">
                Modern & Unique
                <br />
                App Look
              </h1>
              <p class="con7a">
                Lorem ipsum dolor sit amet, consect adipiscing elit. Nulla et
                tincidunt urna. In hac habitasse platea dictumst et. Lorem ipsum
                dolor sit amet, consect.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 co7a">
            <img
              src={img2}
              alt="img"
              class="img-fluid "
              style={{ paddingLeft: "70px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
