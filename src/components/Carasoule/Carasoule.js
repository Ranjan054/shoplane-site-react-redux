import React, { Component } from 'react'
import "./Carasoule.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imgc1 from "../../assets/c1.png";
import imgc2 from "../../assets/c2.png";
import imgc3 from "../../assets/c3.png";
import imgc4 from "../../assets/c4.png";


class Carasoule extends Component {
  render() {

    const set = {
      interval: 2000,
      autoPlay: true,
      infiniteLoop: true,
      showStatus: false,
      showThumbs: false,
      transitionTime: 600
    }

    return (
      <div id="carousel">

      <Carousel {...set}>
        <div >
          <img src={imgc1} alt="model" />
        </div>
        <div>
          <img src={imgc2} alt="model" />
        </div>
        <div>
          <img src={imgc3} alt="model" />
        </div>
        <div>
          <img src={imgc4} alt="model" />
        </div>
      </Carousel>
      </div>


    )
  }
}


export default Carasoule;

