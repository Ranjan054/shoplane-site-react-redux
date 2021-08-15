import React from "react";
import "./BannerIcons.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
const BannerIcons = () => {
  return (
    <div id="features">
      <div className="icon-container">
        <div className="img-wrapper">
          <img src={icon1} alt="free delivery icon" />
        </div>
        <h4>Free Delivery</h4>
      </div>

      <div className="icon-container">
        <div className="img-wrapper">
          <img src={icon2} alt="money back gurantee icon" />
        </div>
        <h4>Money Back Gurantee</h4>
      </div>

      <div className="icon-container">
        <div className="img-wrapper">
          <img src={icon3} alt="always support icon" />
        </div>
        <h4>Always Support</h4>
      </div>

      <div className="icon-container">
        <div className="img-wrapper">
          <img src={icon4} alt="secure payment icon" />
        </div>
        <h4>Secure Payment</h4>
      </div>
    </div>
  );
};

export default BannerIcons;
