import React, {useEffect} from 'react';
import "./Thankyou.css";
import rightImg from "../../assets/white-tick.png"

const Thankyou = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  })
    return (
        <div id="main-wrapper">
        <div id="tick-wrapper">
          <img src={rightImg} alt="right tick" />
        </div>
        <h1 className="main-heading">Order Placed Successfully!!</h1>
        <p className="section-heading">
          We have sent you an email with the order details
        </p>
      </div>
    )
}

export default Thankyou;
