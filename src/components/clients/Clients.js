import React from "react";
import Slider from "react-slick";

import Client_one from "../../assets/images/client_one.jpg";
import Client_two from "../../assets/images/client_two.png";
import Client_three from "../../assets/images/client_three.png";
import Client_four from "../../assets/images/client_four.png";
import Client_five from "../../assets/images/client_five.png";
import Client_six from "../../assets/images/client_six.png";

const Clients = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_one} alt="" />
          </figure>
        </div>
      </div>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_three} alt="" />
          </figure>
        </div>
      </div>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_four} alt="" />
          </figure>
        </div>
      </div>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_five} alt="" />
          </figure>
        </div>
      </div>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_six} alt="" />
          </figure>
        </div>
      </div>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_two} alt="" />
          </figure>
        </div>
      </div>
      <div>
        <div className="slider_item">
          <figure>
            <img src={Client_two} alt="" />
          </figure>
        </div>
      </div>
    </Slider>
  );
};

export default Clients;
