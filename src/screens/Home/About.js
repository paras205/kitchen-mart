import React from "react";

import Title from "../../components/Title";
import BannerOne from "../../assets/images/banner-one.jpg";

const About = () => {
  return (
    <div className="section about-section-wrapper pos-relative">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Title title="WHO WE ARE" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into It has
              survived not only five centuries, but also the leap into survived
              not only five centuries, but also the leap into
            </p>
            <ul className="about-items">
              <li>Lorem Ipsum is simply dummy</li>
              <li>Lorem Ipsum is simply dummy</li>
              <li>Lorem Ipsum is simply dummy</li>
              <li>Lorem Ipsum is simply dummy</li>
              <li>Lorem Ipsum is simply dummy</li>
              <li>Lorem Ipsum is simply dummy</li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              <figure>
                <img src={BannerOne} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
