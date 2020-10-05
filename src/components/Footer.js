import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer_item">
              <h3>About Us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                survived not only five centuries, but also the leap into
                electronic typesetting
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_item">
              <h3>Quick Links</h3>
              <ul className="footer_links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_item">
              <h3>Find Us</h3>
              <ul className="footer_address">
                <li>Address: Kathmandu Nepal</li>
                <li>Phone: 01 234 567 890</li>
                <li>Email: abc@gmail.com</li>
              </ul>
              <ul className="social_media">
                <li className="facebook">
                  <Link to="/">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li className="twitter">
                  <Link to="/">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li className="youtube">
                  <Link to="/">
                    <i className="fa fa-youtube" />
                  </Link>
                </li>
                <li className="instagram">
                  <Link to="/">
                    <i className="fa fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
