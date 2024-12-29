import React from "react";
import "../App.css";
import img from "../new/Home-10-icon-img1 1.png";
import img2 from "../new/Home-10-icon-img2 1.png";
import img3 from "../new/image 1.png";
import img4 from "../new/image 2.png";
import img5 from "../new/image 3.png";

const Service = () => {
  return ( 
    <div id="service">
      <div class="container container2 my-5">
        <p class="p1">TRULY MORDEN</p>
        <h1 class="h12">
          End-to-end? Best of br /eed?
          <br />
          How about both.
        </h1>
        <p class="p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          consectetur erat ante, et finibus <br />
          tellus pousere nec. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nam consectetur erat <br />
          ante, et finibus tellus pousere nec.
        </p>
      </div>
      <div class="container container3">
        <div class="row  justify-content-center">
          <div class="col-sm-12 col-lg-4 c3a ">
            <p class="p1">SERVICES</p>
            <h1 class="h12">Products and Services Built to Perform</h1>
            <button class="button">VIEW MORE</button>
          </div>
          <div class="col-sm-12 col-lg-3 c3b">
            <img src={img} alt="img" class="imagee" />
            <p>Connect</p>
          </div>
          <div class="col-sm-12 col-lg-3 c3b">
            <img src={img2} alt="img" />
            <p>Data</p>
          </div>
        </div>
      </div>
      <div class="container container3 mb-5">
        <div class="row  justify-content-center">
          <div class="col-sm-12 col-lg-4 c3b ">
            <img src={img3} alt="img" />
            <p>Subscribe</p>
          </div>
          <div class="col-sm-12 col-lg-3 c3b">
            <img src={img4} alt="img" />
            <p>Statistic</p>
          </div>
          <div class="col-sm-12 col-lg-3 c3b">
            <img src={img5} alt="img" />
            <p>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
