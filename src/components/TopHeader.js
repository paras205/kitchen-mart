import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="top-header bg-gray">
      <div className="container">
        <div className="header-left topHeader_item">
          <ul className="topHeader_detail">
            <li>
              <span className="fa fa-phone" /> 01 234 56 789
            </li>
            <li>
              <span className="fa fa-envelope-o" /> abc@gmail.com
            </li>
          </ul>
        </div>
        <div className="header-right topHeader_item">
          <ul className="header_social_links">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
