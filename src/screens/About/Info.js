import React from "react";

import companyImg from "../../assets/images/company.jpg";
import chairmanImg from "../../assets/images/chirman.jpg";

const Info = () => {
  return (
    <section className="section about_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="innerpage_about_img">
              <img src={companyImg} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="innerpage_about_detail">
              <h3>About the company</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="innerpage_about_detail">
              <h3>message from chairman</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="innerpage_about_img mb-0">
              <img src={chairmanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
